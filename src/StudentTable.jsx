import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentTable.css';

const studentsData = {
    '2021-2025': [
        {
            name: 'Moulini',
            regNumber: '3060',
            type: 'Dayscholar',
            gender: 'Female',
            cgpa: 8.5,
            semGpa: [8.0, 8.2, 8.4, 8.6, 8.7, 8.8, 8.9, 9.0],
            backlogHistory: 'None',
            currentBacklogs: 0,
            attendancePercentage: 95,
        },
    ],
    '2022-2026': [
        {
            name: 'Kanagavel',
            regNumber: '3044',
            type: 'Hosteller',
            gender: 'Male',
            cgpa: 9.0,
            semGpa: [9.0, 9.1, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8],
            backlogHistory: 'None',
            currentBacklogs: 0,
            attendancePercentage: 97,
        },
    ],
};

const StudentsTable = () => {
    const { batch } = useParams();
    const batchData = studentsData[batch] || [];

    return (
        <div className="students-table-container">
            <h2>Students Profile for Batch {batch}</h2>
            <div className="scrollable-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg Number</th>
                            <th>Type</th>
                            <th>Gender</th>
                            <th>Attendance %</th>
                            <th>CGPA</th>
                            <th>Sem 1 GPA</th>
                            <th>Sem 2 GPA</th>
                            <th>Sem 3 GPA</th>
                            <th>Sem 4 GPA</th>
                            <th>Sem 5 GPA</th>
                            <th>Sem 6 GPA</th>
                            <th>Sem 7 GPA</th>
                            <th>Sem 8 GPA</th>
                            <th>Backlog History</th>
                            <th>Current Backlogs</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {batchData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.regNumber}</td>
                                <td>{student.type}</td>
                                <td>{student.gender}</td>
                                <td>{student.attendancePercentage}%</td>
                                <td>{student.cgpa}</td>
                                {student.semGpa.map((gpa, idx) => (
                                    <td key={idx}>{gpa}</td>
                                ))}
                                <td>{student.backlogHistory}</td>
                                <td>{student.currentBacklogs}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsTable;
