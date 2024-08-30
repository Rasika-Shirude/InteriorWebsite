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
          <p className="bgadd">
            <a href="https://maps.app.goo.gl/Bin1xvmt5N1weSb47" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon hoverable-icon" />
            </a>
            Reliance Mall, Erandwane,
          </p>
          <p className="bgadd">Pune, Maharashtra 411004</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon hoverable-icon" />
            <a href="mailto:kavya.dixit.com">kavya.dixit@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="footer-icon hoverable-icon" />
            <a href="tel:8799901000" className="phone-link">8799901000</a> / 
          <a href="tel:18001027382" className="phone-link">18001027382</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://wa.me/918799901000" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/designanddecor_interiors?igsh=MXh0dG81b2pmdzRsaw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/aici/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
