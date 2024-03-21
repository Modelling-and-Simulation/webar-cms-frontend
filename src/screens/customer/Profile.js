import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';

const Profile = () => {
    return (
        <div>
            <Sidebar />
            <div className='link-pg'>
                <div className='profile-img-container'>
                    <img className='profile-img' src="./img/man.png" alt="" />
                    {/* <img className='profile-edit-img' src="./img/edit.png" alt="" /> */}
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">Name:</label><br />
                    <input className='input-box' type="text" placeholder='Johnny Roys'  /> 
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">Email:</label><br />
                    <input className='input-box' type="email" placeholder='johnny@gmail.com' />
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">User Name:</label><br />
                    <input className='input-box' type="text" placeholder='Johnny85' />
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">Phone Number:</label><br />
                    <input className='input-box' type="number" placeholder='0754856295' />
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">Number of targets:</label><br />
                    <input className='input-box' type="number" placeholder='10' />
                </div>
                <div className='profile-details'>
                    <label htmlFor="name">Number of contents:</label><br />
                    <input className='input-box' type="number" placeholder='15' />
                </div>
                <div className='btn-container'>
                    <button type="submit" className='btn'>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Profile