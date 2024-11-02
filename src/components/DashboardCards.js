import React from 'react';


const DashboardCards = () => {
    return (
        <div className="dashboard-cards">
            <div className="card purple">
                <div className="icon-circle">
                    <img src="https://github.com/user-attachments/assets/267e3296-823c-48a8-8e26-cf0cbe286912" alt="Notification" className="icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">Notification</div>
                    <div className="card-number">12</div>
                </div>
            </div>
            <div className="card blue">
                <div className="icon-circle">
                    <img src="https://github.com/user-attachments/assets/93b7ae5c-3f8e-4a94-a544-1ad762b98f8f" alt="Events" className="icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">Events</div>
                    <div className="card-number">6</div>
                </div>
            </div>
            <div className="card yellow">
                <div className="icon-circle">
                    <img src="https://github.com/user-attachments/assets/1dfa7b90-ef65-4b0f-a984-0ee9ccb7713b" alt="Attendance" className="icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">Attendance</div>
                    <div className="card-number">94%</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;
