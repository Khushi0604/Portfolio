# Khushi Nanwani — Portfolio

A modern, single-page portfolio built with React, TypeScript, TanStack Start, and Tailwind CSS.

To access portfolio, click : "https://khushi-codes.netlify.app/"

![Portfolio Preview](/public/profile.jpg)

## Sections

- **Navbar** — fixed, blur-on-scroll navigation with mobile menu
- **Hero** — gradient headline, availability badge, and call-to-action buttons
- **About Me** — bio, profile photo, and quick highlights
- **Projects** — three project cards with glassmorphism hover effects and detail modals
- **Skills** — categorized skill tags
- **Contact** — interactive form with validation + social links

## Design

- **Base**: deep charcoal/black (`#0a0a0a`)
- **Accents**: electric indigo (`#6366f1`) + cyan pulse (`#06b6d4`)
- **Cards**: glassmorphism with subtle borders and backdrop blur
- **Icons**: [Lucide React](https://lucide.dev)

## Editing your content

All personal details, projects, skills, and contact info live in one file:

```sh
src/data/portfolio.ts
```

Update that file to change:

- Name, role, email, location, resume link, and social URLs
- Hero headline, subtitle, and CTA labels
- About bio, profile photo path, and highlight stats
- Projects (add, remove, or edit — the UI adapts automatically)
- Skill categories and items
- Contact section headline and subtitle

Replace images by dropping new files into the `public/` folder and updating the paths in `src/data/portfolio.ts`.

## Local development

Requires [Node.js](https://nodejs.org/) (v20+ recommended) and a package manager such as `npm`, `yarn`, `pnpm`, or `bun`.

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Building for production

```sh
npm run build
```

The static output is generated in the `dist/` folder.

## Deploying to GitHub Pages / Vercel / Netlify

This is a standard static site. After building, upload the contents of `dist/` to any static host:

- **Vercel**: drag and drop the `dist/` folder, or connect the Git repo.
- **Netlify**: connect the repo or drag `dist/` into the deploy dropzone.
- **GitHub Pages**: use a GitHub Action to build and push `dist/` to the `gh-pages` branch.

## Project structure

```text
public/                  # Static assets (images, resume, etc.)
src/
  data/
    portfolio.ts         # All editable content
  routes/
    __root.tsx           # Root layout, fonts, and metadata
    index.tsx            # Single-page portfolio component
  styles.css             # Theme tokens, glass utilities, and Tailwind config
```

## Built with

- [TanStack Start](https://tanstack.com/start)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev)

---

© Khushi Nanwani. Built with curiosity.
