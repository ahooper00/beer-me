import React, { useState, useEffect } from 'react';
import { GetFavouriteBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard/index';

const styles = {
    h3: {
        borderBottom: 'black solid 2px'
    },
}

const Favourites = () => {
    const [getFavourites, setGetFavourites] = useState([])
    useEffect(() => {
        async function fetchGetFavouriteBeers() {
            const response = await GetFavouriteBeers();
            console.log(response);
            setGetFavourites(response);
        }
        fetchGetFavouriteBeers();
    }, []);

    return (
        <main>
            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Your favourites
                    </h3>
                </div>

                {getFavourites.map(beer => <BeerCard
                    id={beer.id}
                    name={beer.name}
                    brand={beer.brand}
                    description={beer.description}
                    favourite={beer.favourite} />)}
            </div>
        </main>
    )
};

export default Favourites;