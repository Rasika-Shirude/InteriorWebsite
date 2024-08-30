import React from "react";
import './Testimonials.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    quote: "Working with Aesthetic Haus was a game-changer for our home interior. They exceeded all our expectations!",
    author: "Rohit Jadhav",
    location: "Pune, Maharashtra"
  },
  {
    quote: "Their professionalism and eye for detail brought our office to life. We highly recommend them!",
    author: "Sneha Patil",
    location: "Mumbai, Maharashtra"
  },
  {
    quote: "From concept to completion, Aesthetic Haus handled everything flawlessly. Our resort looks stunning!",
    author: "Manoj Thomas",
    location: "Goa"
  },
  {
    quote: "Aesthetic Haus turned our dream home into reality. Their creativity and execution were top-notch!",
    author: "Aarav Mehta",
    location: "Bangalore, Karnataka"
  },
  {
    quote: "The attention to detail and commitment to quality were exceptional. Thank you for designing our perfect office space!",
    author: "Nisha Agarwal",
    location: "Pune, Maharashtra"
  },
  {
    quote: "They were with us every step of the way, creating a design that was tailored to our exact needs.",
    author: "Omkar Kulkarni",
    location: "Pune, Maharashtra"
  },
  {
    quote: "Aesthetic Haus truly understood our vision and delivered beyond our expectations. We love our new space!",
    author: "Anjali Gupta",
    location: "Pune, Maharashtra"
  },
  {
    quote: "Their designs are unique, and they perfectly captured the essence of what we wanted. Great experience!",
    author: "Rajesh Kadam",
    location: "Pune, Maharashtra"
  },
  {
    quote: "Collaborating with Aesthetic Haus was a pleasure. The final result was nothing short of stunning.",
    author: "Priya Joshi",
    location: "Pune, Maharashtra"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
            <p className="quote">"{testimonial.quote}"</p>
            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
            <p className="author">- {testimonial.author}</p>
            <p className="location">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
