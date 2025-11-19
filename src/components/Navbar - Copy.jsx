import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const buttonVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="logo">Portfolio</div>

      {/* Desktop Links */}
      <div className="nav-links">
        {navLinks.map((link, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to={link.path} className="nav-link" onClick={toggleMenu}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;