import React from "react";
import '../../css/Admin.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import AdminSidebar from './admin-components/AdminSidebar';


const AddStaff = () => {

    return (
        <div>
            <AdminSidebar/>
            <div className="admin-staff-pg">
                <div className='add-staff-container'>
                    <h2>Add New Staff</h2>
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Name:</label>
                        <input className='input-box'  type="text" />
                    </div> 
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Email:</label>
                        <input className='input-box' type="email" />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Username:</label>
                        <input className='input-box' type="text" />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Phone Number:</label>
                        <input type="text" className='input-box' />
                    </div> 
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Password:</label>
                        <input className='input-box' type="password" />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name" className="staff-label">Profile Picture:</label>
                        <input type="file" />
                    </div> 
                    <div className='btn-container'>
                        <button type="submit" className='btn'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStaff