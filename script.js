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

// Terminal cursor component for nerdy-cute effect
const TerminalCursor = () => {
  return <span className="terminal-cursor">_</span>;
};

// Welcome component
const Welcome = () => {
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const popupTimerRef = useRef(null);
  
  const openPhotoPopup = () => {
    setShowPhotoPopup(true);
    
    // Set timer to auto-close after 5 seconds
    popupTimerRef.current = setTimeout(() => {
      setShowPhotoPopup(false);
    }, 5000);
  };
  
  // Close popup when clicking anywhere or pressing any key
  const closePopup = () => {
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }
    setShowPhotoPopup(false);
  };
  
  // Add key press event listener when popup is open
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showPhotoPopup) {
        closePopup();
      }
    };
    
    if (showPhotoPopup) {
      window.addEventListener('keydown', handleKeyPress);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, [showPhotoPopup]);
  
  return (
    <Slide id="welcome">
      <h1 className="slide-heading">
        &gt; Hi, I'm <span className="name-highlight" onClick={openPhotoPopup}>August Lam</span><TerminalCursor />
      </h1>
      <h2 className="slide-subheading">&gt;&gt; Cybersecurity student. Culture & tech builder.</h2>
      <p className="slide-text">&gt;&gt;&gt; Transferred to UBC Year 2 – Computer Science | Cybersecurity Stream</p>
      
      {showPhotoPopup && (
        <div 
          className="photo-overlay" 
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-title"
        >
          <div className="photo-popup">
            <button 
              className="popup-close" 
              onClick={closePopup}
              aria-label="Close photo"
            >
              ×
            </button>
            <img 
              src="me.jpg" 
              alt="August Lam" 
              className="profile-photo" 
              title="Press any key or click anywhere to close"
            />
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
      <h2 className="slide-heading">&gt; About_Me</h2>
      <div className="slide-text">
        <p>&gt;&gt; I love language, leading people, and building safe and creative systems.</p>
        <p>&gt;&gt; I'm a team player, gregarious, and an electric unicycle rider.</p>
        <p>&gt;&gt; My interests include anime, music, languages, and grinding away at CTFs.</p>
      </div>
    </Slide>
  );
};

// Projects component
const Projects = () => {
  const projects = [
    {
      title: "CTF_Challenges",
      description: "Participated in cybersecurity competitions including CyberPatriot, NCL, and PicoCTF.",
      link: null
    },
    {
      title: "Shadow_Maze",
      description: "Side project game development with interactive gameplay mechanics.",
      link: "https://shadow-escape.vercel.app/"
    },
    {
      title: "Simp_Gallery_Website",
      description: "Web development project showcasing creative digital content.",
      link: "https://personal-simp-site.vercel.app/"
    },
    {
      title: "Team_Username_Taken",
      description: "Promotional role to increase visibility and engagement for the team.",
      link: null
    }
  ];

  return (
    <Slide id="projects">
      <h2 className="slide-heading">&gt; Projects[]</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.link ? (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">&gt;&gt; {project.title}</h3>
                <p>&gt;&gt;&gt; {project.description}</p>
                <div className="project-visit">visit(project) →</div>
              </a>
            ) : (
              <>
                <h3 className="project-title">&gt;&gt; {project.title}</h3>
                <p>&gt;&gt;&gt; {project.description}</p>
              </>
            )}
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
      <h2 className="slide-heading">&gt; Resume.txt</h2>
      <p className="slide-text">&gt;&gt; Currently open for co-op opportunities and internships.</p>
      <div>
        <h3>&gt;&gt; Key_Experiences:</h3>
        <ul style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "20px" }}>
          <li>&gt;&gt;&gt; Cybersecurity Competition Participant</li>
          <li>&gt;&gt;&gt; Event Coordination</li>
          <li>&gt;&gt;&gt; Team Leadership</li>
        </ul>
      </div>
      <a href="CV.html" className="resume-button">&gt; View_CV()</a>
    </Slide>
  );
};

