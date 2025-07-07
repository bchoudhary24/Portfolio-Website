import React from 'react';
import {motion} from 'framer-motion';
import './Home.css';
import pdf from '../pdf/resume.pdf'
import myPic from '../assets/profile.jpg'
const Home = () => {
  return (
    <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
     exit={{opacity:0}}
    transition={{duration:0.4}}
    >
 <section className="home">
      <div className="intro">
        <h1>Hi, I’m <span>Bhumika Choudhary</span></h1>
        <p>"Building digital stories through code, creativity and confidence</p>
        

        <a href="/contact"><button>Contact Me</button></a>
        <br />
  <a href={pdf} download="resume.pdf" className='resume'>
              Download Resume
            </a>
</div>
{/* Right:Image */}
<div className="profile-img">
  <img src={myPic} alt="Bhumika Choudhary" />
</div>
    </section>
    </motion.div>
  );
};

export default Home;