import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-content">
            {/* Quick Links */}
            <div className="footer-section">
                <h3 className="footer-title">Quick Links</h3>
                <div className="footer-links">
                    {/* <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#policies">Policies</a> */}
                     <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
             <Link to="/policies">Policies</Link>
                </div>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
                <h3 className="footer-title">Contact Us</h3>
                <p>📧 info@mountainescape@gmail.com</p>
                <p>📞 +92 300 1234862</p>
            </div>

            {/* Social Media */}
            <div className="footer-section">
                <h3 className="footer-title">Follow Us</h3>
                <div className="social-links">
                    <a href="#" className="social-link">📘 Facebook</a>
                    <a href="#" className="social-link">📷 Instagram</a>
                    <a href="#" className="social-link">💬 WhatsApp</a>
                </div>
            </div>
        </div>

        <hr className="footer-divider"/>
        
        <div className="footer-bottom">
         <p>© 2025 Mountain Escape. All rights reserved.</p>
            <div className="footer-policies">
                <a href="#terms">Terms & Conditions</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}