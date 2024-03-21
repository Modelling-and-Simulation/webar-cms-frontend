import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";


const Content = () => {
    return (
        <div>
            <Sidebar/>
            <div className='content-pg'>
                <div className='upload-content-btn-container'>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/uploadcontent"> 
                        <button className='btn'>Upload New Content</button> 
                    </Link>
                </div>
                
                <div className='content-container'>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/livingroom.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/bugatti.jpg" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/iphone.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default Content