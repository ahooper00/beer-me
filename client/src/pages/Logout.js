import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../utils/userService';

const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    // submit form
    useEffect(() => {
        logout()
        .then(_ => setLoggedOut(true));
    });

    return (
        <main>
            {loggedOut
                ? <Navigate to="/home" />
                : <p>Logging out...</p>}
        </main>
    )
}

export default Logout;