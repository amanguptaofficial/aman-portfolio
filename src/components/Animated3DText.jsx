import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Animated3DText.css'

const Animated3DText = ({ text, className = '' }) => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const letters = text.split('')

  return (
    <h1 
      ref={ref}
      className={`animated-3d-text ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {letters.map((letter, index) => {
        const letterPosition = index / letters.length - 0.5
        const distance = Math.abs(letterPosition - mousePosition.x)
        const intensity = Math.max(0, 1 - distance * 1.5)
        
        return (
          <motion.span
            key={index}
            className="letter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: mousePosition.y * 10 * intensity,
              rotateY: mousePosition.x * 10 * intensity,
              translateZ: intensity * 10
            }}
            transition={{ 
              delay: index * 0.02,
              type: "spring",
              stiffness: 400,
              damping: 25,
              opacity: { duration: 0.3 },
              rotateX: { type: "spring", stiffness: 300, damping: 20 },
              rotateY: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileHover={{
              scale: 1.1,
              translateZ: 15,
              transition: { duration: 0.2 }
            }}
            style={{
              transformStyle: 'preserve-3d',
              whiteSpace: letter === ' ' ? 'pre' : 'normal'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )
      })}
    </h1>
  )
}

export default Animated3DText

