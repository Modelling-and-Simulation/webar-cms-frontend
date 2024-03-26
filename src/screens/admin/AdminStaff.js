import React, { useState } from 'react';
import '../../css/Admin.css'
import { Link } from "react-router-dom";
import AdminSidebar from './admin-components/AdminSidebar';

const AdminStaff = () => {
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleDelete = (index) => {
        setDeleteIndex(index);
    }

    const handleDeleteConfirmed = () => {
        // Implement your deletion logic here, using deleteIndex state
        setDeleteIndex(null); // Reset deleteIndex state after deletion
    }

    const data = [
        { Profile: "hh", Name: "Johnny", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Rose", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Wilhelm", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Wilhelm", AddedDate: "1/1/2024" },
    ];

    return (
        <div>
            <AdminSidebar/>
            <div className="admin-staff-pg">
                <h2>Staff</h2>
                <div className='add-staff-btn-container'>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/addstaff"> 
                        <button className='btn'>Add New Staff</button> 
                    </Link>
                </div>
                <div className="admin-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Added Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.Profile}</td>
                                    <td>{val.Name}</td>
                                    <td>{val.AddedDate}</td>
                                    <td>
                                        <button className="btn-2" onClick={() => handleDelete(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {deleteIndex !== null && (
                <div className="delete-confirmation">
                    <div className="confirmation-content">
                        <p>Are you sure you want to remove this staff?</p>
                        <div className="confirmation-buttons">
                            <button className="btn-confirmation btn-yes" onClick={handleDeleteConfirmed}>Yes</button>
                            <button className="btn-confirmation btn-no" onClick={() => setDeleteIndex(null)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminStaff;
