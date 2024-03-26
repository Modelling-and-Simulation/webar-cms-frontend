import React, { useState } from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";


const Content = () => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

    // Function to toggle the edit popup
    const toggleEditPopup = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
    }

    const toggleDeletePopup = () => {
        setIsDeletePopupOpen(!isDeletePopupOpen);
    }

    const handleDeleteConfirmed = () => {
        setIsDeletePopupOpen(false); // Close the confirmation popup after deletion
    }

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
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/bugatti.jpg" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div>
                            <img className='content-img' src="./img/iphone.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Edit Popup */}
            {isEditPopupOpen && (
                <div className="edit-popup">
                    <div className="edit-popup-content">
                        <div>
                            <img className='popup-close' src="./img/close.png" alt="" onClick={toggleEditPopup}/>
                        </div>
                        <h4>Edit Description</h4>
                        Description:
                        {<input type='text' className='input-box'></input>}
                        <div className='popup-btn-container'>
                            <button onClick={toggleEditPopup} className='popup-btn'>Save</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {isDeletePopupOpen && (
                <div className="delete-confirmation">
                    <div className="confirmation-content">
                        <p>Are you sure you want to delete this content?</p>
                        <div className="confirmation-buttons">
                            <button className="btn-confirmation btn-yes" onClick={handleDeleteConfirmed}>Yes</button>
                            <button className="btn-confirmation btn-no" onClick={toggleDeletePopup}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
}

export default Content