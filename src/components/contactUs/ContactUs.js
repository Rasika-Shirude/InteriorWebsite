import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can connect to EmailJS or just show the success message
    setSuccessMessage('Message sent successfully!');
    
    // Clear the form after submission (optional)
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="fa-phone" />
          <a href="tel:8799901000" className="phone-link">8799901000</a> / 
          <a href="tel:18001027382" className="phone-link">18001027382</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="fa-envelope" />
          <a href="mailto:kavya.dixit@gmail.com" className="email-link">kavya.dixit@gmail.com</a>
        </div>
        <p className="social-media-invite">
          You can also find us on social media:
        </p>
        <div className="social-media-lks">
          <a href="https://wa.me/918799901000" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" />
          </a>
          <a href="https://www.instagram.com/designanddecor_interiors?igsh=MXh0dG81b2pmdzRsaw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/aici/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin" />
          </a>
        </div>
        <div className="office-addresses">
          <h3>
            <a href="https://maps.app.goo.gl/Bin1xvmt5N1weSb47" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-map-marker" />
            </a> Office
          </h3>
          <div className="office">
            <h5>Reliance Mall</h5>
            <p>Erandwane, Pune, Maharashtra 411004</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
