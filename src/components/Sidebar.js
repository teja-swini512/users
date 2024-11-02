import React, { useState } from 'react';
import '../index.css'; // For custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    const [openItems, setOpenItems] = useState({}); // Track open states for items

    const toggleSubItems = (item) => {
        setOpenItems(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };

    return (
        <div className="sidebar">
            <div className="nav-item" onClick={() => toggleSubItems('dashboard')}>
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.dashboard && (
                <div className="sub-items">
                <div className="nav-sub-item dark-bg">
                    <span>&gt; Admin</span>
                </div>
                <div className="nav-sub-item student-item">
                    <span>&gt; Students</span>
                </div>
                <div className="nav-sub-item dark-bg">
                    <span>&gt; Parents</span>
                </div>
                <div className="nav-sub-item dark-bg">
                    <span>&gt; Teachers</span>
                </div>
            </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('students')}>
                <i className="fas fa-user"></i>
                <span>Students</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.students && (
                <div className="sub-items">
                    {/* Add sub-items for Students here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('teachers')}>
                <i className="fas fa-chalkboard-teacher"></i>
                <span>Teachers</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.teachers && (
                <div className="sub-items">
                    {/* Add sub-items for Teachers here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('parents')}>
                <i className="fas fa-users"></i>
                <span>Parents</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.parents && (
                <div className="sub-items">
                    {/* Add sub-items for Parents here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('library')}>
                <i className="fas fa-book"></i>
                <span>Library</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.library && (
                <div className="sub-items">
                    {/* Add sub-items for Library here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('account')}>
                <i className="fas fa-cog"></i>
                <span>Account</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.account && (
                <div className="sub-items">
                    {/* Add sub-items for Account here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('class')}>
                <i className="fas fa-school"></i>
                <span>Class</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.class && (
                <div className="sub-items">
                    {/* Add sub-items for Class here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('subject')}>
                <i className="fas fa-book-open"></i>
                <span>Subject</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.subject && (
                <div className="sub-items">
                    {/* Add sub-items for Subject here if needed */}
                </div>
            )}

            <div className="nav-item" onClick={() => toggleSubItems('classRoutine')}>
                <i className="fas fa-calendar"></i>
                <span>Class Routine</span>
                <span className="arrow">&gt;</span>
            </div>
            {openItems.classRoutine && (
                <div className="sub-items">
                    {/* Add sub-items for Class Routine here if needed */}
                </div>
            )}
        </div>
    );
};

export default Sidebar;






