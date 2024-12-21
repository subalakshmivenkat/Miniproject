// src/components/CollegeList.js
import React, { useState, useEffect } from 'react';

const CollegesList = () => {
  // State to hold the colleges data
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/colleges')
      .then(response => response.json())
      .then(data => {
        setColleges(data); // Update state with fetched data
        setLoading(false);  // Set loading to false
      })
      .catch(err => {
        setError(err);       // Set error if fetch fails
        setLoading(false);   // Set loading to false
      });
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>Error: {error.message}</div>; // Show error message

  return (
    <div>
      <h2>List of Colleges</h2>
      <ul>
        {colleges.map(college => (
          <li key={college._id}>
            <h3>{college.name}</h3>
            <p>{college.location}</p>
            <p>Rankings: {college.rankings}</p>
            <p>Fees: {college.fees}</p>
            <p>Facilities: {college.facilities.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegesList;
