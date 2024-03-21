import React from "react";
import '../../css/Admin.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import AdminSidebar from './admin-components/AdminSidebar';


const AdminUsers = () => {
    const data = [
        { Profile: "hh", Name: "Johnny", RegisteredDate: "1/1/2024", uploads: 10 },
        { Profile: "Anom", Name: "Rose", RegisteredDate: "1/1/2024", uploads: 1  },
        { Profile: "Anom", Name: "Wilhelm", RegisteredDate: "1/1/2024", uploads: 8  },
        { Profile: "Anom", Name: "Wilhelm", RegisteredDate: "1/1/2024", uploads: 15  },

    ]

    return (
        <div>
            <AdminSidebar/>
            <div className="admin-staff-pg">
                <h2>Users</h2>
                <div className="admin-table-container">
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Registered Date</th>
                            <th>Uploads</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.Profile}</td>
                                    <td>{val.Name}</td>
                                    <td>{val.RegisteredDate}</td>
                                    <td>{val.uploads}</td>

                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminUsers