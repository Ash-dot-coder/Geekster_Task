import React from 'react';
import './Hero.css';
const Hero = () => {
    return(
        <div className='hero-section'>
            <div className="content-div">
                <h1 className='title'>Let us find your
                <br /><span>Forever Food.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="buttons">
                    <button className='search-now'>Search Now</button>
                    <button className='know-more'>Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;