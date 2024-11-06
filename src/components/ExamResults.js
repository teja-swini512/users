import React, { useState } from 'react';


const ExamResults = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [subjectTerm, setSubjectTerm] = useState('');
    const [dateTerm, setDateTerm] = useState('');
    
    // Sample exam data
    const [results, setResults] = useState([
        { id: '#0021', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
        { id: '#0022', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
        { id: '#0023', examName: 'Class Test', subject: 'Chemistry', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' }
    ]);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleDelete = () => {
        const updatedResults = results.filter((result) => !selectedRows.includes(result.id));
        setResults(updatedResults);
        setSelectedRows([]); 
    };

    const handleEdit = () => {
        alert(`Edit button clicked for IDs: ${selectedRows.join(', ')}`);
    };

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const allIds = results.map((result) => result.id);
            setSelectedRows(allIds);
        } else {
            setSelectedRows([]);
        }
    };

    return (
        <div className="exam-results">
            <h3>All Exam Results</h3>
            <div className="search-inputs">
                <input 
                    type="text" 
                    placeholder="Search by Exam..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Search by Subject..." 
                    value={subjectTerm}
                    onChange={(e) => setSubjectTerm(e.target.value)} 
                />
                <input 
                    type="date" 
                    value={dateTerm}
                    onChange={(e) => setDateTerm(e.target.value)} 
                />
                <button onClick={() => alert('Search button clicked!')}>Search</button>
            </div>

            <div className="actions">
                <button onClick={handleEdit} className="edit-btn" disabled={selectedRows.length === 0}>Edit</button>
                <button onClick={handleDelete} className="delete-btn" disabled={selectedRows.length === 0}>Delete</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" onChange={handleSelectAll} /></th>
                        <th>ID <span className="sort-arrow">&#9650;&#9660;</span></th>
                        <th>Exam Name <span className="sort-arrow">&#9650;&#9660;</span></th>
                        <th>Subject <span className="sort-arrow">&#9650;&#9660;</span></th>
                        <th>Grade <span className="sort-arrow">&#9650;&#9660;</span></th>
                        <th>Percent <span className="sort-arrow">&#9650;&#9660;</span></th>
                        <th>Date <span className="sort-arrow">&#9650;&#9660;</span></th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td><input type="checkbox" checked={selectedRows.includes(result.id)} onChange={() => handleSelectRow(result.id)} /></td>
                            <td>{result.id}</td>
                            <td>{result.examName}</td>
                            <td>{result.subject}</td>
                            <td>{result.grade}</td>
                            <td>{result.percent}</td>
                            <td>{result.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExamResults;

