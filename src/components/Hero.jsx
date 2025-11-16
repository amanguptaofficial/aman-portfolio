import React from 'react'
import { motion } from 'framer-motion'
import Developer3D from './Developer3D'
import './Hero.css'

const Hero = ({ data }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {data.personalInfo.title}
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data.about.description}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT ME
            </motion.a>
            
            <motion.a
              href="/myResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              download="Aman_Gupta_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {data.personalInfo.profileImage ? (
            <div className="profile-image-container">
              <motion.div
                className="profile-image-wrapper"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src={data.personalInfo.profileImage} 
                  alt={data.personalInfo.name}
                  className="profile-image"
                />
                <div className="profile-image-glow"></div>
              </motion.div>
            </div>
          ) : (
            <Developer3D />
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

