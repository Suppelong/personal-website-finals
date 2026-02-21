import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Guestbook from './components/Guestbook'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AntiGravity from './components/AntiGravity'

function App() {
  const [gravityOff, setGravityOff] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : ''
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleToggleGravity = () => {
    setGravityOff((prev) => !prev)
  }

  return (
    <>
      <Navbar
        gravityOff={gravityOff}
        onToggleGravity={handleToggleGravity}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
      <AntiGravity active={gravityOff} />
    </>
  )
}

export default App
