import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';

const UploadContent = () => {
    return (
        <div>
            <Sidebar />
            <div className='upload-pg'>
                <div className='upload-details-container'>
                    <h2>Upload New Content</h2>
                    <div className='profile-details'>
                        <label htmlFor="name">Upload your content file:</label><br />
                        <input  type="file" />
                    </div> <br />
                    <div className='profile-details'>
                        <label htmlFor="name">Name of the content:</label><br />
                        <input className='input-box' type="text" placeholder='Name' />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name">Description:</label><br />
                        <input className='input-box' type="text" placeholder='Give your Description' />
                    </div>
                    <div className='profile-details'>
                        <label htmlFor="name">Upload the content image:</label><br />
                        <input type="file" />
                    </div> <br />
                    <div className='btn-container'>
                        <button type="submit" className='btn'>Upload</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UploadContent