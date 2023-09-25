// AdminDashboard: A page for administrators or committee members to see all reviews, summarize reviews, and make decisions.
// src/views/AdminDashboard.js

import React, { useState, useEffect } from 'react';
// You'd also need to import your services here to fetch reviews, etc.

const AdminDashboard = () => {
    const [reviews, setReviews] = useState([]);

    // This useEffect would call the API to get the reviews.
    useEffect(() => {
        // Example:
        // fetchReviews().then(data => setReviews(data));
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Reviews Summary</h3>
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Reviewer</th>
                        <th>Review</th>
                        <th>Summarized Decision</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => (
                        <tr key={review.id}>
                            <td>{review.bookTitle}</td>
                            <td>{review.reviewerName}</td>
                            <td>{review.text}</td>
                            <td>
                                <select>
                                    <option value="approve">Approve</option>
                                    <option value="reject">Reject</option>
                                </select>
                                <button>Submit Decision</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
