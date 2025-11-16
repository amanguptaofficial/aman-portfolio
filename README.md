# Backend Developer Portfolio

A modern, professional portfolio website for backend developers with 3D animations and a clean, minimalist design. Perfect for showcasing your skills, projects, and experience on LinkedIn and other professional platforms.

## Features

- 🎨 Modern, clean design inspired by professional portfolios
- 🎭 3D animated developer character using Three.js
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Easy to customize via JSON configuration
- 🌟 Smooth animations with Framer Motion
- 💼 Professional sections: Hero, About, Skills, Experience, Projects, Contact

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

All portfolio data is stored in `portfolio-data.json`. Simply edit this file to update:

- Personal information (name, title, contact details)
- About section
- Skills and technologies
- Work experience
- Projects
- Education and certifications
- Social media links

### Example JSON Structure

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "BACKEND DEVELOPER",
    "experience": "1.5 Years",
    "email": "your.email@example.com"
  },
  "skills": {
    "languages": ["JavaScript", "TypeScript"],
    "frameworks": ["Node.js", "Express.js"],
    "databases": ["MongoDB", "PostgreSQL"]
  }
}
```

## Portfolio Sections

1. **Header** - Navigation with name, menu, and "HIRE ME" button
2. **Hero** - Main landing section with title, description, and 3D character
3. **About** - Personal bio and statistics
4. **Skills** - Organized by categories (Languages, Frameworks, Databases, etc.)
5. **Experience** - Work history timeline
6. **Projects** - Portfolio projects with links
7. **Contact** - Contact form and social links

## 3D Character

The portfolio includes a 3D animated developer character. The current implementation uses a simple procedural 3D model. To use a custom 3D model:

1. Place your `.glb` or `.gltf` model in the `public` folder
2. Update the model path in `src/components/Developer3D.jsx`
3. The component will automatically load your model

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## Customization Tips

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Update font-family in `src/index.css`
- **Animations**: Adjust Framer Motion settings in components
- **3D Model**: Replace the simple model with your own in `Developer3D.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this portfolio for your own projects!

## Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for Backend Developers**

