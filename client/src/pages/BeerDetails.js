import BeerCard from "../components/BeerCard";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { GetReviews } from "../utils/reviewService";
import { GetBeer } from '../utils/beerService';
import { useParams } from "react-router-dom";
import AddReviewButton from '../components/AddReviewButton/index';

const styles = {
    reviewsDiv: {
        borderBottom: "1px solid rgb(77, 72, 72)"
    },
    ul: {
        listStyleType: "none",
        margin: "0",
        padding: "0"
    },
    reviewsTitle: {
        borderBottom: "1px solid rgb(77, 72, 72)"
    }
}

const BeerDetails = () => {
    const { id: beerId } = useParams();
    const [reviews, setReviews] = useState(undefined)
    const [beer, setBeer] = useState(undefined);
    useEffect(() => {
        async function fetchData() {
            const reviewsResponse = await GetReviews(beerId);
            const beerResponse = await GetBeer(beerId);
            setReviews(reviewsResponse);
            setBeer(beerResponse);
        }
        fetchData();
    }, [beerId]);

    if (!beer || !reviews) return <main><div><p>Loading...</p></div></main>

    return (
        <main>
            <div className="text-center">
                <AddReviewButton beerId={beerId} />
            </div>
            <div className="text-center">
                <BeerCard
                    id={beer.id}
                    name={beer.name}
                    brand={beer.brand}
                    description={beer.description}
                    favourite={beer.favourite} />
            </div>
            <br></br>
            <div className="reviewsTitle" style={styles.reviewsTitle}>
                <h4>
                    Reviews
                </h4>
            </div>
            <div style={styles.reviewsDiv} className="pt-2">
                {reviews.map(review =>
                    <ul style={styles.ul}>
                        <li>{review.comment}</li>
                        <li>{review.rating} /10</li>
                        <li><u>Created by:</u> {review.user}</li>
                    </ul>
                )}
                <br></br>
            </div>
        </main>
    )
}

export default BeerDetails;

// {beers.map(beer => <BeerCard
//     id={beer.id}
//     name={beer.name}
//     brand={beer.brand}
//     description={beer.description}
//     favourite={beer.favourite} />)}