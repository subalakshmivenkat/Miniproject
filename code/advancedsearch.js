// src/components/AdvancedSearch.js
import React, { useState } from 'react';

const AdvancedSearch = ({ handleAdvancedSearch }) => {
    const [city, setCity] = useState('');
    const [course, setCourse] = useState('');
    const [fees, setFees] = useState('');
    const [ranking, setRanking] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdvancedSearch({ city, course, fees, ranking });
    };

    return (
        <form onSubmit={handleSubmit} className="advanced-search">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="City" 
            />
            <input 
                type="text" 
                value={course} 
                onChange={(e) => setCourse(e.target.value)} 
                placeholder="Course" 
            />
            <input 
                type="number" 
                value={fees} 
                onChange={(e) => setFees(e.target.value)} 
                placeholder="Maximum Fees" 
            />
            <input 
                type="number" 
                value={ranking} 
                onChange={(e) => setRanking(e.target.value)} 
                placeholder="Minimum Ranking" 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default AdvancedSearch;
