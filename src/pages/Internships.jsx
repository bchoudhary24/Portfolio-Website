import React from 'react';
import './Internships.css';

// ✅ Image ko upar import karo
import internship1 from '../assets/Internship1.jpg';
import CodeSquadz from '../assets/CodeSquadz';

// Internship data array
const internships = [
  {
    src: internship1,
    title: 'Completion Certificate of Web Development Internship at Elevate Labs From Soft India',
  },{
    src: CodeSquadz,
    title:'Completion Certificate of MERNSTACK Training at CodeSquadz'
  }
  // Add more internship certificates here
];

const Internships = () => {
  return (
    <section className="internships-section">
      <h2>My Internships</h2>
      <div className="internships-grid">
        {internships.map((intern, index) => (
          <div className="internships-card" key={index}>
            <img src={intern.src} alt={intern.title} />
            <p>{intern.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;