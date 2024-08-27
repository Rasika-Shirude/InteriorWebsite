import React from 'react';
import './HInterior.css';
import { Link } from 'react-router-dom';
// Import images directly
import h0 from '../../assets/images/h0.jpeg';
import h1 from '../../assets/images/h1.jpg';
import h2 from '../../assets/images/h2.jpg';
import h3 from '../../assets/images/h3.jpg';
import h4 from '../../assets/images/h4.jpg';
import h5 from '../../assets/images/h5.jpg';
import h6 from '../../assets/images/h6.jpg';
import h7 from '../../assets/images/h7.jpg';
import h8 from '../../assets/images/h8.jpg';
import h9 from '../../assets/images/h9.jpg';
import h10 from '../../assets/images/h10.jpg';
import h11 from '../../assets/images/h11.jpg';
import h12 from '../../assets/images/h12.jpg';
import h13 from '../../assets/images/h13.jpg';
import h14 from '../../assets/images/h14.jpg';
import h15 from '../../assets/images/h15.jpg';
import h16 from '../../assets/images/h16.jpg';
import h17 from '../../assets/images/h17.jpg';
import h18 from '../../assets/images/h18.jpg';
import h19 from '../../assets/images/h19.jpg';
import h20 from '../../assets/images/h20.jpg';
import h21 from '../../assets/images/h21.jpg';
import h22 from '../../assets/images/h22.jpg';
import h23 from '../../assets/images/h23.jpg';
import h24 from '../../assets/images/h24.jpg';
import h25 from '../../assets/images/h25.jpg';
import h26 from '../../assets/images/h26.jpg';
import h27 from '../../assets/images/h27.jpg';
import h28 from '../../assets/images/h28.jpg';
import h29 from '../../assets/images/h29.jpg';
import h30 from '../../assets/images/h30.jpg';
import h31 from '../../assets/images/h31.jpg';
import h32 from '../../assets/images/h32.jpg';
import h33 from '../../assets/images/h33.jpg';


const images = [h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12,h13,h14,h15,h16,h17, h18, h19, h20, h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33,h1,h5];

const HInterior = () => {
  return (
    <div className="hinterior-container">
      <div className="hinterior-gallery">
        {images.map((image, index) => (
          <div className="hinterior-item" key={index}>
            <img src={image} alt={`Home Interior ${index + 1}`} className="hinterior-image" loading="lazy" />
          </div>
        ))}
        <div className="back-link-container">
        <Link to="/portfolio" className="back-link">Back to Portfolio</Link>
      </div>
      </div>
    </div>
  );
};

export default HInterior;
