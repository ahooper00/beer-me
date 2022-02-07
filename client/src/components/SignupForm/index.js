import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../utils/userService';
import beerBarrels from '../../assets/beer-barrels.jpeg.crdownload';

const styles = {
    img: {
        width: '600px',
        float: 'right',
        paddingLeft: '40px'
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
            <div>
                <div className="card">
                    <h4 className="card-header bg-dark text-light">Sign Up</h4>
                    <div className="card-body">
                        {loggedIn ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                    <input
                                        className="form-input"
                                        placeholder="Your username"
                                        name="username"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
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
                                <div>
                                    <button
                                        className="btn btn-block btn-primary"
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                        <h6>
                            Already have an account? Log in <button className="loginButton"><Link to='/login'>HERE</Link></button>
                        </h6>
                    </div>
                </div>
                <div>
                    <img
                        src={beerBarrels}
                        className="d-inline-flex flex-lg-row img-fluid flex-wrap "
                        style={styles.img}
                        alt="Logo" />
                </div>
            </div>
        </main>
    )
};

export default Signup;