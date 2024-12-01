import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from '../../Assets/Images/bookzone-white-logo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-brand'>
                    <img src={footerLogo} alt="BookZone" className="footer-logo" />
                </div>
                <div className='footer-links'>
                    <div className="footer-about">
                        <h3>ABOUT</h3>
                        <ul>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/gift-cards">Gift Cards</Link></li>
                        </ul>
                    </div>
                    <div className="footer-help">
                        <h3>HELP</h3>
                        <ul>
                            <li><Link to="/payments">Payments</Link></li>
                            <li><Link to="/shipping">Shipping</Link></li>
                            <li><Link to="/cancellation-returns">Cancellation & Returns</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p> BookZone All Rights Reserved</p>
            </div>
        </div>
    );
}

export { Footer };