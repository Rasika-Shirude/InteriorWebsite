import React from 'react';
import './OInterior.css';
import { Link } from 'react-router-dom';

// Import office-specific images
import o0 from '../../assets/images/o0.jpg';
import o1 from '../../assets/images/o1.jpg';
import o2 from '../../assets/images/o2.jpg';
import o3 from '../../assets/images/o3.jpg';
import o4 from '../../assets/images/o4.jpg';
import o5 from '../../assets/images/o5.jpg';
import o6 from '../../assets/images/o6.jpg';
import o7 from '../../assets/images/o7.jpg';
import o8 from '../../assets/images/o8.jpg';
import o9 from '../../assets/images/o9.jpg';
import o10 from '../../assets/images/o10.jpg';
import o11 from '../../assets/images/o11.jpg';
import o12 from '../../assets/images/o12.jpg';
import o13 from '../../assets/images/o13.jpg';
import o14 from '../../assets/images/o14.jpg';
import o15 from '../../assets/images/o15.jpg';
import o16 from '../../assets/images/o16.jpg';
import o17 from '../../assets/images/o17.jpg';
import o18 from '../../assets/images/o18.jpg';
import o19 from '../../assets/images/o19.jpg';
import o20 from '../../assets/images/o20.jpg';
import o21 from '../../assets/images/o21.jpg';
import o22 from '../../assets/images/o22.jpg';
import o23 from '../../assets/images/o23.jpg';
import o24 from '../../assets/images/o24.jpg';
import o25 from '../../assets/images/o25.jpg';
import o26 from '../../assets/images/o26.jpg';
import o27 from '../../assets/images/o27.jpg';
import o28 from '../../assets/images/o28.jpg';
import o29 from '../../assets/images/o29.jpg';
import o30 from '../../assets/images/o30.jpg';
import o31 from '../../assets/images/o31.jpg';
import o32 from '../../assets/images/o32.jpg';
import o33 from '../../assets/images/o33.jpg';
import { useState } from 'react';


const images = [o0,o1,o2,o3, o4, o5 , o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o25, o26, o27, o28, o29, o30 ,o31, o32, o33,o2,o9 /*, other office images */];

const OInterior = () => {
    const [loading, setLoading] = useState(true);
  
    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <div className="ointerior-container">

        <div className="ointerior-gallery">
          {images.map((image, index) => (
            <div className="ointerior-item" key={index}>
              {loading && <div className="loading-placeholder"></div>}
              <img
                src={image}
                alt={`Office Interior ${index + 1}`}
                className="ointerior-image"
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
  
  export default OInterior;