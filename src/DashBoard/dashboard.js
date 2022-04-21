import React, { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import './dashboard.css';

const Dashboard = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    const openSidebar = () => {
        setSideBarOpen(true);
    }
    const closeSidebar = () => {
        setSideBarOpen(false);
    }
    return (
        <div className='container'>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <h2>dash</h2>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}

export default Dashboard;