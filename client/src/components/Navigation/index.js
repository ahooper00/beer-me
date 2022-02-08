import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import Auth from '../../utils/auth';

const styles = {
    navdiv: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#D8E2DC",
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Courier New', Courier, monospace",
        padding: '0',
        margin: '0'
    },
    a: {
        textDecoration: 'none',
        margin: '0 20px',
        color: '#028090'
    },
    li: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
    }
}

const Navigation = ({ currentPage }) => {

    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }

    const favouriteElement = Auth.loggedIn()
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
        <div className="navdiv mb-4" style={styles.navdiv}>
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
            <br></br>
        </div>
    )
}

export default Navigation;