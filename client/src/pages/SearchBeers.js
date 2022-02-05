import React from 'react';
import { useState } from 'react';
import AddBeerButton from '../components/AddBeerForm';
import { SearchBeers } from '../utils/beerService';

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

const Search = () => {
    const [searchBeers, setSearchBeers] = useState([])
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    function handleSearch(evt) {
        SearchBeers(searchInput)
            .then(setSearchBeers)
            .catch(err => console.error(err));
    };



    return (
        <main>
            <label htmlFor="header-search">
                <h3><span className="visually-hidden">Search Crispy Boys</span></h3>
            </label>
            <AddBeerButton />
            <br></br>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                onChange={handleInputChange}
            />

            <button onClick={handleSearch}>
                Search
                </button>
            <div className='container'>
                {searchBeers.length === 0 
                ? <h3>No beers found with that name</h3>
                : searchBeers.map(beerCard)}
            </div>
            {/* <div className="card" style={styles.card}>
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
                    </form>
                </div>
            </div> */}
        </main>
    )
}

export default Search;