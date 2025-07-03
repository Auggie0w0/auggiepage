import React from 'react'
import './Header.css'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <span className="logo-text">AuggiePage</span>
            </a>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link" onClick={closeMenu}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-secondary">Get Started</button>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 