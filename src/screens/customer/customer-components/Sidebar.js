import React from 'react';
import '../../../css/Sidebar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='logo-container'>
                <img className='logo-img' src="./img/logo.png" alt="" />
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/dashboard"> Dashboard </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/content"> Contents </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/target"> Targets </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/linkcontenttarget"> Link Content and Targets </Link>
            </div>
            <div className='bar-box'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/profile"> Profile </Link>
            </div>
            <div className='bottom-bar-box'>
                Log Out
            </div>
        </div>
    );
}

export default Sidebar