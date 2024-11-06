import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LineGraph.css';

const LineGraph = () => {
    const [selectedBatch, setSelectedBatch] = useState('2021-2025');
    const [graphData, setGraphData] = useState([]);

    const fetchGraphData = (batch) => {
        const data = {
            '2021-2025': [
                { name: 'Sem 1', avg: 65 },
                { name: 'Sem 2', avg: 70 },
                { name: 'Sem 3', avg: 72 },
                { name: 'Sem 4', avg: 75 },
                { name: 'Sem 5', avg: 77 },
                { name: 'Sem 6', avg: 80 },
                { name: 'Sem 7', avg: 82 },
                { name: 'Sem 8', avg: 85 },
            ],
            '2022-2026': [
                { name: 'Sem 1', avg: 60 },
                { name: 'Sem 2', avg: 65 },
                { name: 'Sem 3', avg: 67 },
                { name: 'Sem 4', avg: 70 },
                { name: 'Sem 5', avg: 72 },
                { name: 'Sem 6', avg: 75 },
                { name: 'Sem 7', avg: 78 },
                { name: 'Sem 8', avg: 80 },
            ],
            '2023-2027': [
                { name: 'Sem 1', avg: 55 },
                { name: 'Sem 2', avg: 60 },
                { name: 'Sem 3', avg: 62 },
                { name: 'Sem 4', avg: 65 },
                { name: 'Sem 5', avg: 68 },
                { name: 'Sem 6', avg: 70 },
                { name: 'Sem 7', avg: 73 },
                { name: 'Sem 8', avg: 76 },
            ],
            '2024-2028': [
                { name: 'Sem 1', avg: 50 },
                { name: 'Sem 2', avg: 55 },
                { name: 'Sem 3', avg: 58 },
                { name: 'Sem 4', avg: 60 },
                { name: 'Sem 5', avg: 62 },
                { name: 'Sem 6', avg: 65 },
                { name: 'Sem 7', avg: 68 },
                { name: 'Sem 8', avg: 70 },
            ],
        };
        setGraphData(data[batch]);
    };

    useEffect(() => {
        fetchGraphData(selectedBatch);
    }, [selectedBatch]);

    return (
        <div className="line-graph-container">
            <h2>SEMESTER AVERAGE</h2>
            <div className="line-graph-selector">
                <label htmlFor="batch-select">Select Batch: </label>
                <select
                    id="batch-select"
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                >
                    <option value="2021-2025">2021-2025</option>
                    <option value="2022-2026">2022-2026</option>
                    <option value="2023-2027">2023-2027</option>
                    <option value="2024-2028">2024-2028</option>
                </select>
            </div>
            <div className="line-graph-display">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={graphData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="avg" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineGraph;
