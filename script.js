// Slide component
const Slide = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '-10% 0px' }
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
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "yaugustlam@gmail.com";
  
  const toggleEmailPopup = () => {
    setShowEmailPopup(!showEmailPopup);
    setCopySuccess(false);
    
    // Auto-hide popup after 5 seconds
    if (!showEmailPopup) {
      setTimeout(() => {
        setShowEmailPopup(false);
      }, 5000);
    }
  };
  
  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };
  
  return (
    <Slide id="welcome">
      <h1 className="slide-heading">
        Hi, I'm <span className="name-highlight" onClick={toggleEmailPopup}>August Lam</span>
      </h1>
      <h2 className="slide-subheading">Cybersecurity student. Culture & tech builder.</h2>
      <p className="slide-text">Transferring to UBC Year 2 – Cybersecurity Co-op Stream</p>
      
      {showEmailPopup && (
        <div className="email-popup">
          <button className="popup-close" onClick={toggleEmailPopup}>×</button>
          <p>
            Contact me: 
            <a href="mailto:yaugustlam@gmail.com" onClick={copyEmail}>
              {email}
            </a>
          </p>
          <div className="popup-note">
            {copySuccess ? 
              <span className="copy-success">Email copied to clipboard! ✓</span> : 
              "Click to copy or open mail client"}
          </div>
        </div>
      )}
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
      title: "CTF Challenges",
      description: "Participated in cybersecurity competitions including CyberPatriot, NCL, and PicoCTF."
    },
    {
      title: "Shadow Maze",
      description: "Side project game development with interactive gameplay mechanics."
    },
    {
      title: "Simp Gallery Website",
      description: "Web development project showcasing creative digital content."
    },
    {
      title: "Team Username Taken",
      description: "Promotional role to increase visibility and engagement for the team."
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
      <a href="CV.html" className="resume-button">View My CV</a>
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
        <a href="https://github.com/Auggie0w0" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/august-lam-b6a4a5361" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:yaugustlam@gmail.com" className="contact-link">Email</a>
        <a href="#" className="contact-link">Team Homepage (Coming Soon)</a>
      </div>
    </Slide>
  );
};

// Navigation dots component
const NavDots = ({ currentIndex, onNavigate }) => {
  const sections = ["welcome", "about", "projects", "resume", "contact"];

  return (
    <div className="nav-dots" role="navigation" aria-label="Page Navigation">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`nav-dot ${index === currentIndex ? 'active' : ''}`} 
          data-slide={section}
          onClick={() => onNavigate(index)}
          role="button"
          aria-label={`Go to ${section} section`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onNavigate(index);
            }
          }}
        />
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  const sections = ["welcome", "about", "projects", "resume", "contact"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  
  // Function to navigate to a section
  const navigateToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSectionIndex(index);
      document.getElementById(sections[index]).scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Initialize the first dot as active
    document.querySelector('.nav-dot[data-slide="welcome"]').classList.add('active');
    
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigateToSection(currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSection(currentSectionIndex - 1);
      }
    };
    
    // Add wheel event handling for more controlled scrolling
    let wheelTimeout;
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Clear any existing timeout
      clearTimeout(wheelTimeout);
      
      // Set a timeout to prevent rapid scrolling
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          navigateToSection(currentSectionIndex + 1);
        } else {
          navigateToSection(currentSectionIndex - 1);
        }
      }, 100);
    };
    
    const appContainer = document.querySelector('.app-container');
    appContainer.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    // Update the active section based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll('.slide');
      let newIndex = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newIndex = index;
        }
      });
      
      if (newIndex !== currentSectionIndex) {
        setCurrentSectionIndex(newIndex);
      }
    };
    
    appContainer.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      appContainer.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      appContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(wheelTimeout);
    };
  }, [currentSectionIndex]);

  return (
    <div className="app-container">
      <Welcome />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <NavDots currentIndex={currentSectionIndex} onNavigate={navigateToSection} />
    </div>
  );
};

// React hooks
const { useState, useEffect, useRef } = React;

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
