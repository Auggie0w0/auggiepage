import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Welcome to <span className="highlight">AuggiePage</span>
            </h1>
            <p className="hero-subtitle fade-in">
              A modern, responsive website built with React and Vite. 
              Beautiful design meets powerful functionality.
            </p>
            <div className="hero-actions fade-in">
              <a href="#features" className="btn">
                Explore Features
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Responsive</span>
              </div>
              <div className="stat">
                <span className="stat-number">Fast</span>
                <span className="stat-label">Performance</span>
              </div>
              <div className="stat">
                <span className="stat-number">Modern</span>
                <span className="stat-label">Design</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon">🚀</div>
                <h4>Fast & Modern</h4>
                <p>Built with the latest technologies</p>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">📱</div>
                <h4>Responsive</h4>
                <p>Works perfectly on all devices</p>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎨</div>
                <h4>Beautiful</h4>
                <p>Stunning design and animations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
    </section>
  )
}

export default Hero 