import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';

const UploadTarget = () => {
    return (
        <div>
            <Sidebar />
            <div className='upload-pg'>
                <div className='upload-details-container'>
                    <h2>Upload New Target</h2>
                    <div className='profile-details'>
                        <label htmlFor="name">Upload your target image:</label><br />
                        <input  type="file" />
                    </div> <br />
                    <div className='profile-details'>
                        <label htmlFor="name">Name of the target file:</label><br />
                        <input className='input-box' type="text" placeholder='Name' />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name">Description:</label><br />
                        <input className='input-box' type="text" placeholder='Give your Description' />
                    </div>
                    <div className='btn-container'>
                        <button type="submit" className='btn'>Upload</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UploadTarget