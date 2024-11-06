import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentAchieve from './StudentAchieve';
import StudentsTable from './StudentTable';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                
                <Routes>
                    <Route path="/" element={<StudentAchieve />} />
                    <Route path="/students/:batch" element={<StudentsTable />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
