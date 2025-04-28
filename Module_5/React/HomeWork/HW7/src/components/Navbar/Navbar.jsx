import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <div className="logo-name">
                <img src={logo} alt="" className="logo-img" />
                <h1>GeekFood</h1>
            </div>

            <div className="pages">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/quotes'>Quotes</Link></li>
                    <li><Link to='/restaurants'>Restaurants</Link></li>
                    <li><Link to='/foods'>Foods</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ul>
            </div>

            <button>Get Started</button>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>☰</div>

            {/* Mobile Menu (Visible only when toggles) */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/quotes'>Quotes</Link></li>
                    <li><Link to='/restaurants'>Restaurants</Link></li>
                    <li><Link to='/foods'>Foods</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;