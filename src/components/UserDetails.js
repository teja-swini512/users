import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const UserDetails = () => {
  const [user, setUser] = useState(null); // State to store the logged-in user details

  // Exam results state
  const [results, setResults] = useState([
    { id: '#0021', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0022', examName: 'Class Test', subject: 'Math', grade: 'A', percent: '95.50 > 100', date: '15/03/2020' },
    { id: '#0023', examName: 'Class Test', subject: 'Chemistry', grade: 'B+', percent: '89.00 > 100', date: '05/06/2021' },
  ]);

  const handleDelete = (id) => {
    const updatedResults = results.filter((result) => result.id !== id);
    setResults(updatedResults);
  };

  const handleEdit = (id) => {
    alert(`Edit button clicked for ID: ${id}`);
  };

  return (
    <div className="user-details-page">
      {!user ? (
        // Show the Register/Login form if no user is logged in
        <RegisterForm setUser={setUser} />
      ) : (
        <>
          {/* User Details */}
          <div className="form-container1">
            <h2>Welcome, {user.username}!</h2>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            
          </div>

          {/* Exam Results */}
          <div className="exam-results">
            <h3>All Exam Results</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Exam Name</th>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Percent</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.examName}</td>
                    <td>{result.subject}</td>
                    <td>{result.grade}</td>
                    <td>{result.percent}</td>
                    <td>{result.date}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(result.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(result.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
