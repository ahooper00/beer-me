import React, { useState } from 'react';

const Navigation = ({ currentPage }) => {

    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }
    
    return (
        <div className="navdiv">
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/"
                        onClick={() => handlePageClick("Home")}
                        className={page === "About" ? "nav-link active" : "nav-link"}
                    >
                        About Me
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/logout"
                        onClick={() => handlePageClick("Favourites")}
                        className={page === "Projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/resume"
                        onClick={() => handlePageClick("Beers")}
                        className={page === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        Resume
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/contact"
                        onClick={() => handlePageClick("Logout")}
                        className={page === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;