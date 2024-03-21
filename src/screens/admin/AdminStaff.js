import React from "react";
import '../../css/Admin.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import AdminSidebar from './admin-components/AdminSidebar';


const AdminStaff = () => {
    const data = [
        { Profile: "hh", Name: "Johnny", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Rose", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Wilhelm", AddedDate: "1/1/2024" },
        { Profile: "Anom", Name: "Wilhelm", AddedDate: "1/1/2024" },

    ]

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
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Added Date</th>
                            <th>Action</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.Profile}</td>
                                    <td>{val.Name}</td>
                                    <td>{val.AddedDate}</td>
                                    <td><button className="btn-2">Remove</button></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminStaff