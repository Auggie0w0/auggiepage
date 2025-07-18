// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Initialize all functions
    initNavigation();
    initThemeToggle();
    initContactForm();
    initScrollEffects();
});

// Smooth scrolling navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Theme toggle functionality
function initThemeToggle() {
    // Create theme toggle button
    const header = document.querySelector('header');
    const themeBtn = document.createElement('button');
    themeBtn.textContent = '🌙 Dark Mode';
    themeBtn.id = 'theme-toggle';
    themeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 8px 16px;
        background: #fff;
        color: #000;
        border: 2px solid #000;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    `;
    
    header.style.position = 'relative';
    header.appendChild(themeBtn);
    
    let isDarkMode = false;
    
    themeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#333';
                section.style.color = '#fff';
                section.style.borderColor = '#555';
            });
            this.textContent = '☀️ Light Mode';
            this.style.background = '#333';
            this.style.color = '#fff';
            this.style.borderColor = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#fafafa';
                section.style.color = '#555';
                section.style.borderColor = '#ddd';
            });
            this.textContent = '🌙 Dark Mode';
            this.style.background = '#fff';
            this.style.color = '#000';
            this.style.borderColor = '#000';
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactSection = document.getElementById('contact');
    const contactContent = contactSection.innerHTML;
    
    // Create a simple contact form
    const formHTML = `
        <h2>Contact</h2>
        <form id="contact-form">
            <div style="margin-bottom: 1rem;">
                <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Name:</label>
                <input type="text" id="name" name="name" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Email:</label>
                <input type="email" id="email" name="email" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Message:</label>
                <textarea id="message" name="message" rows="4" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; resize: vertical;"></textarea>
            </div>
            <button type="submit" style="background: #000; color: #fff; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Send Message</button>
        </form>
        <div id="form-message" style="margin-top: 1rem; padding: 10px; border-radius: 4px; display: none;"></div>
    `;
    
    contactSection.innerHTML = formHTML;
    
    // Handle form submission
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        messageDiv.style.display = 'block';
        messageDiv.style.background = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
        messageDiv.innerHTML = `
            <strong>Thank you, ${name}!</strong><br>
            Your message has been received. We'll get back to you at ${email} soon.
        `;
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    });
}

// Scroll effects
function initScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('header');
        
        // Add shadow to header on scroll
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Animate sections on scroll
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollTop >= sectionTop - window.innerHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
        
        lastScrollTop = scrollTop;
    });
    
    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Utility function to show current time
function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log('Current time:', timeString);
    return timeString;
}

// Example of a simple counter function
let clickCount = 0;
function incrementCounter() {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
    return clickCount;
}

// Export functions for potential use in console
window.showCurrentTime = showCurrentTime;
window.incrementCounter = incrementCounter;
