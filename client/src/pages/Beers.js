import React, { useEffect } from 'react';
import { useState } from 'react';
import { addBeer } from '../utils/beerService';

const styles = {
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
    cardBody: {
        flexDirection: 'column',
        display: 'inline-flex',
        flexWrap: 'wrap',
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
        </div>
    )
}

const Beers = () => {
    
}