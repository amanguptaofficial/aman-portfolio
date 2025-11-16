import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaCheckCircle, FaSpinner } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const currentDate = new Date()
      const formattedDate = currentDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: data.personalInfo.email,
        reply_to: formData.email,
        date: formattedDate,
        timestamp: currentDate.toISOString()
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setShowThankYou(true)
      
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      setTimeout(() => {
        setShowThankYou(false)
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send message. Please try again or contact directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-cta">{data.contact.cta}</p>
        <p className="contact-availability">{data.contact.availability}</p>
        
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="thank-you-message"
            >
              <FaCheckCircle className="thank-you-icon" />
              <div>
                <h3>Thank you for connecting with us!</h3>
                <p>Your message has been sent successfully. We will reach out shortly.</p>
              </div>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="error-message"
            >
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${data.personalInfo.email}`}>{data.personalInfo.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <h3>LinkedIn</h3>
                <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">Connect with me</a>
              </div>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div>
                <h3>GitHub</h3>
                <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer">View my code</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </div>
        
        <div className="social-links">
          <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          {data.socialLinks.twitter && (
            <a href={data.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

