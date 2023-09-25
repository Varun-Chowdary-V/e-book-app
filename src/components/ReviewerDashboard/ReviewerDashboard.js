// ReviewerDashboard: A page where a reviewer can see all the books they have reviewed and their status.
// src/views/ReviewerDashboard.js

import React, { useState, useEffect } from 'react';
// You'd also need to import your services here to fetch reviews, etc.

const ReviewerDashboard = () => {
    const [reviews, setReviews] = useState([]);

    // This useEffect would call the API to get the reviews specific to the logged-in reviewer.
    useEffect(() => {
        // Example:
        // fetchReviewsByReviewer(reviewerId).then(data => setReviews(data));
        // Assume the reviewerId is either stored in context or fetched upon authentication.
    }, []);

    return (
        <div>
            <h2>Reviewer Dashboard</h2>
            <h3>Your Reviews</h3>
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Your Review</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => (
                        <tr key={review.id}>
                            <td>{review.bookTitle}</td>
                            <td>{review.text}</td>
                            <td>{review.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewerDashboard;
