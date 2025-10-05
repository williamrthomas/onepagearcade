# One-Page Arcade

A curated collection of single-file web applications showcasing the power of vanilla HTML, CSS, and JavaScript.

## 🎮 Live Games

- **G01: Fractal Flame Sketcher** (Art) - Create stunning mathematical art through chaos algorithms
- **G03: 2048** (Games) - Classic tile-merging puzzle with smooth animations
- **U01: Color Palette Generator** (Utilities) - Generate harmonious color palettes based on color theory
- **L01: Sorting Visualizer** (Learning) - Watch sorting algorithms execute step-by-step

More games coming soon!

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/one-page-arcade.git
cd one-page-arcade

# Serve locally (any static server works)
cd site
python3 -m http.server 8000
# or
npx serve
```

Visit `http://localhost:8000`

## 📦 Project Structure

```
/
├── site/                    # Main application (deploy this)
│   ├── index.html          # Showcase homepage
│   ├── styles.css          # Global styles
│   ├── main.js             # Game loader
│   ├── games.json          # Game metadata
│   ├── games/              # Individual game files
│   │   ├── g01-fractal-flame.html
│   │   ├── g03-2048.html
│   │   ├── u01-color-palette.html
│   │   └── l01-sorting-visualizer.html
│   └── vercel.json         # Deployment config
│
└── templates/              # Game development templates
    └── singlepage-template.html
```

## 🌐 Deploy to Vercel

1. **Via Vercel Dashboard:**
   - Import this repository
   - Set **Root Directory** to `site`
   - Deploy!

2. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   cd site
   vercel --prod
   ```

## 🎨 Adding New Games

1. Use `/templates/singlepage-template.html` as a starting point
2. Build your game in a single HTML file
3. Save to `/site/games/gXX-gamename.html`
4. Add metadata to `/site/games.json`:

```json
{
  "id": "gXX",
  "title": "Your Game",
  "category": "games",
  "description": "Brief description",
  "playTime": "5-10 min",
  "file": "/games/gXX-gamename.html",
  "featured": true
}
```

5. The game appears automatically on the showcase!

## 🎯 Categories

- **Art** - Generative art, drawing tools, creative toys
- **Music** - Sequencers, synthesizers, audio experiments  
- **Games** - Puzzles, arcade classics, interactive experiences
- **Utilities** - Color tools, visualizers, productivity helpers
- **Learning** - Algorithm demos, educational visualizations

## 🧩 Philosophy

This project embraces:
- **Constraint-based creativity** - Rich experiences with minimal dependencies
- **Immediate accessibility** - No installation, builds, or backends
- **Educational value** - Learn through play and exploration
- **Artifact generation** - Create tangible outputs to save and share

## 🛠️ Tech Stack

- Pure vanilla HTML5, CSS3, and JavaScript
- No frameworks, no build process, no dependencies
- Works offline after first load
- Fully client-side execution

## 📝 License

MIT License - feel free to fork and create your own arcade!

---

**by gumdrop** · [gumdrop.me](https://gumdrop.me)
