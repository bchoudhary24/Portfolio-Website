import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';
import Skills from './pages/Skills'
import Certificates from './pages/Certificates';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<Skills />} />
  <Route path="/certificates" element={<Certificates />} />
      </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;