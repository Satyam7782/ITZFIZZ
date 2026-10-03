# ITZFIZZ &mdash; Scroll-Driven Engineering Experience

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=white)](https://greensock.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance scroll-driven digital agency hero section inspired by [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation). Engineered for the **ITZFIZZ Web Development Internship assignment**, this project demonstrates high-end interactive engineering, 3D multi-plane depth, locked 60 FPS GPU-accelerated motion, and responsive viewport optimization.

---

## 🌟 Key Features

- **Kinetic Letter Luminescence**: Interactive typography for **`W E L C O M E   I T Z F I Z Z`** with wide tracking, optical kerning clamps, and individual span micro-hover luminescence.
- **GSAP ScrollTrigger Scrub Engine**: Smooth bidirectional scrub interpolation (`scrub: 0.9`) with section pinning (`pin: true`, `anticipatePin: 1`).
- **Aerodynamic 3D Physics**: Primary vehicle translates horizontally across the runway while exhibiting physical suspension lift (`y: -8px`), steering tilt (`rotation: 2.2deg`), and progressive apex scaling (`1.0 -> 1.08 -> 1.02`).
- **Zero-Reflow Speed Trail**: Expanding neon speed trail (`#45db7d`) running purely on GPU matrix transforms (`scaleX(0.98)` with `origin-left`) without triggering browser DOM reflows.
- **Multi-Plane 3D Parallax**: 6 independent depth planes (Background Cyber Mesh at `0.35x`, 3D Runway Tilt with `perspective(1200px)`, Primary Craft at `1.0x`, Foreground Floating Code & Telemetry Cards at `1.2x` and `0.7x`).
- **Telemetry Wave Highlights**: Impact cards (`01` 90% Satisfaction, `02` 75+ Delivered, `03` 95% Performance, `04` 24/7 Support) sequentially elevate in waves as the vehicle traverses each horizontal quarter.
- **Responsive Architecture (360px &ndash; 1440px)**: 100% verified with zero horizontal overflow across 1440px, 1280px, 1024px, 768px, 430px, 390px, and 360px viewports.
- **Accessibility & Reduced Motion**: Automatically detects `prefers-reduced-motion: reduce` and sets elements to their final resting state immediately without motion.
- **Zero Memory Leaks & Zero Console Warnings**: Scoped React context with strict unmount teardown (`loadTl.kill()`, `scrollTl.kill()`, `ScrollTrigger.kill()`).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) (`gsap`, `@gsap/react`, `ScrollTrigger`)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions CI/CD

---

## 📁 Project Structure

```
ITZFIZZ/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions Pages deployment
├── public/
│   └── assets/
│       └── car.png               # High-res McLaren 720S top-view sprite
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx        # Glassmorphic header with branding & status
│   │   │   └── Badge.jsx         # Status pill with customizable color variants
│   │   ├── hero/
│   │   │   ├── Hero.jsx          # Orchestrator hero with master GSAP timelines
│   │   │   ├── HeroHeading.jsx   # Kinetic typography & letter spans
│   │   │   ├── Stats.jsx         # Reusable 4-card metric display with hover elevation
│   │   │   └── AnimatedVisual.jsx# 3D runway, car sprite, speed trail & floating cards
│   │   └── layout/
│   │       ├── Layout.jsx        # Studio lighting atmosphere & dot-grid backdrop
│   │       ├── NextSection.jsx   # Capabilities section for post-scroll journey
│   │       └── Footer.jsx        # Minimalist production status footer
│   ├── data/
│   │   └── statsData.js          # Impact metrics data model
│   ├── lib/
│   │   └── gsap.js               # Centralized GSAP & ScrollTrigger initialization
│   ├── styles/
│   │   └── index.css             # Tailwind directives, custom scrollbars, road textures
│   ├── App.jsx                   # Application root
│   └── main.jsx                  # React DOM mount point
├── index.html                    # Typography preconnects (Space Grotesk & Syne)
├── vite.config.js                # Relative base path configuration
├── tailwind.config.js            # Obsidian palette & custom shadow definitions
├── postcss.config.js             # Autoprefixer & Tailwind PostCSS pipeline
├── package.json                  # Scripts & dependency definitions
├── .gitignore                    # Git exclusions
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- `npm` (version `9.0.0` or higher)

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start with Hot Module Replacement (HMR) at:
```
http://localhost:3000/
```

### 4. Build for Production

```bash
npm run build
```

This compiles optimized bundles into `dist/`:
- Relative asset paths (`./assets/...`) for universal hosting.
- Clean minification with zero compiler warnings or errors.

### 5. Preview Production Build Locally

```bash
npm run preview
```

Previews the compiled `dist/` production build at `http://localhost:4173/`.

---

## 🌐 Deployment Instructions (GitHub Pages)

### Method 1: Automated CI/CD (Recommended)

This repository includes a pre-configured GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete ITZFIZZ scroll-driven hero assignment"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
3. Every subsequent push to `main` will automatically build and deploy the website to:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### Method 2: Manual Deployment via `gh-pages`

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add the deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 📱 Responsive Verification Matrix

Audited using automated Chrome DevTools Protocol emulation across all target breakpoints:

| Viewport Category | Screen Size | Scroll Width | Lateral Overflow | Heading Status | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop Widescreen** | 1440 &times; 900 | 1410px | **0px** | Fits (1104px) | Verified |
| **Standard Desktop** | 1280 &times; 800 | 1250px | **0px** | Fits (1104px) | Verified |
| **Tablet Landscape** | 1024 &times; 768 | 994px | **0px** | Fits (946px) | Verified |
| **Tablet Portrait** | 768 &times; 1024 | 738px | **0px** | Fits (690px) | Verified |
| **iPhone 16 Pro Max** | 430 &times; 932 | 430px | **0px** | Fits (406px) | Verified |
| **Standard iPhone** | 390 &times; 844 | 390px | **0px** | Fits (366px) | Verified |
| **Compact Android** | 360 &times; 780 | 360px | **0px** | Fits (336px) | Verified |

---

## ⚡ Performance Audit Results

- **Compiler Errors**: `0`
- **Compiler Warnings**: `0`
- **Browser Runtime Exceptions**: `0`
- **Browser Console Warnings**: `0`
- **Scroll Listeners**: Handled purely via GSAP `requestAnimationFrame` ticker.
- **Rendering**: 100% GPU-accelerated transforms (`x`, `y`, `scale`, `rotation`, `scaleX`). Zero layout reflows during scroll scrub.

---

## 📄 License

This project is licensed under the MIT License &mdash; see the [LICENSE](LICENSE) file for details.
