import React from 'react';

const ExamResults = () => {
    return (
        <div className="exam-results">
            <h3>All Exam Results</h3>
            <div className="search-inputs">
                <input type="text" placeholder="Search by Exam..." />
                <input type="text" placeholder="Search by Subject..." />
                <input type="date" />
                <button>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Exam Name</th>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Percent</th>
                        <th>Date</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>#0021</td>
                        <td>Class Test</td>
                        <td>English</td>
                        <td>A</td>
                        <td>99.00 > 100</td>
                        <td>22/02/2019</td>
                    </tr>
                    <tr>
                        <td>#0022</td>
                        <td>Class Test</td>
                        <td>English</td>
                        <td>A</td>
                        <td>99.00 > 100</td>
                        <td>22/02/2019</td>
                    </tr>
                    <tr>
                        <td>#0023</td>
                        <td>Class Test</td>
                        <td>Chemistry</td>
                        <td>A</td>
                       <td>99.00 > 100</td>
                    <td>22/02/2019</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default ExamResults;
