import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const CreateURL = () => {
    return (
        <div>
            <Sidebar />
            <div className='upload-pg'>
                <div className='upload-details-container'>
                    <h2>Create a new URL</h2>
                    <div className='url-preview-container'>
                        <div className='url-create-btn-container'>
                            <button className='link-btn'>Create URL</button>
                        </div>
                        <div className='added-images'>
                            <div className='url-preview-img-outer'>
                                <div className='url-preview-img-container'>
                                    <img className='url-preview-img' src="./img/bugatti.jpg" alt="" />
                                </div>
                                <p>bugatti</p>
                            </div>
                            <div className='url-preview-img-outer'>
                                <div className='url-preview-img-container'>
                                    <img className='url-preview-img' src="./img/livingroom.png" alt="" />
                                </div>
                                <p>living room</p>
                            </div>
                            <div className='url-preview-img-outer'>
                                <div className='url-preview-img-container'>
                                    <img className='url-preview-img' src="./img/livingroom.png" alt="" />
                                </div>
                                <p>living room</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='select-container'>
                        <div className='all-target-container'>
                            <div className='top-container'>
                                <h4>Select targets</h4>
                                <div className='search-container'>
                                    <img className='search-img' src="./img/search.png" alt="" />
                                    <div className="search-input-box">
                                        <input type="search" 
                                                name="search-form" 
                                                id="search-form" 
                                                className="search-input" 
                                                placeholder="Search target"/>
                                    </div>
                                </div>
                            </div>
                            <div className='url-target'>
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/bugatti.jpg" alt="" />
                                    <p>bugatti</p>
                                </div>
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/house.jpg" alt="" />
                                    <p>house</p>
                                </div>  
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/bugatti.jpg" alt="" />
                                    <p>bugatti</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateURL