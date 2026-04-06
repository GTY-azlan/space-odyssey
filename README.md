# 🚀 Space Odyssey

> An immersive space exploration website featuring NASA's historic missions, from Earth to the Moon and beyond.

![Space Odyssey](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)

## ✨ Features

- 🌍 **Journey Through Space** — From life on Earth to the Moon landing and beyond
- 🛰️ **Historic Missions Timeline** — Sputnik 1 (1957) to James Webb Telescope (2021)
- 💬 **Inspirational Quotes** — Words from Armstrong, Sagan, Kennedy, and more
- 🎨 **Stunning Animations** — Smooth transitions, floating elements, and twinkling stars
- 📱 **Fully Responsive** — Perfect on desktop, tablet, and mobile
- 🖼️ **Real NASA Imagery** — Professional space photography from Unsplash

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & transitions |
| **React** | UI component library |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/GTY-azlan/space-odyssey.git

# Navigate to project directory
cd space-odyssey

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export

```bash
# Generate static files
npm run build

# Open out/index.html in your browser
```

## 📁 Project Structure

```
space-odyssey/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page composition
│   └── globals.css       # Global styles & custom scrollbar
├── components/
│   ├── Hero.tsx          # Hero section with animated stars & moon
│   ├── Features.tsx      # Journey timeline cards
│   ├── Pricing.tsx       # Historic missions timeline
│   ├── Quotes.tsx        # Inspirational space quotes
│   └── Footer.tsx        # Footer with links & banner
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
├── public/               # Static assets
├── index.html            # Standalone static version
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Sections

### Hero
Animated star field with 150 twinkling stars, floating Moon element, and cosmic gradients background.

### The Journey
Six feature cards showcasing the progression from Earth to Mars, each with professional space photography.

### Historic Missions
Interactive timeline featuring 6 pivotal moments in space exploration history.

### Voices from the Cosmos
Inspirational quotes from legendary figures in space exploration, each paired with stunning space imagery.

### Footer
Professional footer with navigation links, social icons, and a full-width NASA astronaut banner.

## 🌐 Live Demo

Visit the live site at: [https://GTY-azlan.github.io/space-odyssey](https://GTY-azlan.github.io/space-odyssey)

## 📸 Images

All images sourced from [Unsplash](https://unsplash.com) — free for commercial use, no attribution required.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [NASA](https://www.nasa.gov) for decades of space exploration inspiration
- [Unsplash](https://unsplash.com) for beautiful, free photography
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Next.js](https://nextjs.org/) for the incredible React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

<p align="center">Made with ❤️ by <a href="https://github.com/GTY-azlan">GTY-azlan</a></p>
<p align="center"><i>"The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever."</i> — Konstantin Tsiolkovsky</p>
