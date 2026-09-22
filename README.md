# Salar Taheri — Personal Portfolio Website

A production-ready, fully static personal portfolio for a **Senior Android & Embedded POS Engineer**, built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + JetBrains Mono (via Next/Font) |
| Deployment | Cloudflare Pages |

---

## 📁 Project Structure

```
portfolio2/
├── public/
│   ├── resume.pdf          ← Your CV (replace this file to update)
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← SEO, fonts, JSON-LD schema
│   │   ├── page.tsx        ← Page composition
│   │   └── globals.css     ← Global styles, glassmorphism utilities
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ImpactHighlights.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Timeline.tsx
│   │   ├── ResumeDownload.tsx
│   │   └── Contact.tsx
│   └── data/
│       └── portfolio.ts    ← ✏️ Edit all content here
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠 Local Development

### Prerequisites

- Node.js 18+ (LTS)
- npm 9+ (or pnpm / yarn)

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

This generates a fully static site in the **`out/`** directory (via `output: 'export'` in `next.config.js`), ready for Cloudflare Pages.

---

## ☁️ Deploy to Cloudflare Pages

### Option 1 — Direct Upload (one-time)

```bash
npm run build
# Upload the out/ folder via Cloudflare Pages dashboard → "Direct Upload"
```

### Option 2 — Cloudflare Pages Git Integration
1. Push this repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Connect to Git**.
3. Set build command: `npm run build`, output directory: `out`.

### Option 3 — Automated GitHub Actions CI/CD (Workflow Included)
The repository includes an automated workflow at `.github/workflows/deploy.yml`.
To activate it:
1. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**.
2. Add the following repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Create in Cloudflare Dashboard under **My Profile** → **API Tokens** → **Create Token** → use template **Edit Cloudflare Workers**.
   - `CLOUDFLARE_ACCOUNT_ID`: Found on your Cloudflare dashboard right-hand sidebar.
3. Push to `main` and GitHub Actions will automatically build and deploy!

---

## ✏️ Updating Content

All portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Edit this file to update:
- **Profile** info (name, email, LinkedIn, GitHub)
- **Stats** (years, users, crash-free rate)
- **Tech stack** categories and skills
- **Projects** (title, tagline, problem, solution, stack)
- **Career timeline** entries
- **Education** and languages

---

## 📄 Updating Your Resume PDF

Replace `public/resume.pdf` with your new PDF:

```bash
cp /path/to/new/resume.pdf public/resume.pdf
```

The download button and inline preview will automatically reflect the updated file.

---

## 🌐 Custom Domain

After deploying to Cloudflare Pages:

1. Go to your Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g., `salartaheri.dev`).
3. Update the DNS records as instructed.
4. Update `seoMeta.url` in `src/data/portfolio.ts` to your live domain.

---

## 📋 Checklist Before Going Live

- [ ] Replace `public/resume.pdf` with your latest CV
- [ ] Update `profile.github` in `src/data/portfolio.ts` with your real GitHub URL
- [ ] Update `seoMeta.url` with your live domain
- [ ] Add an Open Graph image at `public/og-image.png` (1200×630 px)
- [ ] Update `public/sitemap.xml` with your real domain

---

## 📜 License

MIT — feel free to fork and adapt for your own portfolio.
