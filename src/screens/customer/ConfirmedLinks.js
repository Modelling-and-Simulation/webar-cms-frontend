import React from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';

const ConfirmedLinks = () => {
    return (
        <div>
            <Sidebar />
            <div className='link-pg'>
                <h3>Confirmed Links</h3>
                <div className='preview-container'>
                    <div className='preview-img-container'>
                        <img className='preview-img' src="./img/bugatti.jpg" alt="" />
                    </div>
                    <div className='link-img-container'>
                        <img className='link-img' src="./img/link.png" alt="" />
                    </div>
                    <div className='preview-img-container'>
                        <img className='preview-img' src="./img/house.jpg" alt="" />
                    </div>
                    <div className='confirmed-btn-container'>
                        <button className='confirm-btn'>View</button>
                        <button className='confirm-btn'>Make Public</button>
                    </div>
                </div>
                <div className='preview-container'>
                    <div className='preview-img-container'>
                        <img className='preview-img' src="./img/bugatti.jpg" alt="" />
                    </div>
                    <div className='link-img-container'>
                        <img className='link-img' src="./img/link.png" alt="" />
                    </div>
                    <div className='preview-img-container'>
                        <img className='preview-img' src="./img/house.jpg" alt="" />
                    </div>
                    <div className='confirmed-btn-container'>
                        <button className='confirm-btn'>View</button>
                        <button className='confirm-btn'>Make Public</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmedLinks