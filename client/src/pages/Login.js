import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/userService';
import beerBarrels from '../assets/beer-barrels.jpeg.crdownload';

const styles = {
    img: {
        width: '600px',
        float: 'right',
        paddingLeft: '40px'
    }
}

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loggedIn, setLoggedIn] = useState(false);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            await login(formState.email, formState.password);
            setLoggedIn(true);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div className="login-container d-inline-flex flex-wrap flex-lg-row">
                <div className="card justify-content-center row">
                    <h4 className="card-header bg-dark text-light">Login</h4>
                    <div className="card-body">
                        {loggedIn ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <div className='col'>
                                    <input
                                        className="form-input"
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <br></br>
                                <div className="col text-center">
                                    <button
                                        className="btn btn-block btn-default"
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                        <br></br>
                        <h6>
                            Don't have an account? Sign up <button className="loginButton"><Link to='/signup'>HERE</Link></button>
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
}

export default Login;