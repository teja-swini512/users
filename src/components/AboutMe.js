import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h3>About Me</h3>
            <div className="header">
                <img src="https://github.com/user-attachments/assets/bb2ac08e-5560-4cdb-85bc-002137a829e8" alt="Profile" className="profile-picture" />
                <div className="info">
                    <h4 className="name">Jessia Rose</h4>
                    <p className="description">Aliquam erat volutpat. Curabiene natis massa sedde lacustiquen sodale word moun taier.</p>
                </div>
            </div>
            <div className="details">
                <p><strong>Name:</strong> Jessia Rose</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Father Name:</strong> Fahim Rahman</p>
                <p><strong>Mother Name:</strong> Jannatul Kazi</p>
                <p><strong>Date of Birth:</strong> 07.08.2006</p>
                <p><strong>Religion:</strong> Islam</p>
            </div>
        </div>
    );
};

export default AboutMe;

