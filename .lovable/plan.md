# Khushi Nanwani — Modern Portfolio Plan

## Goal
Build a responsive, single-page React + Tailwind CSS + TypeScript portfolio with a dark, premium, glassmorphism aesthetic, smooth scrolling, and interactive project modals.

## Personal Brand Inputs
- **Name:** Khushi Nanwani
- **Role:** Software Engineer / AI Engineer
- **Accent colors:** Electric indigo + cyan pulse (dual accent system)

## Visual Direction
- **Base:** Deep charcoal/black background (`#0a0a0a`) with clean white/light-gray text.
- **Accents:**
  - Primary: Indigo (`#6366f1`) for links, active states, and primary CTAs.
  - Secondary: Cyan (`#06b6d4`) for hover glows, badges, and subtle highlights.
- **Cards:** Glassmorphism with `backdrop-blur-md`, subtle white borders (`rgba(255,255,255,0.08)`), and soft shadows.
- **Typography:** Modern sans-serif system (`Inter` or `Geist`) with crisp headings and high-contrast body text.
- **Motion:** Subtle card hover scale (`1.02`), button glow on hover, smooth scroll-to-section, and modal enter/exit fade.

## Sections to Build
1. **Fixed Navbar**
   - Logo/name on the left: "Khushi Nanwani".
   - Center smooth-scroll links: About, Projects, Skills, Contact.
   - Right CTA: "Let's Talk" button.
   - Mobile hamburger menu.

2. **Hero Section**
   - Full viewport height.
   - Bold headline: "Software Engineer & AI Engineer".
   - Subtitle value proposition.
   - Two buttons: "View My Work" (primary) and "Download Resume" (secondary/outline).

3. **About Me Section**
   - Concise professional bio.
   - Profile photo placeholder.
   - Highlights grid (e.g., "3+ Years Experience", "AI/ML Focus", "Full-Stack", "Open Source").

4. **Selected Work / Projects**
   - Grid of 3 distinct project cards.
   - Each card: thumbnail image, title, short description, tech-stack badges, "View Project" link.
   - Clicking a card opens a detailed modal with expanded description, tech stack, links, and a larger image.

5. **Skills & Expertise**
   - Categorized skill groups (Frontend, Backend/AI, Tools).
   - Clean tag pills or small cards.

6. **Contact Section**
   - Interactive form: name, email, message.
   - Client-side validation and a success state.
   - Social links: GitHub, LinkedIn, Twitter/X.

## Technical Approach
- **Stack:** React 19, TanStack Start, Tailwind CSS v4, TypeScript, `lucide-react`.
- **Routing:** Single-page layout using hash anchors and smooth scroll; no new routes required.
- **State:** React `useState` for mobile menu, project modal, and contact form state.
- **Images:** Use generated placeholder thumbnails that match the indigo/cyan dark-tech mood.
- **Accessibility:** Focus traps in modal, semantic headings, aria labels on interactive elements.

## Deliverables
- Updated `src/routes/index.tsx` with all sections.
- Updated `src/styles.css` with the dark theme tokens and glass utilities.
- Generated project thumbnail assets.
- Responsive behavior verified across mobile and desktop.
