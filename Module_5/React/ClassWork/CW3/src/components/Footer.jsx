import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="logoipsum">
                <h2 className='footer-logo'>logoipsum</h2>
            </div>
            <div className="footer-text">
            {/* #0d9488 */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="social-links">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                    <li>Twitter(X)</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;