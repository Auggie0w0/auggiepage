// CV Data Service - Handles fetching and processing data from Google Sheets

class CVDataService {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes cache
  }

  // Fetch data from Google Sheets
  async fetchSheetData(sheetName, range = 'A:Z') {
    const cacheKey = `${sheetName}_${range}`;
    const cached = this.cache.get(cacheKey);
    
    // Return cached data if still valid
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.config.SHEET_ID}/values/${sheetName}!${range}?key=${this.config.API_KEY}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data: data.values || [],
        timestamp: Date.now()
      });
      
      return data.values || [];
    } catch (error) {
      console.error(`Error fetching data from ${sheetName}:`, error);
      return [];
    }
  }

  // Process personal info data
  async getPersonalInfo() {
    const data = await this.fetchSheetData(this.config.SHEETS.PERSONAL_INFO);
    if (data.length === 0) return null;
    
    // Assuming first row is headers, second row is data
    const headers = data[0] || [];
    const values = data[1] || [];
    
    return {
      name: values[0] || 'August Lam',
      location: values[1] || 'North Vancouver, BC V7P 1R5',
      phone: values[2] || '(236) 965-8834',
      email: values[3] || 'yaugustLam@gmail.com'
    };
  }

  // Process list data (skills, experience, etc.)
  async getListData(sheetName) {
    const data = await this.fetchSheetData(sheetName);
    if (data.length === 0) return [];
    
    // Skip header row, return all other rows
    return data.slice(1).map(row => row[0]).filter(item => item && item.trim() !== '');
  }

  // Process experience data with more structure
  async getExperienceData() {
    const data = await this.fetchSheetData(this.config.SHEETS.EXPERIENCE);
    if (data.length === 0) return [];
    
    // Skip header row
    return data.slice(1).map(row => ({
      title: row[0] || '',
      period: row[1] || '',
      description: row[2] || '',
      fullText: row[3] || `${row[0]} (${row[1]}) – ${row[2]}`
    })).filter(item => item.title.trim() !== '');
  }

  // Process education data
  async getEducationData() {
    const data = await this.fetchSheetData(this.config.SHEETS.EDUCATION);
    if (data.length === 0) return null;
    
    const values = data[1] || [];
    return {
      school: values[0] || 'Sentinel Secondary School',
      grade: values[1] || 'Grade 12',
      period: values[2] || 'Sept 2022 – June 2025',
      address: values[3] || '1250 Chartwell Dr, West Vancouver'
    };
  }

  // Process references data
  async getReferencesData() {
    const data = await this.fetchSheetData(this.config.SHEETS.REFERENCES);
    if (data.length === 0) return [];
    
    // Skip header row
    return data.slice(1).map(row => ({
      name: row[0] || '',
      title: row[1] || '',
      email: row[2] || '',
      phone: row[3] || ''
    })).filter(ref => ref.name.trim() !== '');
  }

  // Get all CV data
  async getAllCVData() {
    try {
      const [personalInfo, softSkills, hardSkills, outreach, education, experience, leadership, training, achievements, references] = await Promise.all([
        this.getPersonalInfo(),
        this.getListData(this.config.SHEETS.SOFT_SKILLS),
        this.getListData(this.config.SHEETS.HARD_SKILLS),
        this.getListData(this.config.SHEETS.OUTREACH),
        this.getEducationData(),
        this.getExperienceData(),
        this.getListData(this.config.SHEETS.LEADERSHIP),
        this.getListData(this.config.SHEETS.TRAINING),
        this.getListData(this.config.SHEETS.ACHIEVEMENTS),
        this.getReferencesData()
      ]);

      return {
        personalInfo,
        softSkills,
        hardSkills,
        outreach,
        education,
        experience,
        leadership,
        training,
        achievements,
        references
      };
    } catch (error) {
      console.error('Error fetching CV data:', error);
      return null;
    }
  }

  // Clear cache (useful for testing or forcing refresh)
  clearCache() {
    this.cache.clear();
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CVDataService;
}
