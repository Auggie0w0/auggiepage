import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Vite for instant hot reload and blazing fast builds.',
      color: 'primary'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfect experience across all devices, from mobile to desktop.',
      color: 'secondary'
    },
    {
      icon: '🎨',
      title: 'Modern UI',
      description: 'Beautiful, accessible design with smooth animations and interactions.',
      color: 'accent'
    },
    {
      icon: '🔧',
      title: 'Easy to Customize',
      description: 'Well-structured codebase that\'s easy to modify and extend.',
      color: 'primary'
    },
    {
      icon: '🚀',
      title: 'SEO Optimized',
      description: 'Built with SEO best practices and performance in mind.',
      color: 'secondary'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Follows security best practices and modern web standards.',
      color: 'accent'
    }
  ]

  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle">
            Discover what makes our website stand out from the rest
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`feature-icon badge-${feature.color}`}>
                <span className="icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta text-center">
          <a href="#contact" className="btn">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features 