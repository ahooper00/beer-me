export const login = async (email, password) => {
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Incorrect Email or Password!");
  }
}

export const checkLoggedIn = async () => {
  const response = await fetch("/api/users/loggedin", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    return (await response.json()).loggedIn;
  } else {
    alert("Incorrect Email or Password!");
  }
}

export const signup = async (email, name, password) => {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(
      "Please ensure all details are entered and password is 8 characters long."
    );
  }
}

export const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(
      "Please ensure all details are entered and password is 8 characters long."
    );
  }
}