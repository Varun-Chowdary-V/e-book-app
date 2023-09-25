// TODO: Implement BookContext.js
// src/context/BookContext.js

import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = (props) => {
    const [books, setBooks] = useState([]); // List of all books
    const [selectedBook, setSelectedBook] = useState(null); // Details of a specific book when selected

    // You can add more methods here to interact with your API or perform other book-related operations.

    return (
        <BookContext.Provider value={{ 
            books, 
            setBooks, 
            selectedBook, 
            setSelectedBook 
        }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookProvider;
