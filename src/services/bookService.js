// TODO: Implement bookService.js
// src/services/bookService.js

import axios from 'axios';

const BASE_URL = "https://your-backend-api-url.com"; // Replace with your backend API's base URL

const fetchBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const fetchBookDetails = async (bookId) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${bookId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const addBook = async (bookData) => {
    try {
        const response = await axios.post(`${BASE_URL}/books`, bookData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Add more functions as required

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchBooks,
    fetchBookDetails,
    addBook,
    // Export other methods as you define them
};


