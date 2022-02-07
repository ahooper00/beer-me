const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Review {
    comment: String
    rating: Int
    user: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Beer {
    id: ID!
    name: String
    brand: String
    description: String
    favourite: Boolean
  }

  type Query {
    beers: [Beer]
    topBeers: [Beer]
    beer(id: ID!): Beer
    search(query: String): [Beer]
    favourites: [Beer]
    reviews(beerId: ID!): [Review]
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBeer(name: String!, brand: String!, description: String!): Beer
    addReview(comment: String, rating: Int, beerId: ID!): Review
    addFavourite(beerId: ID!): Boolean
    unfavouriteBeer(beerId: ID!): Boolean
  }
`;

module.exports = typeDefs