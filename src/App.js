import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import DashboardCards from './components/DashboardCards';
import ExamResults from './components/ExamResults';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content">
                    <div className="left-section">
                        <AboutMe />
                    </div>
                    <div className="right-section">
                        <DashboardCards />
                        <ExamResults />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;


