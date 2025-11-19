import React from 'react';
import {Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';
import Skills from './pages/Skills'
import Certificates from './pages/Certificates';
import Internships from './pages/Internships'
function App() {
  return (<>
        <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<Skills />} />
  <Route path="/certificates" element={<Certificates />} />
   <Route path="/internships" element={<Internships />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
    
  );
}

export default App;