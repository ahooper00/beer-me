import { QUERY_SEARCH_BEERS, QUERY_BEERS, QUERY_TOP_BEERS, GET_BEER, QUERY_FAVOURITES } from './queries';
import { ADD_BEER, ADD_FAVOURITE, REMOVE_FAVOURITE } from './mutations';
import client from './client';

export const topBeers = async () => {
  const {error, data } = await client.query({
    query: QUERY_TOP_BEERS,
  });
  if (error) alert("Something went wrong");
  return data.topBeers;
}

export const AllBeers = async () => {
  const { data, error } = await client.query({
    query: QUERY_BEERS,
  });
  if (error) alert("Something went wrong");
  return data.beers;
}

export const AddBeer = async ({ name, brand, description }) => {
  const { data, error } = await client.mutate({
    mutation: ADD_BEER,
    variables: { name, brand, description }
  });
  return data;
}

export const SearchBeers = async (query) => {
  const { data } = await client.query({
    query: QUERY_SEARCH_BEERS,
    variables: { query }
  });
  return data.search;
}

export const FavouriteBeer = async (beerId) => {
  const { data, error } = await client.mutate({
    mutation: ADD_FAVOURITE,
    variables: { beerId }
  });
  return data;
}

export const UnfavouriteBeer = async (beerId) => {
  const { data, error } = await client.mutate({
    mutation: REMOVE_FAVOURITE,
    variables: { beerId }
  });
  return data;
}

export const GetFavouriteBeers = async () => {
  const { data, error } = await client.query({
    query: QUERY_FAVOURITES,
  });
  if (error) alert("Something went wrong");
  return data.favourites;
}

export const GetBeer = async (id) => {
  const { data } = await client.query({
    query: GET_BEER,
    variables: { id }
  });
  return data.beer;
}