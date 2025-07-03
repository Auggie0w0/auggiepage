import React from 'react'
import './About.css'

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to code quality.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together with our clients to achieve the best possible results.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve problems.'
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About AuggiePage</h2>
              <p className="section-subtitle">
                We're passionate about creating beautiful, functional websites that help businesses grow and succeed in the digital world.
              </p>
            </div>
            
            <div className="about-description">
              <p>
                Founded with a vision to make web development accessible and beautiful, 
                AuggiePage combines cutting-edge technology with timeless design principles. 
                Our team of experienced developers and designers work together to create 
                websites that not only look great but also perform exceptionally well.
              </p>
              <p>
                We believe that every business deserves a website that reflects their 
                brand and helps them achieve their goals. That's why we focus on creating 
                custom solutions that are tailored to each client's unique needs.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-text">Team Photo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title text-center">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card text-center">
                <div className="value-icon">
                  <span className="icon">{value.icon}</span>
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 