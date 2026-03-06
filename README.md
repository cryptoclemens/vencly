# Venclÿ Website

A modern, dark-themed React website clone of [vencly.com](https://www.vencly.com), built with **Vite + React + React Router**.

## ✨ Features

- **Multi-page React app** with React Router v6
- **Dark design system** with CSS Modules, design tokens & animated gradients
- **Typewriter hero** with animated rotating slogans
- **Animated counters** on scroll intersection
- **Projekte section** with sub-pages for each project (Innovation Republic, Venture Scout, KI Matchmaker, Compliance Engine)
- Responsive layout for desktop, tablet & mobile
- Accessible navigation with mobile hamburger menu

## 🗂 Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── index.css             # Global styles & design tokens
├── components/
│   ├── Nav.jsx           # Fixed navigation bar
│   ├── Nav.module.css
│   ├── Footer.jsx        # Footer with links
│   └── Footer.module.css
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── Home.module.css
│   ├── Projekte.jsx      # Projects overview
│   ├── Projekte.module.css
│   ├── ProjectDetail.jsx # Individual project page
│   └── ProjectDetail.module.css
└── data/
    └── projects.js       # Project data
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vencly-website.git
git push -u origin main

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
# "deploy": "gh-pages -d dist"
# and set: "homepage": "https://YOUR_USERNAME.github.io/vencly-website"

# 4. Deploy
npm run build && npm run deploy
```

## 🎨 Design Tokens

All colors, radii, fonts and shadows live in `src/index.css` as CSS custom properties — easy to adapt to any brand.

## 📄 License

MIT
