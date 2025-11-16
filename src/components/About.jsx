import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="about-text">{data.about.bio}</p>
        <div className="about-stats">
          <div className="stat">
            <h3>{data.personalInfo.experience}</h3>
            <p>Experience</p>
          </div>
          <div className="stat">
            <h3>{data.projects.length}+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>{data.skills.languages.length + data.skills.frameworks.length + data.skills.databases.length}+</h3>
            <p>Technologies</p>
          </div>
        </div>
        
        {data.education && data.education.length > 0 && (
          <div className="education-section">
            <h2 className="section-title" style={{ marginTop: '60px' }}>Education</h2>
            <div className="education-timeline">
              {data.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="education-header">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <span className="education-institution">{edu.institution}</span>
                    <span className="education-duration">{edu.duration}</span>
                  </div>
                  <p className="education-description">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default About

