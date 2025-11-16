# Project Structure

```
Aman-Portfolio-web/
│
├── public/                          # Static assets
│   └── portfolio-data.json          # Portfolio data (backup)
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Header.jsx              # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.jsx                # Hero section with 3D character
│   │   ├── Hero.css
│   │   ├── Developer3D.jsx         # 3D animated developer character
│   │   ├── Developer3D.css
│   │   ├── About.jsx               # About section
│   │   ├── About.css
│   │   ├── Skills.jsx              # Skills showcase
│   │   ├── Skills.css
│   │   ├── Experience.jsx          # Work experience timeline
│   │   ├── Experience.css
│   │   ├── Projects.jsx            # Projects portfolio
│   │   ├── Projects.css
│   │   ├── Contact.jsx             # Contact form
│   │   └── Contact.css
│   │
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # App styles
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
│
├── portfolio-data.json              # ⭐ MAIN CONFIG FILE - Edit this!
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── index.html                       # HTML template
│
├── README.md                        # Full documentation
├── QUICK_START.md                   # Quick setup guide
├── PORTFOLIO_IMAGES_GUIDE.md        # Image guide
└── .gitignore                       # Git ignore rules
```

## Key Files to Edit

### 1. `portfolio-data.json` ⭐
**This is the main file you'll edit!** Contains all your:
- Personal information
- Skills
- Experience
- Projects
- Contact details

### 2. `src/index.css`
Edit CSS variables to change colors:
```css
:root {
  --primary-color: #000000;
  --accent-color: #6366f1;
  --text-color: #1a1a1a;
  --bg-color: #fafafa;
}
```

### 3. `src/components/Developer3D.jsx`
Customize the 3D character or add your own 3D model.

## Component Overview

- **Header**: Fixed navigation with logo, menu, and "HIRE ME" button
- **Hero**: Main landing section with title, description, and 3D character
- **About**: Personal bio and statistics
- **Skills**: Organized skill categories with tags
- **Experience**: Timeline of work experience
- **Projects**: Project cards with images, descriptions, and links
- **Contact**: Contact form and social media links

## Adding Images

1. Create: `public/images/projects/`
2. Add images to that folder
3. Update `portfolio-data.json` with image paths:
   ```json
   "image": "/images/projects/your-image.jpg"
   ```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool (fast!)
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

**Everything is ready to customize!** Start by editing `portfolio-data.json` 🚀

