// TODO: Implement ReviewContext.js
// src/context/ReviewContext.js

import React, { createContext, useState } from 'react';

export const ReviewContext = createContext();

const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([]); // List of all reviews
    const [selectedReview, setSelectedReview] = useState(null); // Details of a specific review when selected

    // Functions to interact with reviews can be added here. 
    // For instance, fetching reviews for a specific book, adding a new review, etc.

    return (
        <ReviewContext.Provider value={{ 
            reviews, 
            setReviews, 
            selectedReview, 
            setSelectedReview 
        }}>
            {props.children}
        </ReviewContext.Provider>
    );
};

export default ReviewProvider;
