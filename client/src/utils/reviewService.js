import { QUERY_REVIEWS } from './queries';
import { ADD_REVIEW } from './mutations';
import client from './client';

export const GetReviews = async (beerId) => {
    const { data } = await client.query({
        query: QUERY_REVIEWS,
        variables: { beerId }
    });
    return data.reviews;
}

export const AddReview = async ({ beerId, comment, rating }) => {
    const { data, errors } = await client.mutate({
        mutation: ADD_REVIEW,
        variables: { beerId, comment, rating: Number(rating) }
    });
    if(errors) console.error(errors) ;
}