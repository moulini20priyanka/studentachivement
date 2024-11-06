import React from 'react';
import LineGraph from './LineGraph';
import StudentsProfile from './StudentsProfile';
import './StudentAchieve.css';

const StudentAchieve = () => {
    return (
        <div className="student-achieve-wrapper">
            <div className="student-achieve-container">
                <LineGraph />
                <StudentsProfile />
            </div>
        </div>
    );
};

export default StudentAchieve;
