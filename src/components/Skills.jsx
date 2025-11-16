import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = ({ data }) => {
  const skillCategories = [
    { title: 'Languages', items: data.skills.languages },
    { title: 'Frameworks', items: data.skills.frameworks },
    { title: 'Databases', items: data.skills.databases },
    { title: 'Tools', items: data.skills.tools },
    { title: 'Integrations', items: data.skills.integrations },
    { title: 'Cloud', items: data.skills.cloud }
  ]

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

