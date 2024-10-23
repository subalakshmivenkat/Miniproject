// src/components/CollegeList.js
import React, { useState } from 'react';

const CollegeList = ({ colleges }) => {
    const [selectedColleges, setSelectedColleges] = useState([]);

    const toggleCollege = (college) => {
        if (selectedColleges.includes(college)) {
            setSelectedColleges(selectedColleges.filter(c => c.id !== college.id));
        } else {
            setSelectedColleges([...selectedColleges, college]);
        }
    };

    return (
        <div className="college-list">
            <h2>Compare Colleges</h2>
            {selectedColleges.length > 0 && (
                <div className="compare-section">
                    {selectedColleges.map(college => (
                        <div key={college.id}>
                            <h3>{college.name}</h3>
                            <p>Location: {college.city}</p>
                            <p>Fees: {college.fees}</p>
                            <p>Ranking: {college.ranking}</p>
                        </div>
                    ))}
                </div>
            )}

            <h2>College List</h2>
            {colleges.map((college) => (
                <div key={college.id} className="college-item">
                    <h3>{college.name}</h3>
                    <p>{college.city}</p>
                    <p>{college.course}</p>
                    <p>Fees: {college.fees}</p>
                    <button onClick={() => toggleCollege(college)}>
                        {selectedColleges.includes(college) ? "Remove" : "Compare"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CollegeList;
