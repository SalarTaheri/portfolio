# Salar Taheri — Personal Portfolio & Technical Resume

A production-ready, high-performance static portfolio and resume for a **Senior Android & Mobile Systems Engineer** (Fintech, Smart POS & High-Scale SDKs), built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

- **Live Canonical URL:** [https://salar.miranmahaleh.ir](https://salar.miranmahaleh.ir)
- **Repository:** [https://github.com/SalarTaheri/portfolio](https://github.com/SalarTaheri/portfolio)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export `out/`) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 (Dark/Light mode via CSS variables) |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans (LTR) + Vazirmatn (RTL) + JetBrains Mono (Code/Numbers) |
| Resume | LaTeX (`pdflatex` via Docker / ATS-Safe format) |
| Deployment | Cloudflare Pages (via GitHub Actions CI/CD) |

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Automated Cloudflare Pages build & deployment
├── public/
│   ├── fonts/                ← Self-hosted WOFF2 fonts
│   ├── resume.pdf            ← Canonical CV download asset
│   ├── favicon.svg           ← Modern SVG favicon
│   ├── sitemap.xml           ← Canonical sitemap
│   └── robots.txt            ← Crawler indexing directives
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root HTML shell, JSON-LD @graph, canonical SEO
│   │   ├── page.tsx          ← Page composition
│   │   └── globals.css       ← Theme variables, typography & WCAG AA contrast tokens
│   ├── components/
│   │   ├── AmbientCanvas.tsx ← High-performance background particle field (prefers-reduced-motion safe)
│   │   ├── AnimatedCounter.tsx ← Smooth rolling numbers for metric highlights
│   │   ├── CommandPalette.tsx ← Accessible (Cmd+K) interactive quick-navigation modal
│   │   ├── Contact.tsx       ← Direct contact CTAs and social channels
│   │   ├── ExperienceTimeline.tsx ← Career trajectory with aligned vertical node track
│   │   ├── FeaturedProjects.tsx ← Filterable case studies with technical architecture deep-dives
│   │   ├── Footer.tsx        ← Site footer and copyright
│   │   ├── Hero.tsx          ← Executive profile header with interactive architecture preview
│   │   ├── Navbar.tsx        ← Sticky navigation header, locale switcher, and theme toggle
│   │   ├── SkillsMatrix.tsx  ← Categorized technical competencies
│   │   ├── SpotlightCard.tsx ← Interactive mouse-tracking radial highlight card
│   │   └── StatsGrid.tsx     ← 2/3-column responsive engineering metrics
│   ├── context/
│   │   ├── LanguageContext.tsx ← Bilingual state (en/fa) with auto-detection
│   │   └── ThemeContext.tsx  ← Dark/Light theme state
│   └── data/
│       └── portfolio.ts      ← Single Source of Truth for all portfolio content
├── Dockerfile.resume         ← Dockerized TeX Live environment for PDF resume compilation
├── Resume_Salar_Taheri.tex   ← ATS-optimized master LaTeX resume source
├── RESUME.md                 ← Markdown version of the resume
├── scripts/
│   └── build-resume.sh       ← Script to compile LaTeX resume to public/resume.pdf
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠 Local Development

### Prerequisites

- Node.js 18+ (LTS)
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:3000
```

---

## 🏗 Build for Production

```bash
npm run build
```

This exports a fully static site to the **`out/`** directory (via `output: 'export'` in `next.config.js`), optimized for static hosting on Cloudflare Pages.

---

## 📄 Compiling the Resume PDF

To compile `Resume_Salar_Taheri.tex` into `public/resume.pdf`:

```bash
npm run build:resume
```

*(Requires Docker. The script uses `Dockerfile.resume` to build a minimal TeX Live container and output directly to `public/resume.pdf`.)*

---

## ☁️ Deployment

Deployments to Cloudflare Pages are automated via GitHub Actions on every push to `main` (`.github/workflows/deploy.yml`).

---

## 📜 License

MIT — feel free to fork and adapt for your own portfolio.
