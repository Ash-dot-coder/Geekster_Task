import React from 'react';
import './Card.css';
import image from '../../assets/hotel.jpg';

const Card = () => {
    return (
        <div className="card-container">
            <img className="hotel-img" src={image} alt='' />
            <div className="card-content">
                <h1 className="card-heading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium nihil sunt cum, dicta quae qui debitis veniam.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam vero quia amet quos doloribus dicta ipsum omnis libero, ullam aspernatur maiores nobis reprehenderit et enim, porro quo pariatur consequuntur earum eaque est.</p>
                <button className="card-btn">Get in Touch</button>
            </div>

        </div>
    )
}

export default Card