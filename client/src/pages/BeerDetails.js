import BeerCard from "../components/BeerCard";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { GetReviews, AddReview } from "../utils/reviewService";
import { GetBeer } from '../utils/beerService';
import { useParams } from "react-router-dom";
import AddReviewButton from '../components/AddReviewButton/index';

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

    // const handleInputChange = (event) => {
    //     setReviews(event.target.value);
    // }

    if (!beer || !reviews) return <main><div><p>Loading...</p></div></main>

    return (
        <main>
            <div>
                <BeerCard
                    id={beer.id}
                    name={beer.name}
                    brand={beer.brand}
                    description={beer.description}
                    favourite={beer.favourite} />
            </div>
            <AddReviewButton beerId={beerId} />
            <br></br>
            {/* <input
                        type="text"
                        id="header-review"
                        placeholder="Review"
                        name="s"
                        onChange={handleInputChange}
                    /> */}
            <div>
                <h4>
                    Reviews
                </h4>
            </div>
        </main>
    )
}

export default BeerDetails;