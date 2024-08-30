import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
// Import images
import homeInterior from '../../assets/images/home_interior.jpg';
import officeInterior from '../../assets/images/office_interior.jpg';
import bungalow from '../../assets/images/Bungalow.jpg';
import resort from '../../assets/images/resort.jpg';
import gym from '../../assets/images/gym.jpg';

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'Home Interior', image: homeInterior, route: '/home-interior' },
    { id: 2, title: 'Office Interior', image: officeInterior, route: '/office-interior' },
    { id: 3, title: 'Bungalow', image: bungalow, route: '/bungalow' },
    { id: 3, title: 'Resort', image: resort, route: '/resort' },
    { id: 3, title: 'Gym', image: gym, route: '/gym' },

  ];

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our diverse range of projects that showcase our design capabilities and creativity.</p>
      </header>

      <section className="portfolio-gallery">
        {projects.map((project) => (
          <Link to={project.route} key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </section>

  
    </div>
  );
};

export default PortfolioPage;
