# 李捷新 (Chieh-Hsin Li) - Personal Portfolio

🎓 AI Researcher | NYCU Graduate Student | Deep Learning, LLM, Medical Image Analysis

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Widget**: Live2D (stevenjoezhang/live2d-widget)
- **Deployment**: GitHub Pages
- **Icons**: React Icons

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/<USERNAME>/<USERNAME>.github.io.git
cd <USERNAME>.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Update configuration**
   - Edit `package.json`: Replace `<USERNAME>` with your GitHub username
   - Edit `vite.config.js`: Update `base` if needed

### Development

```bash
npm run dev
```

Open http://localhost:5173 to view in browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 🚢 Deployment

### Method 1: Using gh-pages (Recommended)

1. **Update package.json**
   Replace `<USERNAME>` with your GitHub username:
   ```json
   "homepage": "https://<USERNAME>.github.io/"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

   Or use the deployment script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Method 2: GitHub Actions (Automated)

GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

1. Go to your repository settings
2. Navigate to **Pages** > **Source**
3. Select **GitHub Actions**
4. Push to `main` branch to trigger deployment

## 📝 Customization

### Adding New Content

#### Add Research Projects
Edit `src/components/sections/ProjectsSection.jsx`:
```javascript
const projects = [
  {
    title: '🔹 Your Project Title',
    items: ['Description 1', 'Description 2'],
    techs: ['Tech1', 'Tech2']
  },
  // ... add more
];
```

#### Add Publications
Edit `src/components/sections/PublicationsSection.jsx`:
```javascript
const publications = [
  {
    title: 'Your Paper Title',
    venue: 'Conference/Journal Name',
    year: '2024'
  },
  // ... add more
];
```

#### Update Profile Links
Edit `src/components/sections/ProfileSection.jsx` to add your GitHub, Google Scholar, and personal website links.

### Live2D Widget Configuration

Live2D widget is automatically loaded via CDN. To customize:

1. **Position**: Edit `index.html` or `src/index.css`
2. **Model**: Modify the CDN URL in `index.html` or `src/App.jsx`

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── About.jsx          # Main component
│   │   └── sections/
│   │       ├── ProfileSection.jsx
│   │       ├── EducationSection.jsx
│   │       ├── ResearchInterests.jsx
│   │       ├── ProjectsSection.jsx
│   │       ├── PublicationsSection.jsx
│   │       └── SkillsSection.jsx
│   ├── App.jsx                # Root component (Live2D loader)
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Live2D CSS
├── index.html                 # HTML template + Live2D CDN
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # TailwindCSS configuration
├── setup.sh                   # Initial setup script
└── deploy.sh                  # Deployment script
```

## 🛠 Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 🔧 Configuration Files

### package.json
- Update `homepage` field with your GitHub Pages URL
- Adjust dependencies as needed

### vite.config.js
- `base`: Set to `/` for user pages (`<USERNAME>.github.io`)
- `base`: Set to `/<REPO>/` for project pages (`<USERNAME>.github.io/<REPO>`)

### tailwind.config.js
- Customize theme colors and extend Tailwind configuration

## 📄 License

© 2025 李捷新 (Chieh-Hsin Li). All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. However, if you find any bugs or have suggestions, feel free to open an issue.

---

Built with ❤️ using React + TailwindCSS + Live2D
