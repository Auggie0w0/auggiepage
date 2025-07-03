# AuggiePage - Modern React Website

A beautiful, responsive website built with React and Vite. Features modern design, smooth animations, and excellent performance.

## 🚀 Features

- **Modern React 18** with latest features
- **Vite** for lightning-fast development and builds
- **Responsive Design** that works on all devices
- **Beautiful UI** with smooth animations and transitions
- **SEO Optimized** with proper meta tags and structure
- **Accessible** following web accessibility guidelines
- **Performance Optimized** with code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Custom Properties
- **Development**: ESLint, Hot Module Replacement
- **Deployment**: Static site ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auggiepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 📁 Project Structure

```
auggiepage/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Features.jsx   # Features showcase
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer
│   ├── App.jsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the variables in `src/index.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Content
- Update text content in the component files
- Replace placeholder images with your own
- Modify contact information in `Contact.jsx`
- Update social media links in `Footer.jsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in their respective `.css` files
- The design system uses consistent spacing, typography, and colors

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🔧 Development

### Adding New Components
1. Create a new `.jsx` file in `src/components/`
2. Create a corresponding `.css` file for styles
3. Import and use in `App.jsx`

### Styling Guidelines
- Use CSS custom properties for colors and spacing
- Follow the existing naming conventions
- Include responsive design considerations
- Use semantic HTML elements

### Code Quality
- Run `npm run lint` before committing
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us through the website contact form
- Email: hello@auggiepage.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- The open-source community for inspiration and tools

---

Made with ❤️ by the AuggiePage team 