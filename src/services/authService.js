// TODO: Implement authService.js
// src/services/authService.js

// Assuming you're using Axios for HTTP requests. If not, replace this with your HTTP request method.
import axios from 'axios';

const API_URL = 'http://your-backend-url.com'; // Replace with your backend's base URL

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        });

        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
            // Store user details and token in local storage to keep user logged in between page refreshes.
        }

        return response.data;
    } catch (error) {
        // Handle error appropriately
        throw error;
    }
};

const logout = () => {
    // Remove user data from local storage to log the user out
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        return JSON.parse(storedUser);
    }
    return null;
};

export default {
    login,
    logout,
    getCurrentUser
};
