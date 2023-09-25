// src/components/Home/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router-dom for navigation

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to E-Book App</h1>
            <p>
                The medical students aiming to be good physicians, need to select a standard medical textbook... 
                { /* You can add more descriptive text here */ }
            </p>
            <div className="action-buttons">
                <Link to="/booklist">View Books</Link>
                <Link to="/reviewerlogin">Login as Reviewer</Link>
                <Link to="/admindashboard">Admin Dashboard</Link>
            </div>
        </div>
    );
}

export default Home;

