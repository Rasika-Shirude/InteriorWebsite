import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="https://www.google.com/maps/place/Chandranil+-+100+Dhayri+Phata" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon hoverable-icon" />
            </a>
            Chandranil - 100 Dhayri Phata
          </p>
          <p>Sinhgad road, Pune 41</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon hoverable-icon" />
            <a href="mailto:rasika.shirude@gmail.com">rasika.shirude@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="footer-icon hoverable-icon" />
            8329407271 / 9028090362
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://wa.me/918329407271" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/sas_inscape_architects?igsh=ZGJ5ZGY4N25mdWpv" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/sasinscapearchitects/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
