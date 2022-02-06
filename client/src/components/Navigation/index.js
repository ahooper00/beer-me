import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkLoggedIn } from '../../utils/userService';

const styles = {
    navdiv: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
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
    }
}

const Navigation = ({ currentPage }) => {

    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        checkLoggedIn().then(loggedIn => {
            setIsLoggedIn(loggedIn);
            setIsLoading(false);
        });
    });

    const favouriteElement = isLoading ? null
        : isLoggedIn
            ? <li style={styles.li}>
                <a style={styles.a}
                    href="/favourites"
                    onClick={() => handlePageClick("Favourites")}
                    className={page === "Favourites" ? "nav-link active" : "nav-link"}
                >
                    Favourites
                </a>
            </li>
            : null

    return (
        <div className="navdiv" style={styles.navdiv}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to='/home' style={styles.a}
                        onClick={() => handlePageClick("Home")}
                        className={page === "Home" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </Link>
                </li>

                {favouriteElement}

                <li style={styles.li}>
                    <a style={styles.a}
                        href="/beers"
                        onClick={() => handlePageClick("Beers")}
                        className={page === "Beers" ? "nav-link active" : "nav-link"}
                    >
                        Beers
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;