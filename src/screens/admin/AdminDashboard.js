import React from 'react';
import '../../css/Admin.css';
import AdminSidebar from './admin-components/AdminSidebar';
import DailyUsers from './admin-components/DailyUsers';
import ContentTarget from './admin-components/ContentTarget';

const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar/>
            <div className='dashboard-container'>
                <h2>Dashboard</h2>


                <div className='graph-container'>
                    Daily Users of the Year
                    <DailyUsers />
                </div>

                <div className='graph-container'>
                    Contents and Targets Comparison
                    <ContentTarget />
                </div>
            </div>
        </div>
        
    );
}

export default AdminDashboard