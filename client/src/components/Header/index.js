import React, { useState } from 'react';

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
    }
}

const Header = ({ currentPage }) => {
    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }
    return (
        <header className="mb-4 py-3 display-flex align-center">
            <div className="header-container">
                <h1 className="m-0" style={styles.h1}>
                    Let's get hopping
                </h1>
                <div>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <a style={styles.a}
                                href="/logout"
                                onClick={() => handlePageClick("Logout")}
                                className={page === "Logout" ? "nav-link active" : "nav-link"}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;


