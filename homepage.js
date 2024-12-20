// src/pages/HomePage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AdvancedSearch from '../components/AdvancedSearch';
import CollegeList from '../components/CollegeList';
import Rating from '../components/Rating';

const collegeData = [
    { id: 1, name: "College of Engineering", city: "Chennai", course: "B.Tech", fees: 20000, ranking: 1 },
    { id: 2, name: "Loyola College", city: "Chennai", course: "B.Com", fees: 15000, ranking: 2 },
    { id: 3, name: "IIT Madras", city: "Chennai", course: "B.Sc", fees: 25000, ranking: 1 },
    { id: 4, name: "Anna University", city: "Chennai", course: "B.E", fees: 18000, ranking: 3 },
];

const HomePage = () => {
    const [filteredColleges, setFilteredColleges] = useState(collegeData);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredColleges(collegeData);
        } else {
            const filtered = collegeData.filter(college =>
                college.name.toLowerCase().includes(query.toLowerCase()) ||
                college.city.toLowerCase().includes(query.toLowerCase()) ||
                college.course.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredColleges(filtered);
        }
    };

    const handleAdvancedSearch = (filters) => {
        const { city, course, fees, ranking } = filters;
        const filtered = collegeData.filter(college => 
            (city ? college.city.toLowerCase().includes(city.toLowerCase()) : true) &&
            (course ? college.course.toLowerCase().includes(course.toLowerCase()) : true) &&
            (fees ? college.fees <= fees : true) &&
            (ranking ? college.ranking >= ranking : true)
        );
        setFilteredColleges(filtered);
    };

    return (
        <div>
            <h1>CollegeQuest</h1>
            <SearchBar handleSearch={handleSearch} />
            <AdvancedSearch handleAdvancedSearch={handleAdvancedSearch} />
            <CollegeList colleges={filteredColleges} />
            <Rating collegeId={1} />
        </div>
    );
};

export default HomePage;
