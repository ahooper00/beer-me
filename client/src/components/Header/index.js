import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkLoggedIn } from '../../utils/userService';

const styles = {
    h1: {
        fontSize: '3rem',
        textAlign: 'center'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'left',
        fontFamily: "'Courier New', Courier, monospace"
    },
    a: {
        textDecoration: 'none',
        margin: '0 20px'
    },
    li: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#381f1e'
    },
    header: {
        width: '100%',
        backgroundColor: '#D8E2DC',
        padding: '20px'
    }
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        checkLoggedIn().then(loggedIn => {
            setIsLoggedIn(loggedIn);
            setIsLoading(false);
        });
    });

    const loginElement = isLoading ? null
        : isLoggedIn
            ? <Link style={styles.a} to="/logout">Logout</Link>
            : <Link style={styles.a} to="/login">Login</Link>;

    return (
        <header style={styles.header}>
            <div className="header-container">
                <h1 className="m-0" style={styles.h1}>
                    Let's Get Hopping
                </h1>
                <div>
                    {loginElement}
                </div>
            </div>
        </header>
    );
};

export default Header;


