// ReviewerLogin: A component for reviewers to log in.
// src/views/ReviewerLogin.js

import React, { useState, useContext } from 'react';
// You'd need to import your services and contexts as needed.
// For example:
// import { loginUser } from '../services/authService';
// import { AuthContext } from '../context/AuthContext';

const ReviewerLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    // If you're using the AuthContext for global state management
    // const { setAuthenticated } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            // Example API call
            // const response = await loginUser(email, password);
            
            // Once authenticated, you can update the global state and possibly redirect the user.
            // setAuthenticated(true);
            // props.history.push('/reviewer-dashboard'); // Redirect to dashboard
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <h2>Reviewer Login</h2>
            
            {error && <div className="error-message">{error}</div>}

            <div>
                <label>Email:</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div>
                <label>Password:</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default ReviewerLogin;
