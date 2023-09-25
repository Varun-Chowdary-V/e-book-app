// AddBook: Allows admin to add a new book for review.
// src/components/AddBook.js

import React, { useState } from 'react';
import { bookService } from '../services/bookService';

const AddBook = () => {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        thumbnail: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await bookService.addBook(bookDetails);
            if (response.success) {
                // Reset the form or navigate to another page, etc.
                setBookDetails({
                    title: '',
                    author: '',
                    thumbnail: '',
                    description: ''
                });
            } else {
                // Handle error, show a notification, etc.
            }
        } catch (error) {
            // Handle error, show a notification, etc.
        }
    };

    return (
        <div className="add-book-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={bookDetails.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={bookDetails.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Thumbnail URL:</label>
                    <input
                        type="text"
                        name="thumbnail"
                        value={bookDetails.thumbnail}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={bookDetails.description}
                        onChange={handleChange}
                        rows="5"
                    ></textarea>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
