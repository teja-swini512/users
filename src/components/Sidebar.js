import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import UserDetails from './UserDetails';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const [openItems, setOpenItems] = useState({});
    const [activeItem, setActiveItem] = useState(''); 
    const [user, setUser] = useState(null); 

    const toggleSubItems = (item) => {
        setOpenItems(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
        setActiveItem(item); 
    };

    return (
        <div className="app-container">
            <div className="sidebar">
                <div
                    className={`nav-item ${activeItem === 'Users' ? 'active' : ''}`}
                    onClick={() => toggleSubItems('Users')}
                >
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Users</span>
                    <span className="arrow">&gt;</span>
                </div>
                <div
                    className={`nav-item ${activeItem === 'Questions' ? 'active' : ''}`}
                    onClick={() => toggleSubItems('Questions')}
                >
                    <i className="fas fa-user"></i>
                    <span>Questions</span>
                    <span className="arrow">&gt;</span>
                </div>
                
            </div>
            
            <div className="main-content">
                {activeItem === 'Users' && !user && (
                    <>
                        <RegisterForm setUser={setUser} />
                       
                    </>
                )}
                {user && <UserDetails user={user} />}
            </div>
        </div>
    );
};

export default Sidebar;

