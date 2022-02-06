import React from 'react';
import { useState } from 'react';
import { FavouriteBeer, UnfavouriteBeer } from '../../utils/beerService';
import { Link } from 'react-router-dom';


const styles = {
    card: {
        flex: '1 0 100%',
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '2px solid rgb(77, 72, 72)',
        width: '80%',
        margin: '20px',
        padding: '10px',
        alignSelf: 'center'
    },
    cardBody: {
        flexDirection: 'column',
        display: 'inline-flex',
        flexWrap: 'wrap',
        alignItem: 'center'
    },
}

const BeerCard = ({ id, name, brand, description, favourite }) => {
    const [isFavourite, setIsFavourite] = useState(favourite);

    const handleFavouriteClick = async (event) => {
        try {
            await FavouriteBeer(id);
            setIsFavourite(true);
        } catch (err) {
            console.log(err)
        };
    }

    const handleUnfavouriteClick = async (event) => {
        try {
            await UnfavouriteBeer(id);
            setIsFavourite(false);
        } catch (err) {
            console.log(err)
        };
    }
    return (
        <div className="card" style={styles.card}>
            {isFavourite
                ? <button onClick={handleUnfavouriteClick}>Favourited!</button>
                : <button onClick={handleFavouriteClick}>
                    Favourite
                </button>}
            <div className="cardBody" style={styles.cardBody}>
                <h4>
                    <Link to={`/beer/${id}`}>{name}</Link>
                </h4>
                <ul>
                    <li>Brand: {brand}</li>
                    <li>Description: {description}</li>
                </ul>
            </div>
        </div >
    )
}

export default BeerCard;