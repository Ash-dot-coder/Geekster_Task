import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="content">
            <h1 className="first-heading">Let us find your</h1>
            <h1 className="second-heading">Forever Food.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque delectus quae cum error ea natus, id nostrum corporis reprehenderit officiis molestiae aliquam? Et facilis maxime, labore excepturi adipisci, veritatis iste libero itaque cumque velit necessitatibus minus eveniet?</p>
            <div className="btns">
                <button className="btn-1">Search Now</button>
                <button className="btn-2">Know More</button>
            </div>
        </div>
    </div>
  );
};

export default Hero;