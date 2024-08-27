import React from 'react';
import './Team.css'; // Import a CSS file for styling

// Import images
import shravani from '../../assets/images/shravani.jpg';
import ashwini from '../../assets/images/ashwini.jpg';
import sumedha from '../../assets/images/sumedha.jpg';

const teamMembers = [
  { name: 'Shravani', photo: shravani, designation: 'Director of Production' },
  { name: 'Ashwini', photo: ashwini, designation: 'Head of Modelling/UI UX' },
  { name: 'Sumedha', photo: sumedha, designation: 'Creative Director' },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet our team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <p className="team-name">{member.name}</p>
            <p className="team-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
