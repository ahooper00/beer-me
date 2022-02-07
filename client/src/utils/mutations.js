import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const ADD_BEER = gql`
  mutation saveBeer($name: String!, $brand: String!, $description: String!) {
    saveBeer(name: $name, brand: $brand, description: $description) {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($comment: String!, $rating: Int!, $beerId: ID!) {
    addReview(comment: $comment, rating: $rating, beerId: $beerId) {
      comment
      rating
    }
  }
`;

export const ADD_FAVOURITE = gql`
  mutation addFavourite($beerId: ID!) {
    addFavourite(beerId: $beerId)
  }
`;


export const REMOVE_FAVOURITE = gql`
  mutation unfavouriteBeer($beerId: ID!) {
    unfavouriteBeer(beerId: $beerId)
  }
`;
