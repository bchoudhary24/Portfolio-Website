import React from 'react';
import './About.css';
import profileImage from '../assets/about.png.jpg'; // ✅ correct import from assets
import { Link } from 'react-router-dom';
const About = () => {
  return (
      
    <section className="about-section" id="about">
      <h2>About Me</h2>
  
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Bhumika Choudhary" />
        </div>

        <div className="about-text">
          <p>
            Hello! I'm <strong>Bhumika Choudhary</strong>, a passionate Web Developer, Tech Enthusiast, and Public Speaker.
            I specialize in building user-friendly, high-performance websites and web apps using modern technologies like React, Node.js, and Tailwind.
          </p>
<br />
          <p>
            I'm currently pursuing B.Tech from Kothiwal Institute of Technology and Professional Studies. I've built several projects including a
            <em> Netflix Clone</em>, <em>TODO App</em>, and even my <em>college's website</em> — all as real-world applications using React.
          </p>
<br />
          <p>
            I believe in continuous learning, building in public, and solving real-world problems through tech. My dedication to writing clean, scalable code and exploring emerging trends sets me apart as a modern developer.
          </p>

          <div className="about-buttons">
            <a
              href="https://www.linkedin.com/in/bhumika-choudhary-3b580a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit my LinkedIn
            </a>
            <Link to="/certificates" className="btn secondary">
              View Certificates
            </Link>
            <Link to="/Internships" className='btn secondary'>
            View Internships
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;