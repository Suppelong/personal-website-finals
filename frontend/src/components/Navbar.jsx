import { useState, useEffect } from 'react'

export default function Navbar({ gravityOff, onToggleGravity, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-logo">{'<BJ />'}</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
          <li><a href="#guestbook" onClick={handleNavClick}>Guestbook</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          <li>
            <button
              className={`gravity-btn ${gravityOff ? 'active' : ''}`}
              onClick={() => { onToggleGravity(); setMenuOpen(false); }}
            >
              <span className="gravity-icon">{gravityOff ? '🌍' : '🚀'}</span>
              {gravityOff ? 'Restore Gravity' : 'Zero Gravity'}
            </button>
          </li>
          <li>
            <button
              className="theme-toggle-btn"
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
