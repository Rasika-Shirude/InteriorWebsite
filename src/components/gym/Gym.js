import React from 'react';
import './Gym.css';
import { Link } from 'react-router-dom';

// Import office-specific images
import g0 from '../../assets/images/g0.jpg';
import g1 from '../../assets/images/g1.jpg';
import g2 from '../../assets/images/g2.jpg';
import g3 from '../../assets/images/g3.jpg';
import g4 from '../../assets/images/g4.jpg';
import g5 from '../../assets/images/g5.jpg';
import g6 from '../../assets/images/g6.jpg';
import g7 from '../../assets/images/g7.jpg';
import g8 from '../../assets/images/g8.jpg';
import g9 from '../../assets/images/g9.jpg';
import g10 from '../../assets/images/g10.jpg';
import g11 from '../../assets/images/g11.jpg';



import { useState } from 'react';


const images = [g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11];

const Gym = () => {
    const [loading, setLoading] = useState(true);
  
    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <div className="gym-container">

        <div className="gym-gallery">
          {images.map((image, index) => (
            <div className="gym-item" key={index}>
              {loading && <div className="loading-placeholder"></div>}
              <img
                src={image}
                alt={`Office Interior ${index + 1}`}
                className="gym-image"
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </div>
          ))}
          <div className="back-link-container">
        <Link to="/portfolio" className="back-link">Back to Portfolio</Link>
      </div>
        </div>
      </div>
    );
  };
  
  export default Gym;