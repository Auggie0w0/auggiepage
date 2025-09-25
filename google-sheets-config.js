// Google Sheets Configuration
// Replace these with your actual Google Sheets details

const GOOGLE_SHEETS_CONFIG = {
  // Your Google Sheets ID (found in the URL)
  SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
  
  // API Key (get from Google Cloud Console)
  API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
  
  // Sheet names/tabs in your Google Sheet
  SHEETS: {
    PERSONAL_INFO: 'Personal Info',
    SOFT_SKILLS: 'Soft Skills', 
    HARD_SKILLS: 'Hard Skills',
    OUTREACH: 'Outreach',
    EDUCATION: 'Education',
    EXPERIENCE: 'Experience',
    LEADERSHIP: 'Leadership',
    TRAINING: 'Training',
    ACHIEVEMENTS: 'Achievements',
    REFERENCES: 'References'
  }
};

// Google Sheets API endpoints
const GOOGLE_SHEETS_API = {
  BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets',
  
  // Get sheet data
  getSheetData: (sheetId, range, apiKey) => {
    return `${GOOGLE_SHEETS_API.BASE_URL}/${sheetId}/values/${range}?key=${apiKey}`;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GOOGLE_SHEETS_CONFIG, GOOGLE_SHEETS_API };
}
