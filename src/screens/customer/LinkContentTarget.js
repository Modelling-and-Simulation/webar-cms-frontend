import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const LinkContentTarget = () => {
    return (
        <div>
            <Sidebar />
            <div className='link-pg'>
                <div className='target-btn-container'>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/confirmedlinks"> 
                        <button className='btn'>Confirmed Links</button> 
                    </Link>
                </div>
                <h3>Preview</h3>
                <div className='preview-container'>
                    <div className='preview-img-outer'>
                        <div className='preview-img-container'>
                            <img className='preview-img' src="./img/bugatti.jpg" alt="" />
                        </div>
                        <p>bugatti</p>
                    </div>
                    <div className='link-img-container'>
                        <img className='link-img' src="./img/link.png" alt="" />
                    </div>
                    <div className='preview-img-outer'>
                        <div className='preview-img-container'>
                            <img className='preview-img' src="./img/livingroom.png" alt="" />
                        </div>
                        <p>living room</p>
                    </div>
                    <div className='preview-btn-container'>
                        <button className='link-btn'>Link</button>
                    </div>
                </div>
                <div className='select-container'>
                    <div className='target-container'>
                        <div className='top-container'>
                            <h4>Select a target</h4>
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
                        <div>
                            <p>Target URL: </p>
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
                                    <img className='target-img' src="./img/earth.png" alt="" />
                                    <p>earth</p>
                                </div>
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/cottage.png" alt="" />
                                    <p>cottage</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Target URL: </p>
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
                                    <img className='target-img' src="./img/cottage.png" alt="" />
                                    <p>cottage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='target-container'>
                        <div className='top-container'>
                            <h4>Select a content</h4>
                            <div className='search-container'>
                                <img className='search-img' src="./img/search.png" alt="" />
                                <div className="search-input-box">
                                    <input type="search" 
                                            name="search-form" 
                                            id="search-form" 
                                            className="search-input" 
                                            placeholder="Search content"/>
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
                                    <img className='target-img' src="./img/cottage.png" alt="" />
                                    <p>cottage</p>
                                </div>
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/iphone.png" alt="" />
                                    <p>iphone</p>
                                </div>
                                <div className='target-img-container'>
                                    <img className='target-img' src="./img/livingroom.png" alt="" />
                                    <p>living room</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinkContentTarget