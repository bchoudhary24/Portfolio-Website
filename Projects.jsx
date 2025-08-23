import React, { useState } from 'react';
import './Projects.css';
import { motion } from "framer-motion";

import micicon from '../assets/micicon.png';
import netflix from '../assets/Netflix.png';
import kitps from '../assets/kitps.png';
import gym from '../assets/gym.png';
import todo from '../assets/todopng.jpeg';
import RealTimeChatApp from '../assets/RealTimeChatApp.jpeg';

const allProjects = [
  {
    title: 'EchoMic-Mate',
    type: 'Frontend',
    image: micicon,
    github: 'https://github.com/bchoudhary24/EchoMic',
    live: 'https://bchoudhary24.github.io/EchoMic/',
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
  {
    title: 'Realtime Chat App',
    type: 'FullStack',
    image: RealTimeChatApp,
    github: 'https://github.com/bchoudhary24/RealTimeChatApp.git',
    live: 'https://splendid-frangollo-6851e6.netlify.app/',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const item = {
  hidden: { y: -60, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Projects = () => {
  const [selectedType, setSelectedType] = useState('All');
  const filtered = selectedType === 'All'
    ? allProjects
    : allProjects.filter(p => p.type === selectedType);

  return (
    <section className="projects-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, textShadow: "0px 0px 15px #fff" }}
      >
        My Projects
      </motion.h2>

      <div className="filter-buttons">
        {['All', 'Frontend', 'Full Stack'].map(type => (
          <motion.button
            key={type}
            onClick={() => setSelectedType(type)}
            className={selectedType === type ? 'active' : ''}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px #fff" }}
            whileTap={{ scale: 0.9 }}
          >
            {type}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filtered.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95, boxShadow: "0px 0px 30px rgba(255,255,0,0.9)" }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
