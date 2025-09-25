// Dynamic CV Component - Fetches data from Google Sheets and displays with website styling

class DynamicCV {
  constructor(config) {
    this.config = config;
    this.dataService = new CVDataService(config);
    this.isLoading = false;
    this.error = null;
  }

  // Initialize the dynamic CV
  async init() {
    const cvContainer = document.querySelector('.cv-container');
    if (!cvContainer) {
      console.error('CV container not found');
      return;
    }

    // Show loading state
    this.showLoading(cvContainer);

    try {
      // Fetch data from Google Sheets
      const cvData = await this.dataService.getAllCVData();
      
      if (cvData) {
        // Render the CV with fetched data
        this.renderCV(cvContainer, cvData);
      } else {
        // Show error state
        this.showError(cvContainer, 'Failed to load CV data from Google Sheets');
      }
    } catch (error) {
      console.error('Error initializing dynamic CV:', error);
      this.showError(cvContainer, 'Error loading CV data. Please check your Google Sheets configuration.');
    }
  }

  // Show loading state
  showLoading(container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 1.2rem; color: var(--blue-accent); margin-bottom: 1rem;">
          Loading CV data...
        </div>
        <div style="width: 40px; height: 40px; border: 3px solid var(--text-color); border-top: 3px solid var(--blue-accent); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  // Show error state
  showError(container, message) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 1.2rem; color: #e74c3c; margin-bottom: 1rem;">
          ⚠️ ${message}
        </div>
        <button onclick="location.reload()" style="
          background-color: var(--blue-accent);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        ">Retry</button>
      </div>
    `;
  }

  // Render the complete CV
  renderCV(container, data) {
    const { personalInfo, softSkills, hardSkills, outreach, education, experience, leadership, training, achievements, references } = data;

    container.innerHTML = `
      ${this.renderPersonalInfo(personalInfo)}
      ${this.renderSection('Soft Skills', softSkills)}
      ${this.renderSection('Hard Skills', hardSkills)}
      ${this.renderSection('Outreach', outreach)}
      ${this.renderEducation(education)}
      ${this.renderExperience(experience)}
      ${this.renderSection('Leadership & Clubs', leadership)}
      ${this.renderSection('Training', training)}
      ${this.renderSection('Achievements', achievements)}
      ${this.renderReferences(references)}
      ${this.renderBackButton()}
    `;
  }

  // Render personal information
  renderPersonalInfo(personalInfo) {
    if (!personalInfo) return '';
    
    return `
      <h1>${personalInfo.name}</h1>
      <p class="contact">
        ${personalInfo.location} · ${personalInfo.phone} · <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
      </p>
    `;
  }

  // Render a simple list section
  renderSection(title, items) {
    if (!items || items.length === 0) return '';
    
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    
    return `
      <h2>${title}</h2>
      <ul>
        ${listItems}
      </ul>
    `;
  }

  // Render education section
  renderEducation(education) {
    if (!education) return '';
    
    return `
      <h2>Education</h2>
      <p><strong>${education.school}</strong> (${education.grade}) · ${education.period}<br/>${education.address}</p>
    `;
  }

  // Render experience section
  renderExperience(experience) {
    if (!experience || experience.length === 0) return '';
    
    const experienceItems = experience.map(item => 
      `<li><strong>${item.title}</strong> (${item.period}) – ${item.description}</li>`
    ).join('');
    
    return `
      <h2>Experience & Volunteering</h2>
      <ul>
        ${experienceItems}
      </ul>
    `;
  }

  // Render references section
  renderReferences(references) {
    if (!references || references.length === 0) return '';
    
    const referenceItems = references.map(ref => 
      `<p><strong>${ref.name}</strong> – ${ref.title}<br/>
      Email: <a href="mailto:${ref.email}">${ref.email}</a> · Phone: ${ref.phone}</p>`
    ).join('');
    
    return `
      <h2>References</h2>
      ${referenceItems}
    `;
  }

  // Render back button
  renderBackButton() {
    return `
      <div style="text-align: center; margin-top: 3rem;">
        <a href="index.html" class="back-button" style="color: #FFFFFF !important;">Back to Portfolio</a>
      </div>
    `;
  }

  // Refresh data (useful for manual refresh)
  async refresh() {
    this.dataService.clearCache();
    await this.init();
  }
}

// Fallback static CV content (your original CV)
const STATIC_CV_CONTENT = `
  <h1>Yu (August) Lam</h1>
  <p class="contact">
    North Vancouver, BC V7P 1R5 · (236) 965-8834 · <a href="mailto:yaugustLam@gmail.com">yaugustLam@gmail.com</a>
  </p>

  <h2>Soft Skills</h2>
  <ul>
    <li>Responsive and communicative</li>
    <li>Gregarious team member</li>
    <li>Enthusiastic and eager to learn</li>
  </ul>

  <h2>Hard Skills</h2>
  <ul>
    <li>Programming experience</li>
    <li>Multilingual – English, Mandarin, French</li>
  </ul>

  <h2>Outreach</h2>
  <ul>
    <li>Social media management</li>
    <li>Graphic design & video editing</li>
  </ul>

  <h2>Education</h2>
  <p><strong>Sentinel Secondary School</strong> (Grade 12) · Sept 2022 – June 2025<br/>1250 Chartwell Dr, West Vancouver</p>

  <h2>Experience & Volunteering</h2>
  <ul>
    <li><strong>Feed the Need</strong> (May – Oct 2022) – Gift preparation for families in need</li>
    <li><strong>Teen Advisory Group</strong> (TAG, Apr 2022 – Jan 2023) – Library visual content creator</li>
    <li><strong>Room 14 Graphics</strong> (Dec 2023 – Present) – Monthly graphic design group</li>
    <li><strong>Harmony Arts Festival</strong> (2022–2024) – Art engagement & youth leadership</li>
    <li><strong>CHAMP</strong> (2022–2024) – Metro Vancouver Youth4Action climate project</li>
    <li><strong>Otaku Club Lead</strong> (2021–Present) – Founder and president of anime club</li>
    <li><strong>CyberPatriot XVII</strong> (2024–2025) – National finalist (Platinum Ranking)</li>
    <li><strong>CyberTitan</strong> (2025) – 2nd place in Canada</li>
    <li><strong>Young Defenders of the North</strong> (2025) – 1st Place Cybersecurity Hackathon</li>
  </ul>

  <h2>Leadership & Clubs</h2>
  <ul>
    <li>REVOLVE STEM Club Exec – Public speaking, content design</li>
    <li>French Immersion Committee – Francophone culture outreach</li>
    <li>Intergenerational Youth Committee – Crafts, presentations, planning</li>
    <li>Model United Nations – Delegate & staff (2023–2025, 10+ conferences)</li>
    <li>Music Program Instagram – Founder of Sentinel Music Promo Team</li>
    <li>Whatever Youth Committee – LGBTQ+ awareness & youth hub projects</li>
  </ul>

  <h2>Training</h2>
  <ul>
    <li>CyberSafe Certified – Justice Education Society of BC (2023)</li>
    <li>Red Cross Swim Kids 9 · Babysitting · Karate (6th kyu)</li>
    <li>FoodSafe Level 1 · Volunteer Training · CyberPatriot XVI (Gold)</li>
  </ul>

  <h2>Achievements</h2>
  <ul>
    <li>GirlsB4Girls Award · Sentinel Honour Rolls (Gr 8–10)</li>
    <li>Sentinel STEM Fellowship · Theatre Platinum Apprentice</li>
    <li>West Vancouver Youth Appreciation (2023, 2024)</li>
    <li>Rock Ridge Debate Finalist · Sentinel Iron Chef – 1st Place</li>
    <li>SMUN Outstanding Delegate (2024)</li>
    <li>NCL Spring 2025 Team – 99th Percentile (4,779 teams)</li>
  </ul>

  <h2>References</h2>
  <p><strong>Mahesh Chugani</strong> – SD45 Instructor<br/>
  Email: <a href="mailto:MChugani@wvschools.ca">MChugani@wvschools.ca</a> · Phone: 604-981-1100</p>
  <p><strong>Jennifer Winning</strong> – Executive Director of Artisan Farmers Market Society<br/>
  Email: <a href="mailto:communications@artisanmarkets.ca">communications@artisanmarkets.ca</a> · Phone: 778-751-3945</p>
  
  <div style="text-align: center; margin-top: 3rem;">
    <a href="index.html" class="back-button" style="color: #FFFFFF !important;">Back to Portfolio</a>
  </div>
`;

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Check if we're on the CV page
  if (document.querySelector('.cv-container')) {
    const cvContainer = document.querySelector('.cv-container');
    
    // Load configuration
    const config = window.GOOGLE_SHEETS_CONFIG;
    
    // Check if configuration is properly set up
    if (!config || !config.SHEET_ID || config.SHEET_ID === 'YOUR_GOOGLE_SHEET_ID_HERE' || !config.API_KEY || config.API_KEY === 'YOUR_GOOGLE_API_KEY_HERE') {
      console.warn('Google Sheets configuration not found or not set up. Using static CV.');
      cvContainer.innerHTML = STATIC_CV_CONTENT;
      return;
    }
    
    try {
      // Initialize dynamic CV
      const dynamicCV = new DynamicCV(config);
      await dynamicCV.init();
      
      // Make refresh function available globally
      window.refreshCV = () => dynamicCV.refresh();
    } catch (error) {
      console.error('Failed to initialize dynamic CV, falling back to static content:', error);
      cvContainer.innerHTML = STATIC_CV_CONTENT;
    }
  }
});
