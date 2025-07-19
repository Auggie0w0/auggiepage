// Slide component
const Slide = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Update active dot
          document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.classList.remove('active');
          });
          document.querySelector(`.nav-dot[data-slide="${id}"]`).classList.add('active');
        }
      },
      { threshold: 0.5 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, [id]);

  return (
    <section id={id} className="slide" ref={slideRef}>
      <div className={`slide-content ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

// Welcome component
const Welcome = () => {
  return (
    <Slide id="welcome">
      <h1 className="slide-heading">Hi, I'm <span className="highlight">August Lam</span></h1>
      <h2 className="slide-subheading">Cybersecurity student. Culture & tech builder.</h2>
      <p className="slide-text">Transferring to UBC Year 2 – Cybersecurity Co-op Stream</p>
    </Slide>
  );
};

// About component
const About = () => {
  return (
    <Slide id="about">
      <h2 className="slide-heading">About Me</h2>
      <div className="slide-text">
        <p>I love language, leading people, and building safe and creative systems.</p>
        <p>I'm a team player, gregarious, and an electric unicycle rider.</p>
        <p>My interests include anime, music, languages, and alternative transportation.</p>
      </div>
    </Slide>
  );
};

// Projects component
const Projects = () => {
  const projects = [
    {
      title: "CyberPatriot/NCL/PicoCTF Challenges",
      description: "Participated in various cybersecurity competitions and challenges."
    },
    {
      title: "Interactive Games",
      description: "Currently in development - creating interactive gaming experiences."
    },
    {
      title: "Francophonie Fest",
      description: "Event work and coordination for cultural celebrations."
    },
    {
      title: "Music Program IG Team",
      description: "Managing and creating content for music program social media."
    }
  ];

  return (
    <Slide id="projects">
      <h2 className="slide-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
};

// Resume component
const Resume = () => {
  return (
    <Slide id="resume">
      <h2 className="slide-heading">Resume</h2>
      <p className="slide-text">Currently open for co-op opportunities and internships.</p>
      <div>
        <h3>Key Experiences</h3>
        <ul style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "20px" }}>
          <li>Cybersecurity Competition Participant</li>
          <li>Event Coordination</li>
          <li>Team Leadership</li>
        </ul>
      </div>
      <a href="#" className="resume-button">View My CV</a>
    </Slide>
  );
};

// Contact component
const Contact = () => {
  return (
    <Slide id="contact">
      <h2 className="slide-heading">Contact</h2>
      <p className="slide-text">Let's connect! Reach out to me through any of these platforms.</p>
      <div className="contact-links">
        <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/august-lam-b6a4a5361" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:email@example.com" className="contact-link">Email</a>
        <a href="#" className="contact-link">Team Homepage (Coming Soon)</a>
      </div>
    </Slide>
  );
};

// Navigation dots component
const NavDots = () => {
  const sections = ["welcome", "about", "projects", "resume", "contact"];
  
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav-dots" role="navigation" aria-label="Page Navigation">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`nav-dot ${index === 0 ? 'active' : ''}`} 
          data-slide={section}
          onClick={() => scrollToSection(section)}
          role="button"
          aria-label={`Go to ${section} section`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToSection(section);
            }
          }}
        />
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  useEffect(() => {
    // Initialize the first dot as active
    document.querySelector('.nav-dot[data-slide="welcome"]').classList.add('active');
  }, []);

  return (
    <div className="app-container">
      <Welcome />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <NavDots />
    </div>
  );
};

// React hooks
const { useState, useEffect, useRef } = React;

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
