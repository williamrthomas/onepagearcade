# One-Page Arcade

A curated collection of single-file web applications showcasing the power of vanilla HTML, CSS, and JavaScript.

## 🎮 What is This?

One-Page Arcade is a showcase of browser-native experiences—no installs, no frameworks, no servers. Each game is a self-contained HTML file demonstrating constraint-based creativity and educational value.

## 📁 Project Structure

```
site/
├── index.html          # Main showcase page
├── styles.css          # Global styles
├── main.js             # Game loader & modal logic
├── games.json          # Game metadata
├── games/              # Individual game files
│   ├── g01-fractal-flame.html
│   └── ...
└── vercel.json         # Deployment config
```

## 🚀 Local Development

Since this is a JAMstack site with vanilla JS, you can run it with any static server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📦 Adding New Games

1. Create your single-file HTML game in `games/`
2. Add metadata to `games.json`:

```json
{
  "id": "g03",
  "title": "Your Game",
  "category": "games",
  "description": "Brief description",
  "playTime": "5-10 min",
  "file": "/games/g03-your-game.html"
}
```

3. The game will automatically appear in the showcase

## 🎨 Categories

- **Art** - Generative art, drawing tools, creative toys
- **Music** - Sequencers, synthesizers, audio experiments
- **Games** - Puzzles, arcade classics, interactive fiction
- **Utilities** - Color pickers, visualizers, productivity tools
- **Learning** - Algorithm visualizations, educational demos

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd site
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🎯 Philosophy

This project embraces:
- **Constraint-based creativity** - Rich experiences with minimal dependencies
- **Educational value** - Learn through play and exploration
- **Immediate accessibility** - No installation barriers
- **Artifact generation** - Create tangible outputs to save and share

## 📝 Game Template

Use `/templates/singlepage-template.html` as a starting point for new games. It includes:
- Modern dark UI with controls panel
- Parameter save/load system
- PNG export functionality
- Responsive layout

## 🙏 Credits

Inspired by the research in `/data/onepagearcade.md` - a catalog of 23 exemplary single-file applications that demonstrate the full potential of vanilla web technologies.

Built with vanilla HTML, CSS, and JavaScript. No build step required.

---

**by gumdrop** · [gumdrop.me](https://gumdrop.me)
