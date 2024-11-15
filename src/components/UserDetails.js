import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="form-container1">
      <h2>Welcome, {user.username}!</h2>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Exam Chosen:</strong> {user.exam}</p>
    </div>
  );
};

export default UserDetails;
