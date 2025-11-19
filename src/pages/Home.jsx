import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import myPic from "../assets/profile.jpg";


// Floating background circles
const FloatingBackground = () => {
  const circles = Array.from({ length: 12 });


  return (
    <div className="floating-bg">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="circle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? "rgba(255,255,255,0.2)"
                : "rgba(30,60,114,0.25)",
          }}
          animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
          transition={{duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="home">
        {/* Floating background */}
        <FloatingBackground />

        {/* Intro text */}
        <div className="intro">
          <h1>
            {/* Hi, I’m */}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hi-text"
            >
              Hi, I’m
            </motion.span>

            &nbsp;

            {/* Bhumika Choudhary */}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="name-text"
            >
              Bhumika Choudhary
            </motion.span>
          </h1>

          <p>"Building digital stories through code, creativity and confidence"</p>

          <a href="./resume.pdf" download="Bhumika_Choudhary_Resume.pdf">
            <button className="glow-btn">Download Resume</button>
          </a>
        </div>

        {/* Profile Image */}
        <div className="profile-img">
          <img src={myPic} alt="Bhumika Choudhary" />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;