import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import portfolioData from '../portfolio-data.json'
import './App.css'

function App() {
  const [data] = useState(portfolioData)

  return (
    <div className="App">
      <Header data={data} />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Contact data={data} />
    </div>
  )
}

export default App

