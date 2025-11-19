import React from 'react';
import {motion} from 'framer-motion'
import Contact from './Contact';


const ContactPage = () => {
  return (  <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
     exit={{opacity:0}}
    transition={{duration:0.4}}
    >
    <main style={{ background: '#ffffff' }}>
      <Contact />
    </main></motion.div>
  );
};

export default ContactPage;