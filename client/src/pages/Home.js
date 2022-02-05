import React, { useEffect } from 'react';
import { useState } from 'react';
import { topBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard';

const styles = {
    // container: {
    //     flex: '1 0 100%',
    //     display: 'inline-flex',
    //     justifyContent: 'space-between',
    //     flexDirection: 'column',
    //     flexWrap: 'wrap',
    //     border: '2px solid rgb(77, 72, 72)'
    // },
    card: {
        flex: '1 0 100%',
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '2px solid rgb(77, 72, 72)',
        width: '25%',
        margin: '20px',
        padding: '10px'
    },
    h3: {
        borderBottom: 'black solid 2px'
    },
    cardBody: {
        flexDirection: 'column',
        display: 'inline-flex',
        flexWrap: 'wrap',
        // border: 'black solid 2px'
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
                {/* 
                <div className="card" style={styles.card}>
                    <div className="cardBody" styls={styles.cardBody}>
                        <h4>
                            Beer Two
                        </h4>
                        <ul>
                            <li>Brand: This Brewery</li>
                            <li>Description: Full bodied pale ale</li>
                            <li>Alcohol: 5.6%</li>
                        </ul>
                    </div>
                    <img
                        src={beer}
                        alt="Beer"
                        className="Img"
                        style={styles.img}
                    ></img>
                </div>

                <div className="card" style={styles.card}>
                    <div className="cardBody" styls={styles.cardBody}>
                        <h4>
                            Beer Three
                        </h4>
                        <ul>
                            <li>Brand: That Brewery</li>
                            <li>Description: Fully-hopped IPA with tropical aromatics</li>
                            <li>Alcohol: 5.0%</li>
                        </ul>
                    </div>
                    <img
                        src={beer}
                        alt="Beer"
                        className="Img"
                        style={styles.img}
                    ></img>
                </div>

                <div className="card" style={styles.card}>
                    <div className="cardBody" styls={styles.cardBody}>
                        <h4>
                            Beer Four
                        </h4>
                        <ul>
                            <li>Brand: Another Brewery</li>
                            <li>Description: Salty and sour with real watermelon juice</li>
                            <li>Alcohol %: 4.2%</li>
                        </ul>
                    </div>
                    <img
                        src={beer}
                        alt="Beer"
                        className="Img"
                        style={styles.img}
                    ></img>
</div> */}
            </div>

            <div>
                <div>
                    <h3>
                        Some of our Favourites
                    </h3>
                </div>
                <div>
                    <h5>
                        Stomping Ground Brewery
                    </h5>
                    <h5>
                        Mountain Goat Brewery
                    </h5>
                    <h5>
                        Moon Dog Brewery
                    </h5>
                </div>
            </div>
        </main >
    )
}

export default Home;