import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import beerImage from '../../assets/beer-glasses.png'
import auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';

const styles = {
    h1: {
        fontSize: '3rem',
        textAlign: 'center',
        color: "black"
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'left',
        fontFamily: "'Courier New', Courier, monospace"
    },
    a: {
        textDecoration: 'none',
        margin: '0 20px',
        color: "black"
    },
    li: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#381f1e'
    },
    header: {
        width: '100%',
        backgroundColor: '#F8F8F8',
        padding: '20px'
    },
    img: {
        width: '100px',
        height: 'auto'
    },
    loginHeader: {
        display: "flex"
    }
}

const Header = ({ currentPage }) => {
    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.me;

    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }

    const loginElement = auth.loggedIn()
        ? <Link style={styles.a} to="/logout">Logout</Link>
        : <Link style={styles.a} to="/login">Login</Link>;

    return (
        <header style={styles.header}>

            <div className="header-container">
                <h1 className="m-0" style={styles.h1}>
                    <Link to='/home'
                        style={styles.a}
                        onClick={() => handlePageClick("Home")}
                        className={page === "Home"}
                    >
                        Let's Get Hopping <img src={beerImage} style={styles.img} alt="Logo" />
                    </Link>
                </h1>
                <div className="loginHeader" style={styles.loginHeader}>
                    {loginElement}
                    {user &&
                        <h4 style={styles.userDiv}>
                            Hello {user.name}!
                        </h4>}
                </div>
            </div>
        </header>
    );
};

export default Header;


