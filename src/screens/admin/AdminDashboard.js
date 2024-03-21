import React from 'react';
import '../../css/Admin.css';
import AdminSidebar from './admin-components/AdminSidebar';

const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar/>
            <div className='dashboard-container'>
                <h2>Dashboard</h2>


                <div className='graph-container'>
                    Daily Updates
                    <img className='graph-1' src="./img/graph1.png" alt="" />
                </div>

                <div className='graph-container'>
                    Daily Uploads
                    <img className='graph-1' src="./img/graph2.png" alt="" />
                </div>
            </div>
        </div>
        
    );
}

export default AdminDashboard