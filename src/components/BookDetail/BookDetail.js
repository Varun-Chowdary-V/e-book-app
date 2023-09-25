// BookDetail: Display detailed information about a particular book and allow a reviewer to review the book.
// src/components/BookDetail/BookDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import bookService from '../../services/bookService';
import ReviewForm from '../ReviewForm/ReviewForm'; 

const BookDetail = () => {
    const { id } = useParams(); // To get the book ID from the route
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const data = await bookService.fetchBookDetails(id); // Assuming you have this method defined in bookService.js
                setBook(data);
            } catch (error) {
                console.error("Error fetching book details: ", error);
            }
        };

        fetchBookDetails();
    }, [id]);

    return (
        <div className="book-detail-container">
            {book ? (
                <>
                    <div className="book-info">
                        <img src={book.thumbnail} alt={book.title} /> 
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>{book.description}</p> {/* Assuming book details have a description. Adjust as necessary. */}
                    </div>
                    <ReviewForm bookId={book.id} />
                </>
            ) : (
                <p>Loading book details...</p>
            )}
        </div>
    );
}

export default BookDetail;
