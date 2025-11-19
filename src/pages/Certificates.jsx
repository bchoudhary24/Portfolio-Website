import React from 'react';
import './Certificates.css';

// Direct import images (best approach in Vite)
import techbairn from '../assets/techbairn.png.jpg';
import skillnation from '../assets/Skillnation.jpg';
import simpleLearn from '../assets/simpleLearn.jpg';
import medal from '../assets/medal.png';
import certificate from '../assets/certificate.png';
import certificate2 from '../assets/certificate2.png';
import angular from '../assets/angular.png';

const certificates = [
  { src: techbairn, title: 'Techbairn Certificate' },
  { src: skillnation, title: 'Skillnation Certificate' },
  { src: simpleLearn, title: 'SimpleLearn Certificate' },
  { src: medal, title: 'My Medals' },
  { src: certificate, title: 'Discusthrow Certificate' },
  { src: certificate2, title: 'Shotput Certificate' },
  {src: angular,title:'Angular Certificate'}
  // Add more here
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.src} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;