// Contact component
const Contact = () => {
  const contactCards = [
    {
      title: "GitHub",
      icon: "👨‍💻",
      link: "https://github.com/Auggie0w0",
      description: "Check out my code repositories"
    },
    {
      title: "LinkedIn",
      icon: "🔗",
      link: "https://www.linkedin.com/in/august-lam-b6a4a5361",
      description: "Connect with me professionally"
    },
    {
      title: "Email",
      icon: "📧",
      link: "mailto:yaugustlam@gmail.com",
      description: "yaugustlam@gmail.com"
    },
    {
      title: "Team Homepage",
      icon: "🏠",
      link: "#",
      description: "Coming Soon"
    },
    {
      title: "SoundCloud",
      icon: "🎵",
      link: "https://soundcloud.com/augg0w0",
      description: "Listen to my music"
    }
  ];

  return (
    <Slide id="contact">
      <h2 className="slide-heading">&gt; Contact.connect()</h2>
      <p className="slide-text">&gt;&gt; Let's connect! Reach out to me through any of these platforms.</p>
      <div className="contact-cards">
        {contactCards.map((card, index) => (
          <a 
            href={card.link} 
            className="contact-card" 
            key={index}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="contact-card-icon">{card.icon}</div>
            <h3 className="contact-card-title">&gt;&gt; {card.title}</h3>
            <p className="contact-card-description">&gt;&gt;&gt; {card.description}</p>
          </a>
        ))}
      </div>
    </Slide>
  );
};

// Navigation dots component
const NavDots = ({ currentIndex, onNavigate }) => {
  const sections = ["welcome", "about", "projects", "resume", "contact"];
  const sectionNames = ["Home", "About_Me", "Projects[]", "Resume.txt", "Contact.connect()"];
  const [showLabels, setShowLabels] = useState(false);
  
  // Toggle labels visibility on hover
  const handleMouseEnter = () => setShowLabels(true);
  const handleMouseLeave = () => setShowLabels(false);

  return (
    <div 
      className="nav-dots" 
      role="navigation" 
      aria-label="Page Navigation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`nav-dot-container ${index === currentIndex ? 'active' : ''}`}
        >
          {showLabels && (
            <span className="nav-dot-label">{sectionNames[index]}</span>
          )}
          <div
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`} 
            data-slide={section}
            onClick={() => onNavigate(index)}
            role="button"
            aria-label={`Go to ${sectionNames[index]} section`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onNavigate(index);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  const sections = ["welcome", "about", "projects", "resume", "contact"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLandscape, setIsLandscape] = useState(window.innerHeight < window.innerWidth);
  
  // Function to navigate to a section with reduced delay
  const navigateToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSectionIndex(index);
      // Use a faster scroll behavior
      document.getElementById(sections[index]).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Function for instant navigation (no animation)
  const navigateInstantly = (index) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSectionIndex(index);
      // Use instant navigation without animation
      document.getElementById(sections[index]).scrollIntoView({ 
        behavior: 'auto',
        block: 'start'
      });
    }
  };
  
  useEffect(() => {
    // Initialize the first dot as active
    document.querySelector('.nav-dot[data-slide="welcome"]').classList.add('active');
    
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigateInstantly(currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateInstantly(currentSectionIndex - 1);
      }
    };
    
    // Handle resize events for responsive behavior
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLandscape(window.innerHeight < window.innerWidth);
    };
    
    // Add wheel event handling for more controlled scrolling
    let wheelTimeout;
    const handleWheel = (e) => {
      // Don't prevent default scrolling on mobile or in landscape mode on small screens
      if (isMobile || (isLandscape && window.innerHeight <= 500)) {
        return;
      }
      
      e.preventDefault();
      
      // Clear any existing timeout
      clearTimeout(wheelTimeout);
      
      // Set a timeout to prevent rapid scrolling - reduced from 100ms to 50ms
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          navigateToSection(currentSectionIndex + 1);
        } else {
          navigateToSection(currentSectionIndex - 1);
        }
      }, 50);
    };
    
    const appContainer = document.querySelector('.app-container');
    
    // Only add wheel event listener for non-mobile devices
    if (!isMobile) {
      appContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    
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
    
    // Initial check
    handleResize();
    
    // Cleanup
    return () => {
      if (!isMobile) {
        appContainer.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      appContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(wheelTimeout);
    };
  }, [currentSectionIndex, isMobile, isLandscape]);

  return (
    <div className="app-container">
      <a href="CV.html" className="cv-corner-button" aria-label="View CV">CV</a>
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
