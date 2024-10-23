// src/components/Rating.js
import React, { useState } from 'react';

const Rating = ({ collegeId }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
        // Save rating in backend
        console.log(`Rated ${collegeId} with ${value}`);
    };

    return (
        <div className="rating">
            <h3>Rate this College</h3>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
