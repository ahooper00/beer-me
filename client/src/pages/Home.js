import React from 'react';
import { useQuery } from '@apollo/client';
import beer from '../assets/beer.webp';

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
        width: '25%'
    },
    h3: {
        borderBottom: 'black solid 2px'
    },
    cardBody: {
        flexDirection: 'column',
        display: 'inline-flex',
        flexWrap: 'wrap',
        border: 'black solid 2px'
    },
    img: {
        width: '200px',
        height: 'auto',
        display: 'flex'
    }
}

const Home = () => {
    return (
        <main>
            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Check out these beers of the week!
                    </h3>
                </div>
                <div className="card" style={styles.card}>
                    <div className="cardBody" styls={styles.cardBody}>
                        <h4>
                            Beer One
                        </h4>
                        <ul>
                            <li>Brand: Brewery</li>
                            <li>Description: Sour beer with hints of blueberry and strawberry</li>
                            <li>Alcohol: 4.3%</li>
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
                </div>
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