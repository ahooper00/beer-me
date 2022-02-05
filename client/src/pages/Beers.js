import React, { useEffect } from 'react';
import { useState } from 'react';
import { AllBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard/index';

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

const Beers = () => {
    const [allBeers, setAllBeers] = useState([])
    useEffect(() => {
        async function fetchAllBeers() {
            const response = await AllBeers();
            console.log(response);
            setAllBeers(response);
        }
        fetchAllBeers();
    }, []);

    return (
        <main>
            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Find your new favourites here
                    </h3>
                </div>

                {allBeers.map(beer => <BeerCard
                    id={beer.id}
                    name={beer.name}
                    brand={beer.brand}
                    description={beer.description}
                    favourite={beer.favourite} />)}
            </div>
        </main>
    )
}

export default Beers;