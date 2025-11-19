import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiRedux, SiBootstrap, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVercel, SiMongoose, SiSocketdotio, SiJsonwebtokens } from 'react-icons/si';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "RESTful APIs", icon: <SiPostman /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel / Netlify", icon: <SiVercel /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // ek ek karke aaye
    },
  },
};

const item = {
  hidden: { x: -80, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      {skillsData.map((group, index) => (
        <div className="skills-category" key={index}>
          <h3>{group.category}</h3>
          <motion.div
            className="skills-grid"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {group.skills.map((skill, i) => (
              <motion.div
                className="skill-card"
                key={i}
                variants={item}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95, boxShadow: "0px 0px 30px rgba(255,255,0,0.9)" }}
              >
                <span className="icon">{skill.icon}</span>
                <span className="name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;