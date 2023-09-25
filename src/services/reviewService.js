// TODO: Implement reviewService.js
// src/services/reviewService.js

const API_ENDPOINT = "YOUR_BACKEND_API_ENDPOINT"; // Replace with your backend API endpoint

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const reviewService = {
    // Submit a review for a specific book
    async submitReview(bookId, reviewData) {
        try {
            const response = await fetch(`${API_ENDPOINT}/reviews`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    bookId: bookId,
                    ...reviewData
                })
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error(result.message || 'Failed to submit review');
            }

            return result;
        } catch (error) {
            console.error("Error in submitReview:", error);
            throw error;
        }
    },

    // Fetch all reviews for a specific book
    async fetchReviewsByBook(bookId) {
        try {
            const response = await fetch(`${API_ENDPOINT}/reviews/${bookId}`, {
                method: 'GET',
                headers
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error(result.message || 'Failed to fetch reviews');
            }

            return result;
        } catch (error) {
            console.error("Error in fetchReviewsByBook:", error);
            throw error;
        }
    },

    // Fetch all reviews submitted by a specific reviewer
    async fetchReviewsByReviewer(reviewerId) {
        try {
            const response = await fetch(`${API_ENDPOINT}/reviews/${reviewerId}`, {
                method: 'GET',
                headers
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error(result.message || 'Failed to fetch reviews');
            }

            return result;
        } catch (error) {
            console.error("Error in fetchReviewsByReviewer:", error);
            throw error;
        }
    },

    // Submit a summarized review by the committee
    async summarizeReviews(summaryData) {
        try {
            const response = await fetch(`${API_ENDPOINT}/reviews/summarize`, {
                method: 'POST',
                headers,
                body: JSON.stringify(summaryData)
            });

            const result = await response.json();

            if (response.status !== 200) {
                throw new Error(result.message || 'Failed to submit summary');
            }

            return result;
        } catch (error) {
            console.error("Error in summarizeReviews:", error);
            throw error;
        }
    }
};

export default reviewService;
