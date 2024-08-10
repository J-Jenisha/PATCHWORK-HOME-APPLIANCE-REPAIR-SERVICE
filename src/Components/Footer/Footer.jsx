// Footer.js
import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../Images/Team Logo1.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
         <Link to="/"><img src = {logo} alt ='logo'/></Link>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Our Services</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/service">Services</Link>
            <Link to="/blog">Blog</Link>
          </div>

        
          <div className="footer-column">
            <h3>CONTACT US</h3>
            <a href="#help"> Phone: 72000 47856</a>
            <a href="#returns">Email: info@patchwork.com</a>
            <a href="#shipping">Address: 4/93,Valasarvaakam, Chennai - 6000 087</a>
           
          </div>
          
        </div>
      <br></br><br></br>
        
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 PatchWork. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;