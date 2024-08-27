import React from 'react';
import './Bungalow.css';
import { Link } from 'react-router-dom';

// Import office-specific images
import b0 from '../../assets/images/b0.jpg';
import b1 from '../../assets/images/b1.jpg';
import b2 from '../../assets/images/b2.jpg';
import b3 from '../../assets/images/b3.jpg';
import b4 from '../../assets/images/b4.jpg';
import b5 from '../../assets/images/b5.jpg';
import b6 from '../../assets/images/b6.jpg';
import b7 from '../../assets/images/b7.jpg';
import b8 from '../../assets/images/b8.jpg';
import b9 from '../../assets/images/b9.jpg';
import b10 from '../../assets/images/b10.jpg';
import b11 from '../../assets/images/b11.jpg';
import b12 from '../../assets/images/b12.jpg';
import b13 from '../../assets/images/b13.jpg';
import b14 from '../../assets/images/b14.jpg';
import b15 from '../../assets/images/b15.jpg';
import b16 from '../../assets/images/b16.jpg';
import b17 from '../../assets/images/b17.jpg';
import b18 from '../../assets/images/b18.jpg';
import b19 from '../../assets/images/b19.jpg';
import b20 from '../../assets/images/b20.jpg';
import b21 from '../../assets/images/b21.jpg';

import { useState } from 'react';


const images = [b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b0,b3];

const Bungalow = () => {
    const [loading, setLoading] = useState(true);
  
    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <div className="bungalow-container">

        <div className="bungalow-gallery">
          {images.map((image, index) => (
            <div className="bungalow-item" key={index}>
              {loading && <div className="loading-placeholder"></div>}
              <img
                src={image}
                alt={`Office Interior ${index + 1}`}
                className="bungalow-image"
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
  
  export default Bungalow;