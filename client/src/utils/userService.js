import { ADD_USER, LOGIN_USER } from "./mutations";
import auth from "./auth";
import client from './client';


export const login = async (email, password) => {
  const { data, error } = await client.mutate({
    mutation: LOGIN_USER,
    variables: { email, password }
  });

  if (error) {
    alert("Incorrect Email or Password!");
  } else {
    auth.login(data.login.token);
    document.location.replace("/");
  }
}

export const signup = async (email, name, password) => {
  const { data, error } = await client.mutate({
    mutation: ADD_USER,
    variables: { name, email, password }
  });

  if (error) {
    alert("Please ensure all details are entered and password is 8 characters long.");
  } else {
    auth.login(data.addUser.token);
    document.location.replace("/");
  }
}

export const logout = async () => {
  auth.logout();
  document.location.replace("/");
}