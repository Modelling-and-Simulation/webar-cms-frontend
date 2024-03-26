import React, { useState } from 'react';
import Sidebar from './customer-components/Sidebar';
import '../../css/Customer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const CreateURL = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [availableImages, setAvailableImages] = useState([
        { src: "./img/bugatti.jpg", alt: "bugatti" },
        { src: "./img/house.jpg", alt: "house" },
        { src: "./img/livingroom.png", alt: "living room" },
    ]);

    // Function to handle selecting an image
    const handleSelectImage = (image) => {
        setSelectedImages([...selectedImages, image]);
        setAvailableImages(availableImages.filter(item => item.src !== image.src));
    }

    // Function to handle removing an image from the preview
    const handleRemoveImage = (image) => {
        setSelectedImages(selectedImages.filter(item => item.src !== image.src));
        setAvailableImages([...availableImages, image]);
    }

    return (
        <div>
            <Sidebar />
            <div className='upload-pg'>
                <div className='upload-details-container'>
                    <h2>Create a new URL</h2>
                    <div className='url-preview-container'>
                        <div className='url-create-btn-container'>
                            <button className='link-btn'>Create URL</button>
                        </div>
                        <div className='added-images'>
                            {selectedImages.map((image, index) => (
                                <div className='url-preview-img-outer' key={index}>
                                    <div className='url-preview-img-container'>
                                        <img className='url-preview-img' src={image.src} alt={image.alt} />
                                        <div className='remove-overlay' onClick={() => handleRemoveImage(image)}>
                                            <button className='remove-btn'>-</button>
                                        </div>
                                    </div>
                                    <p>{image.alt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='select-container'>
                        <div className='all-target-container'>
                            <div className='top-container'>
                                <h4>Select targets</h4>
                                <div className='search-container'>
                                    <img className='search-img' src="./img/search.png" alt="" />
                                    <div className="search-input-box">
                                        <input type="search" 
                                                name="search-form" 
                                                id="search-form" 
                                                className="search-input" 
                                                placeholder="Search target"/>
                                    </div>
                                </div>
                            </div>
                            <div className='url-target'>
                                {availableImages.map((image, index) => (
                                    <div className='target-img-container' key={index} onClick={() => handleSelectImage(image)}>
                                        <img className='target-img' src={image.src} alt={image.alt} />
                                        <p>{image.alt}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateURL;
