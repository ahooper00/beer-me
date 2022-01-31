import React, { useState } from 'react';

const styles = {
    navdiv : {
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
    
    return (
        <div className="navdiv" style={styles.navdiv}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/"
                        onClick={() => handlePageClick("Home")}
                        className={page === "Home" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/favourites"
                        onClick={() => handlePageClick("Favourites")}
                        className={page === "Favourites" ? "nav-link active" : "nav-link"}
                    >
                        Favourites
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/beers"
                        onClick={() => handlePageClick("Beers")}
                        className={page === "Beers" ? "nav-link active" : "nav-link"}
                    >
                        Beers
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/profile"
                        onClick={() => handlePageClick("Profiles")}
                        className={page === "Profiles" ? "nav-link active" : "nav-link"}
                    >
                        My details
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;