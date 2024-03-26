import React, { useState } from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";


const Target = () => {
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
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
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
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
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
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/mug.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
                    </div>
                    <div className='target-box'>
                        <div>
                            <img className='target-img' src="./img/earth.png" alt="" />
                        </div>
                        <div className='btn-section'>
                            <button className='btn-2' onClick={toggleEditPopup}>Edit</button>
                            <button className='btn-2' onClick={toggleDeletePopup}>Delete</button>
                        </div>
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
                        <p>Are you sure you want to delete this target?</p>
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

export default Target