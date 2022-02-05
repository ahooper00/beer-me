import React, { useEffect } from 'react';
import { useState } from 'react';
import { AllBeers } from '../utils/beerService';

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

const beerCard = ({ name, brand, description }) => {
    return (
        <div className="card" style={styles.card}>
            <div className="cardBody" style={styles.cardBody}>
                <h4>
                    {name}
                </h4>
                <ul>
                    <li>Brand: {brand}</li>
                    <li>Description: {description}</li>
                </ul>
            </div>
            {/* <img
                src={beer}
                alt="Beer"
                className="Img"
                style={styles.img}
            ></img> */}
        </div>
    )
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

    
// const Home = () => {
//     const [homeBeers, setHomeBeers] = useState([])
//     useEffect(() => {
//         async function fetchTopBeers() {
//             const response = await topBeers();
//             console.log(response);
//             setHomeBeers(response);
//         }
//         fetchTopBeers();
//     }, []);

    return (
        <main>
            <div className="card" style={styles.card}>
                <div className="cardBody" style={styles.cardBody}>
                    <form className="addBeerForm">
                        <div>
                            <h3>Add your own beer here!</h3>
                            <label htmlFor="name" className="form-label">Beer Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="name"
                                aria-describedby="nameHelp"
                            />
                        </div>
                        <div>
                            <label htmlFor="brand" className="form-label">Brand</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="brand"
                                aria-describedby="nameHelp"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="description"
                                aria-describedby="nameHelp"
                            />
                        </div>
                        <div className='container'>
                            <div>
                                <h3 style={styles.h3}>
                                    Find your new favourites here
                                </h3>
                            </div>

                            {allBeers.map(beerCard)}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Beers;