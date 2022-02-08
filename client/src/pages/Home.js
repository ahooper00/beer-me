import React, { useEffect } from 'react';
import { useState } from 'react';
import { topBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BEERS } from '../utils/queries';

const styles = {
    h3: {
        borderBottom: 'black solid 2px'
    },
    img: {
        width: '200px',
        height: 'auto',
        display: 'flex'
    },
    ourGoal: {
        backgroundColor: "#F6E4D1",
        width: '100%',
        display: 'block'
    }
}

const Home = () => {
    const [homeBeers, setHomeBeers] = useState([])
    useEffect(() => {
        async function fetchTopBeers() {
            const response = await topBeers();
            console.log(response);
            setHomeBeers(response);
        }
        fetchTopBeers();
    }, []);

    return (
        <main>
            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Check out these beers of the week!
                    </h3>
                </div>

                {homeBeers.map(beer => <BeerCard
                    id={beer.id}
                    name={beer.name}
                    brand={beer.brand}
                    description={beer.description}
                    favourite={beer.favourite} />)}
            </div>

            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Our Goal
                    </h3>
                    <div className="mt-4" style={styles.ourGoal}>
                        <p>
                            Our goal is to bring beer lovers (and even haters) into the world of craft beers, and allow the humble locals showcase their new
                            and improved fermented greats. Keeping all the craft and sour beers in one place makes it easy to surf through different
                            options, and read through real life reviews of those who have already tasted the sweet (or SOUR) flavours of the beer.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Some of our Favourites
                    </h3>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>
                            Stomping Ground Brewery
                        </h5>
                        <p>
                            100 Gipps St, Collingwood 3066
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>
                            Mountain Goat Brewery
                        </h5>
                        <p>
                            80 North St, Richmond 3121
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>
                            Moon Dog Brewery
                        </h5>
                        <p>
                            17 Duke St, Abbotsford 3067
                        </p>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Home;