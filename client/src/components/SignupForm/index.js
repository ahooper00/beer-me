import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../utils/userService';
import beerBarrels from '../../assets/beer-barrels.jpeg.crdownload';
import '../../App.css';

const styles = {
    img: {
        width: '550px',
        float: 'right',
        paddingLeft: '40px'
    },
    loginButton: {
        backgroundColor: '#FEC5BB',
        borderColor: '#FFD7BA',
        borderRadius: '20px',
        width: '20%',
        fontSize: '16px',
        color: 'black'
      }
}

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            await signup(formState.email, formState.username, formState.password);
            setLoggedIn(true);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div className="signup-container d-inline-flex flex-wrap flex-lg-row">
                <div className="card p-2 w-50">
                    <h4 className="card-header bg-dark text-light">Sign Up</h4>
                    <div className="card-body p-4">
                        {loggedIn ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <div className="col">
                                    <input
                                        className="form-input m-2"
                                        placeholder="Your username"
                                        name="username"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input m-2"
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input m-2"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <button
                                        className="btn m-3"
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                        <h6>
                            Already have an account? Log in <button className="loginButton" style={styles.loginButton}><Link to='/login'>HERE</Link></button>
                        </h6>
                    </div>
                </div>
                <div>
                    <img
                        src={beerBarrels}
                        className="d-inline-flex flex-lg-row img-fluid flex-wrap"
                        style={styles.img}
                        alt="Logo" />
                </div>
            </div>
        </main>
    )
};

export default Signup;