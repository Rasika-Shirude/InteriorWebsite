import React from 'react';
import './Resort.css';
import { Link } from 'react-router-dom';

// Import office-specific images
import r0 from '../../assets/images/r0.jpg';
import r1 from '../../assets/images/r1.jpg';
import r2 from '../../assets/images/r2.jpg';
import r3 from '../../assets/images/r3.jpg';
import r4 from '../../assets/images/r4.jpg';
import r5 from '../../assets/images/r5.jpg';
import r6 from '../../assets/images/r6.jpg';
import r7 from '../../assets/images/r7.jpg';
import r8 from '../../assets/images/r8.jpg';
import r9 from '../../assets/images/r9.jpg';
import r10 from '../../assets/images/r10.jpg';
import r11 from '../../assets/images/r11.jpg';
import r12 from '../../assets/images/r12.jpg';
import r13 from '../../assets/images/r13.jpg';
import r14 from '../../assets/images/r14.jpg';
import r15 from '../../assets/images/r15.jpg';
import r16 from '../../assets/images/r16.jpg';
import r17 from '../../assets/images/r17.jpg';
import r18 from '../../assets/images/r18.jpg';
import r19 from '../../assets/images/r19.jpg';
import r20 from '../../assets/images/r20.jpg';
import r21 from '../../assets/images/r21.jpg';
import r22 from '../../assets/images/r22.jpg';
import r23 from '../../assets/images/r23.jpg';


import { useState } from 'react';


const images = [r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23];

const Resort = () => {
    const [loading, setLoading] = useState(true);
  
    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <div className="resort-container">

        <div className="resort-gallery">
          {images.map((image, index) => (
            <div className="resort-item" key={index}>
              {loading && <div className="loading-placeholder"></div>}
              <img
                src={image}
                alt={`Office Interior ${index + 1}`}
                className="resort-image"
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
  
  export default Resort;