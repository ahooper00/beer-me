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

// export const LOGIN_USER = gql`
// mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_REVIEW = gql`
// mutation addReview($reviewText: String!) {
//     addReview(reviewText: $reviewText) {
//         _id
//         reviewText
//         reviewAuthor
//         createdAt
//         starReview
//     }
// }
// `;

// export const SAVE_BEER = gql`
// mutation saveBeer($beer: SavedBeerInput!) {
//   saveBeer(beer: $beer) {
//     username
//     email
//     beerCount
//     savedBeers {
//       beerId
//       brand
//       description
//       image
//       link
//     }
//   }
// }
// `;

// export const REMOVE_BEER = gql`
// mutation removeBeer($beerId: String!) {
//   removeBeerId(beerId: $beerId) {
//     username
//     email
//     beerCount
//     savedBeers {
//       beerId
//       brand
//       description
//       image
//       link
//     }
//   }
// }
// `;