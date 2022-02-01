import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($reviewText: String!) {
    addReview(reviewText: $reviewText) {
        _id
        reviewText
        reviewAuthor
        createdAt
        starReview
    }
}
`;

export const SAVE_BEER = gql`
mutation saveBeer($beer: SavedBeerInput!) {
  saveBeer(beer: $beer) {
    username
    email
    beerCount
    savedBeers {
      beerId
      brand
      description
      image
      link
    }
  }
}
`;

export const REMOVE_BEER = gql`
mutation removeBeer($beerId: String!) {
  removeBeer(beerId: $beerId) {
    username
    email
    beerCount
    savedBeers {
      beerId
      brand
      description
      image
      link
    }
  }
}
`;