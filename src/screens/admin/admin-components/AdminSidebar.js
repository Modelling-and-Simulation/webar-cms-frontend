import React from 'react';
import '../../../css/Sidebar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='logo-container'>
                <img className='logo-img' src="./img/logo.png" alt="" />
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/admindashboard"> Dashboard </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/adminstaff"> Staff </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/adminusers"> Users </Link>
            </div>
            <div className='admin-bottom-bar-box'>
                Log Out
            </div>
        </div>
    );
}

export default AdminSidebar