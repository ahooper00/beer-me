const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input NewBeer {
    brand: [String]
    description: String
    image: String
    link: String
  }

  type Beer {
    beerId: String
    brand: [String]
    description: String
    image: String
    link: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    saveBeer(newBeer: NewBeer): Beer
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!): Review
    removeReview(reviewId: ID!): Review
  }
`;

module.exports = typeDefs