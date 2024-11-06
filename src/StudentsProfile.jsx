import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentsProfile.css';

const StudentsProfile = () => {
    const navigate = useNavigate();

    const handleBatchSelect = (event) => {
        const selectedBatch = event.target.value;
        if (selectedBatch) {
            // Navigate to the page for the selected batch
            navigate(`/students/${selectedBatch}`);
        }
    };

    return (
        <div className="students-profile-container">
            <h2>STUDENTS PROFILE</h2>
            
            {/* Batch Selection Section */}
            <div className="select-batch-container">
                <label htmlFor="batch-select">Batch: </label>
                <select id="batch-select" onChange={handleBatchSelect}>
                    <option value="">Select a batch</option>
                    <option value="2021-2025">2021-2025</option>
                    <option value="2022-2026">2022-2026</option>
                    <option value="2023-2027">2023-2027</option>
                    <option value="2024-2028">2024-2028</option>
                </select>
            </div>

            {/* Department Information */}
            <div className="department-info">
                <h3>Department: Information Technology</h3>
            </div>

            {/* Strength of Students for Each Batch */}
            <div className="student-strength">
                <h4>Strength of Students</h4>
                <ul>
                    <li>2021-2025: 150 Students</li>
                    <li>2022-2026: 160 Students</li>
                    <li>2023-2027: 170 Students</li>
                    <li>2024-2028: 180 Students</li>
                </ul>
            </div>
        </div>
    );
};

export default StudentsProfile;
