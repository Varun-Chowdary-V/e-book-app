// ReviewForm: Allows a reviewer to submit their review for a book.
// src/components/ReviewForm/ReviewForm.js

import React, { useState, useContext } from 'react';
import reviewService from '../../services/reviewService';
import { AuthContext } from '../../context/AuthContext';

const ReviewForm = ({ bookId }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1); // Assuming a rating out of 5, starting with 1
    const [message, setMessage] = useState('');

    const { user } = useContext(AuthContext); // Assuming the user object contains reviewer information

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await reviewService.submitReview(bookId, {
                reviewerId: user.id,
                review,
                rating
            });

            if (response.status === 200) {
                setMessage('Review submitted successfully!');
            } else {
                setMessage('Failed to submit review.');
            }
        } catch (error) {
            console.error("Error submitting review: ", error);
            setMessage('An error occurred while submitting your review.');
        }
    };

    return (
        <div className="review-form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="review">Your Review:</label>
                    <textarea 
                        id="review" 
                        value={review} 
                        onChange={e => setReview(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" value={rating} onChange={e => setRating(Number(e.target.value))} required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit">Submit Review</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ReviewForm;
