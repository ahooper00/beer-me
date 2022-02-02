import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../utils/userService';

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
            <div>
                <div className="card">
                    <h4 className="card-header bg-dark text-light">Login</h4>
                    <div className="card-body">
                        {loggedIn ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
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
                                <button
                                    className="btn btn-block btn-primary"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;