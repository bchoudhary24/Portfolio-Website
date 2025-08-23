import React from 'react';
import './Certificates.css';

const certificates = [
  {
    src: require('../assets/techbairn.png.jpg'),
    title: 'Techbairn Certificate',
  },
  {
    src: require('../assets/Skillnation.jpg'),
    title: 'Skillnation Certificate',
  },
  {
    src: require('../assets/simpleLearn.jpg'),
    title: 'SimpleLearn Certificate',
  },
  {
    src: require('../assets/medal.png'),
    title: ' My Medals',

  },
  {
    src: require('../assets/certificate.png'),
    title: 'Discusthrow Certificate',

  },
  {
    src: require('../assets/certificate2.png'),
    title: 'Shotput Certificate',

  }
  
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
