import React, { useState } from 'react';
import '../index.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const [openItems, setOpenItems] = useState({});
    const [activeItem, setActiveItem] = useState(null); 

    const toggleSubItems = (item) => {
        setOpenItems(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
        setActiveItem(item); 
    };

    const handleSubItemClick = (parentItem, subItem) => {
        setActiveItem(`${parentItem}-${subItem}`); 
    };

    return (
        <div className="sidebar">
            <div
                className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}
                onClick={() => toggleSubItems('dashboard')}
            >
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.dashboard && (
                <div className="sub-items">
                    <div
                        className={`nav-sub-item ${activeItem === 'dashboard-Admin' ? 'active' : ''}`}
                        onClick={() => handleSubItemClick('dashboard', 'Admin')}
                    >
                        <span>&gt; Admin</span>
                    </div>
                    <div
                        className={`nav-sub-item ${activeItem === 'dashboard-Students' ? 'active' : ''}`}
                        onClick={() => handleSubItemClick('dashboard', 'Students')}
                    >
                        <span>&gt; Students</span>
                    </div>
                    <div
                        className={`nav-sub-item ${activeItem === 'dashboard-Parents' ? 'active' : ''}`}
                        onClick={() => handleSubItemClick('dashboard', 'Parents')}
                    >
                        <span>&gt; Parents</span>
                    </div>
                    <div
                        className={`nav-sub-item ${activeItem === 'dashboard-Teachers' ? 'active' : ''}`}
                        onClick={() => handleSubItemClick('dashboard', 'Teachers')}
                    >
                        <span>&gt; Teachers</span>
                    </div>
                </div>
            )}

            <div
                className={`nav-item ${activeItem === 'students' ? 'active' : ''}`}
                onClick={() => toggleSubItems('students')}
            >
                <i className="fas fa-user"></i>
                <span>Students</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'teachers' ? 'active' : ''}`}
                onClick={() => toggleSubItems('teachers')}
            >
                <i className="fas fa-chalkboard-teacher"></i>
                <span>Teachers</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'parents' ? 'active' : ''}`}
                onClick={() => toggleSubItems('parents')}
            >
                <i className="fas fa-users"></i>
                <span>Parents</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'library' ? 'active' : ''}`}
                onClick={() => toggleSubItems('library')}
            >
                <i className="fas fa-book"></i>
                <span>Library</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'account' ? 'active' : ''}`}
                onClick={() => toggleSubItems('account')}
            >
                <i className="fas fa-cog"></i>
                <span>Account</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'class' ? 'active' : ''}`}
                onClick={() => toggleSubItems('class')}
            >
                <i className="fas fa-school"></i>
                <span>Class</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'subject' ? 'active' : ''}`}
                onClick={() => toggleSubItems('subject')}
            >
                <i className="fas fa-book-open"></i>
                <span>Subject</span>
                <span className="arrow">&gt;</span>
            </div>

            <div
                className={`nav-item ${activeItem === 'classRoutine' ? 'active' : ''}`}
                onClick={() => toggleSubItems('classRoutine')}
            >
                <i className="fas fa-calendar"></i>
                <span>Class Routine</span>
                <span className="arrow">&gt;</span>
            </div>
        </div>
    );
};

export default Sidebar;
