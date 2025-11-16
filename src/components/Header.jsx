import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

const Header = ({ data }) => {
  const { isDarkMode, toggleTheme } = useTheme()

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    window.history.pushState(null, '', hash);
    const element = document.querySelector(hash);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home" onClick={handleHomeClick}>{data.personalInfo.name}</a>
        </motion.div>
        
        <nav className="nav">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>HOME</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>ABOUT</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>SKILLS</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>EXPERIENCE</a>
          <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>MY WORK</a>
        </nav>
        
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <a
            href="#contact"
            className="hire-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>HIRE ME!</span>
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

