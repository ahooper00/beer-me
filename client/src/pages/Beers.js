import React, { useEffect } from 'react';
import { useState } from 'react';
import { AllBeers, SearchBeers } from '../utils/beerService';
import BeerCard from '../components/BeerCard/index';
import AddBeerButton from '../components/AddBeerForm';

const styles = {
    h3: {
        borderBottom: 'black solid 2px'
    },
}

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        async function fetchBeers() {
            const response = !searchInput.trim() ? await AllBeers() : await SearchBeers(searchInput);
            console.log(response);
            setBeers(response);
        }
        fetchBeers();
    }, [searchInput]);

    return (
        <main>
            <div className='container'>
                <div>
                    <h3 style={styles.h3}>
                        Find your new favourites here
                    </h3>
                </div>

                <AddBeerButton />
                <br></br>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                    onChange={handleInputChange}
                />

                {beers.map(beer => <BeerCard
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