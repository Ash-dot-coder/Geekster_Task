import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GeekFood</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#quote">Quote</a></li>
          <li><a href="#resturants">Resturants</a></li>
          <li><a href="#food">Food</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </nav>
      <div className="button">
        <button className='getStarted'>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
