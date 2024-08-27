import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>SAS Inscape Architects</h1>
          <p>Give Space And Take Art</p>
          <a href="#services" className="cta-button">Discover More</a>
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            SAS Inscape Architects specializes in creating sophisticated and functional spaces that reflect our clients' visions. 
            Our experienced team is dedicated to providing exceptional architectural and interior design services, ensuring every project is executed with precision and care.
          </p>
          <a href="/about" className="cta-link">Read More</a>
        </div>
      </section>

      <section className="services-section" id="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <a href="/portfolio" className="service-card">
            <h3>Architectural Design</h3>
            <p>Tailored designs to suit your specific needs and preferences.</p>
          </a>
          <a href="/portfolio" className="service-card">
            <h3>Interior Design</h3>
            <p>Creating elegant and functional interiors to enhance any space.</p>
          </a>
          <a href="/portfolio" className="service-card">
            <h3>Landscape Architecture</h3>
            <p>Designing outdoor environments that harmonize with their surroundings.</p>
          </a>
          <a href="/portfolio" className="service-card">
            <h3>Project Management</h3>
            <p>Efficient project management ensuring timely and budget-friendly completion.</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
