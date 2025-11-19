import React from 'react';
import{motion} from'framer-motion'
import './About.css';


import About from './About';


const AboutPage = () => {
  return (
     <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
     exit={{opacity:0}}
    transition={{duration:0.4}}
    >
    <div className="aboutpage-wrapper">
      <About />
     
    </div>
    </motion.div>
  );
};

export default AboutPage;