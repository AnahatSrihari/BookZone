import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>BookZone</h2>
                </div>
                <div className="footer-links">
                    <h3>ABOUT</h3>
                    <ul>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/gift-cards">Gift Cards</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Footer }
