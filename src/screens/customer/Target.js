import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";


const Target = () => {
    return (
        <div>
            <Sidebar/>
            <div className='target-pg'>
                <div className='target-btn-container'>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/createurl"> 
                        <button className='btn'>Create New Link</button> 
                    </Link>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/uploadtarget"> 
                        <button className='btn'>Upload New Target</button> 
                    </Link>
                </div>
                <div className='target-url-container'>
                    <div className='url-edit-container'>
                        Target URL: 
                        <img className='edit-img' src="./img/edit.png" alt="" />
                    </div>
                    <div className='target-box-container'>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/livingroom.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='target-url-container'>
                    <div className='url-edit-container'>
                        Target URL: 
                        <img className='edit-img' src="./img/edit.png" alt="" />
                    </div>
                    <div className='target-box-container'>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/livingroom.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='target-url-container'>
                    <div className='url-edit-container'>
                        Target URL: 
                        <img className='edit-img' src="./img/edit.png" alt="" />
                    </div>
                    <div className='target-box-container'>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/livingroom.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2'>Edit</button>
                            <button className='btn-2'>Delete</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Target