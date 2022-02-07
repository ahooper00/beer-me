import React, { useEffect } from 'react';
import { useState } from 'react';
import { topBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard';

const styles = {
    h3: {
        borderBottom: 'black solid 2px'
    },
    img: {
        width: '200px',
        height: 'auto',
        display: 'flex'
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
                        Some of our Favourites
                    </h3>
                </div>
                <div className="row">
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
                            100 Gipps St, Collingwood 3066
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>
                            Moon Dog Brewery
                        </h5>
                        <p>
                            100 Gipps St, Collingwood 3066
                        </p>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Home;