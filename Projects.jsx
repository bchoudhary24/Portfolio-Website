import React, { useState } from 'react';
import './Projects.css';
import micicon from '../assets/micicon.png';
import netflix from '../assets/Netflix.png';
import kitps from '../assets/kitps.png';
import  gym from '../assets/gym.png';
import todo from '../assets/todopng.jpeg';
const allProjects = [
  {
    title: 'EchoMic-Mate',
    type: 'Frontend',
    image: micicon,
    github: 'https://github.com/bchoudhary24/EchoMic',
    live: 'https://bchoudhary24.github.io/EchoMic',
  }, 
  {
    title: 'Netflix Clone',
    type: 'Frontend',
    image: netflix,
    github: 'https://github.com/bchoudhary24/Netflix-Clone',
    live: 'https://bchoudhary24.github.io/Netflix-Clone',
  },
  {
    title: 'College Website',
    type: 'Frontend',
    image: kitps,
    github: 'https://github.com/bchoudhary24/K.I.T.P.S-College-Website',
    live: 'https://bchoudhary24.github.io/KITPS-College-website/.git',
  },
  {
    title: 'Gym Landing Page',
    type: 'Frontend',
    image: gym,
    github: 'https://github.com/bchoudhary24/gym-landing-page-1',
    live: 'https://bchoudhary24.github.io/gym-landing-page-1',
  },
  {
    title: 'Todo App',
    type: 'Frontend',
    image: todo,
    github: 'https://github.com/bchoudhary24/todo-app-1.git',
    live: 'https://bchoudhary24.github.io/todo-app-1/',
  },
 
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filtered = selectedType === 'All'
    ? allProjects
    : allProjects.filter(p => p.type === selectedType);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="filter-buttons">
        {['All', 'Frontend', 'Full Stack'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={selectedType === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <h4>{proj.title}</h4>
            <p>{proj.type}</p>
            <div className="project-links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;