import React from 'react';
import './AboutUs.css'; // Make sure the filename matches

// Import team member photos


const AboutUs = () => {
  return (
    <div className="portfolio-container">
      <section>
        <p>
          Welcome to SAS Inscape Architects, where creativity meets functionality. We are a passionate team of architects and interior designers dedicated to transforming spaces into innovative and inspiring environments. Our mission is to create designs that reflect our clients’ unique visions while ensuring sustainability and functionality.
        </p>
      </section>

      <section>
        <h2>History</h2>
        <p>
          Founded in 2022, SAS Inscape Architects has grown from a small design studio to a recognized leader in the architecture and interior design industry. Over the years, we have successfully completed numerous residential and commercial projects.
        </p>
      </section>


      <section>
        <h2>Services</h2>
        <ul>
          <li>Architectural Design: Tailored designs that meet the specific needs of each client.</li>
          <li>Interior Design: Creating harmonious and functional interiors that enhance the user experience.</li>
          <li>Landscape Architecture: Designing outdoor spaces that blend seamlessly with the environment.</li>
          <li>Project Management: Comprehensive management to ensure projects are delivered on time and within budget.</li>
        </ul>
      </section>

      <section>
        <h2>Philosophy</h2>
        <p>
          Our design philosophy revolves around the belief that every space tells a story. We prioritize understanding our clients’ needs and aspirations, ensuring that our designs not only meet aesthetic standards but also enhance the way people live and work. We are committed to sustainability, integrating eco-friendly practices into our design process.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
