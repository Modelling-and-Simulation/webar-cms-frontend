import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import DailyUpdates from './customer-components/DailyUpdates';
import DailyUploads from './customer-components/DailyUploads';

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className='dashboard-container'>
                <h2>Dashboard</h2>

                <div className='graph-container'>
                    Daily Updates
                    <DailyUpdates />
                </div>

                <div className='graph-container'>
                    Daily Uploads
                    <DailyUploads />
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard