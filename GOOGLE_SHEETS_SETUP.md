# Google Sheets Integration Setup Guide

This guide will help you set up your Google Sheets to work with your dynamic CV website.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "August Lam CV Data" (or any name you prefer)
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
15d665Wd0qXzRChLA13E7vCBm45fMuuiB3mTC9i-nZhM

## Step 2: Set Up Your Sheet Structure

Create the following tabs in your Google Sheet:

### Tab 1: "Personal Info"
| Name            | Location                    | Phone          | Email                |
| --------------- | --------------------------- | -------------- | -------------------- |
| Yu (August) Lam | North Vancouver, BC V7P 1R5 | (236) 965-8834 | yaugustLam@gmail.com |

### Tab 2: "Soft Skills"
| Skill                           |
| ------------------------------- |
| Responsive and communicative    |
| Gregarious team member          |
| Enthusiastic and eager to learn |

### Tab 3: "Hard Skills"
| Skill                                    |
| ---------------------------------------- |
| Programming experience                   |
| Multilingual – English, Mandarin, French |

### Tab 4: "Outreach"
| Skill                          |
| ------------------------------ |
| Social media management        |
| Graphic design & video editing |

### Tab 5: "Education"
| School                    | Grade    | Period                | Address                           |
| ------------------------- | -------- | --------------------- | --------------------------------- |
| Sentinel Secondary School | Grade 12 | Sept 2022 – June 2025 | 1250 Chartwell Dr, West Vancouver |

### Tab 6: "Experience"
| Title                        | Period              | Description                                  |
| ---------------------------- | ------------------- | -------------------------------------------- |
| Feed the Need                | May – Oct 2022      | Gift preparation for families in need        |
| Teen Advisory Group (TAG)    | Apr 2022 – Jan 2023 | Library visual content creator               |
| Room 14 Graphics             | Dec 2023 – Present  | Monthly graphic design group                 |
| Harmony Arts Festival        | 2022–2024           | Art engagement & youth leadership            |
| CHAMP                        | 2022–2024           | Metro Vancouver Youth4Action climate project |
| Otaku Club Lead              | 2021–Present        | Founder and president of anime club          |
| CyberPatriot XVII            | 2024–2025           | National finalist (Platinum Ranking)         |
| CyberTitan                   | 2025                | 2nd place in Canada                          |
| Young Defenders of the North | 2025                | 1st Place Cybersecurity Hackathon            |

### Tab 7: "Leadership"
| Leadership Role                                                      |
| -------------------------------------------------------------------- |
| REVOLVE STEM Club Exec – Public speaking, content design             |
| French Immersion Committee – Francophone culture outreach            |
| Intergenerational Youth Committee – Crafts, presentations, planning  |
| Model United Nations – Delegate & staff (2023–2025, 10+ conferences) |
| Music Program Instagram – Founder of Sentinel Music Promo Team       |
| Whatever Youth Committee – LGBTQ+ awareness & youth hub projects     |

### Tab 8: "Training"
| Training                                                        |
| --------------------------------------------------------------- |
| CyberSafe Certified – Justice Education Society of BC (2023)    |
| Red Cross Swim Kids 9 · Babysitting · Karate (6th kyu)          |
| FoodSafe Level 1 · Volunteer Training · CyberPatriot XVI (Gold) |

### Tab 9: "Achievements"
| Achievement                                                 |
| ----------------------------------------------------------- |
| GirlsB4Girls Award · Sentinel Honour Rolls (Gr 8–10)        |
| Sentinel STEM Fellowship · Theatre Platinum Apprentice      |
| West Vancouver Youth Appreciation (2023, 2024)              |
| Rock Ridge Debate Finalist · Sentinel Iron Chef – 1st Place |
| SMUN Outstanding Delegate (2024)                            |
| NCL Spring 2025 Team – 99th Percentile (4,779 teams)        |

### Tab 10: "References"
| Name             | Title                                                | Email                            | Phone        |
| ---------------- | ---------------------------------------------------- | -------------------------------- | ------------ |
| Mahesh Chugani   | SD45 Instructor                                      | MChugani@wvschools.ca            | 604-981-1100 |
| Jennifer Winning | Executive Director of Artisan Farmers Market Society | communications@artisanmarkets.ca | 778-751-3945 |

## Step 3: Get Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

## Step 4: Configure Your Website

1. Open `google-sheets-config.js`
2. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
3. Replace `YOUR_GOOGLE_API_KEY_HERE` with your actual API Key

## Step 5: Make Your Sheet Public (Optional but Recommended)

For better performance and to avoid API quotas:

1. In your Google Sheet, click "Share"
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the link

## Step 6: Test Your Setup

1. Open your CV.html page
2. Check the browser console for any errors
3. Your CV should now load data from Google Sheets!

## Troubleshooting

### Common Issues:

1. **"Failed to load CV data"**: Check your API key and Sheet ID
2. **"HTTP error! status: 403"**: Your API key might not have permission, or the sheet is private
3. **"HTTP error! status: 404"**: Check your Sheet ID
4. **Empty data**: Make sure your sheet tabs are named exactly as specified

### Debug Mode:

Open browser console (F12) to see detailed error messages.

## Security Notes

- Never commit your API key to public repositories
- Consider using environment variables for production
- The current setup uses a public API key - this is fine for read-only access to public sheets

## Customization

You can modify the sheet structure by:
1. Updating the `SHEETS` object in `google-sheets-config.js`
2. Modifying the data processing functions in `cv-data-service.js`
3. Adjusting the rendering functions in `dynamic-cv.js`

## Benefits

- ✅ Real-time updates when you edit your Google Sheet
- ✅ Maintains your website's beautiful styling
- ✅ No need to manually update HTML
- ✅ Easy to manage and edit your CV data
- ✅ Automatic caching for better performance
- ✅ Fallback to static content if Google Sheets is unavailable
