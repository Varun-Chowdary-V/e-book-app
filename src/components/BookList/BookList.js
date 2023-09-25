// BookList: Displays a list of books available for review. Each book item can have a thumbnail, title, and author.
// src/components/BookList/BookList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import bookService from '../../services/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await bookService.fetchBooks(); // Assuming you have this method defined in bookService.js
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books: ", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="booklist-container">
            <h2>Available Books for Review</h2>
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id} className="book-item">
                        <img src={book.thumbnail} alt={book.title} /> {/* Assuming each book has a thumbnail */}
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <Link to={`/book/${book.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
