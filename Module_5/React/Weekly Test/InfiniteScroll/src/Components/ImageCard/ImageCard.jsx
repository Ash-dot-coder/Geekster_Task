import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
    // console.log('Image object:', image);

    return (
        <div className='image-card'>
            <img src={image.urls.small} alt={image.alt_description || 'unsplash Image'} />
            <p className="author">By {image.user?.name || 'unknown'}</p>
        </div>
    );
};

export default ImageCard;