import { gql } from '@apollo/client';

export const QUERY_BEERS = gql`
  query beers {
    beers {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const GET_BEER = gql`
  query beer($id: ID!) {
    beer(id: $id) {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const QUERY_TOP_BEERS = gql`
  query topBeers {
    topBeers {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const QUERY_FAVOURITES = gql`
  query favourites {
    favourites {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const QUERY_SEARCH_BEERS = gql`
  query search($query: String!) {
    search(query: $query) {
      id
      name
      brand
      description
      favourite
    }
  }
`;

export const QUERY_REVIEWS = gql`
query reviews($beerId: ID!) {
  reviews(beerId: $beerId) {
    comment
    rating
    user
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
     id
      name
      email
    }
  }
`;
