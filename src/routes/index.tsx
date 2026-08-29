import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Twitter,
  X,
} from "lucide-react";

import { about, contact, hero, personal, projects, skills, type Project } from "../data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khushi Nanwani — Software Engineer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Khushi Nanwani, a Software Engineer and AI Engineer building intelligent, scalable systems.",
      },
      {
        property: "og:title",
        content: "Khushi Nanwani — Software Engineer & AI Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Khushi Nanwani, a Software Engineer and AI Engineer building intelligent, scalable systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll when mobile menu or modal is open.
  useEffect(() => {
    const isOpen = mobileMenuOpen || activeProject !== null;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, activeProject]);

  return (
    <div className="min-h-screen bg-ink font-sans text-paper selection:bg-indigo-500 selection:text-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <About />
        <Projects onSelectProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  );
}

function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-glass-border bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10 lg:px-8">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
            KN
          </span>
          <span className="text-lg font-semibold tracking-tight text-paper">{personal.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/30 md:inline-flex"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border text-paper md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 md:hidden">
      <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" onClick={onClose} />
      <nav className="absolute left-0 right-0 top-16 flex flex-col gap-2 border-b border-glass-border bg-ink/95 p-6 backdrop-blur-xl">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-lg font-medium text-slate transition-colors hover:bg-surface hover:text-paper"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onClose}
          className="mt-2 rounded-lg bg-indigo-500 px-4 py-3 text-center text-base font-semibold text-white"
        >
          Let's Talk
        </a>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="#"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid px-6 pt-16 md:px-10 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-surface/50 px-4 py-1.5 text-sm font-medium text-slate backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Available for opportunities
        </p>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl">
          Building intelligent systems that{" "}
          <span className="text-gradient">learn, adapt, and scale.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/40"
          >
            {hero.primaryCta}
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={personal.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-surface px-6 py-3 text-base font-semibold text-paper transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 hover:bg-surface-elevated"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-y border-glass-border bg-ink px-6 py-24 md:px-10 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-paper md:text-4xl">
            Engineer by training. AI practitioner by curiosity.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
            {about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-4 text-center transition-transform hover:-translate-y-1"
              >
                <p className="text-2xl font-bold text-paper">{item.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-dim">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-2xl" />
            <img
              src={about.photo}
              alt={`${personal.name} profile`}
              width={400}
              height={400}
              className="relative aspect-square w-72 rounded-2xl object-cover shadow-2xl shadow-black/40 ring-1 ring-glass-border sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ onSelectProject }: { onSelectProject: (project: Project) => void }) {
  return (
    <section id="projects" className="px-6 py-24 md:px-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-paper md:text-4xl">
              Projects that shaped my craft
            </h2>
          </div>
          <p className="max-w-md text-slate">
            A few recent builds across AI, computer vision, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-slate-dim">
                  <span>{project.category}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-dim" />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-paper">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-glass-border bg-surface px-2.5 py-1 text-xs font-medium text-slate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onSelectProject(project)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-glass-border bg-surface p-0 shadow-2xl shadow-black/50">
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-ink/60 text-paper backdrop-blur-sm transition-colors hover:bg-surface-elevated"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={project.thumbnail}
          alt={project.title}
          width={1280}
          height={720}
          className="aspect-video w-full object-cover"
        />

        <div className="p-6 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-slate-dim">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-300">
              {project.category}
            </span>
            <span>{project.year}</span>
          </div>
          <h2 id="project-modal-title" className="text-2xl font-bold text-paper md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">{project.fullDescription}</p>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-paper">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-glass-border bg-ink px-3 py-1 text-sm font-medium text-slate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-elevated"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-glass-border bg-surface/30 px-6 py-24 md:px-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Skills & Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-paper md:text-4xl">
            Tools I use to turn ideas into products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-bold text-paper">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-glass-border bg-ink px-3 py-1.5 text-sm font-medium text-slate transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  const validate = (values: typeof formState) => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!values.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleChange = (field: keyof typeof formState, value: string) => {
    const next = { ...formState, [field]: value };
    setFormState(next);
    setErrors(validate(next));
  };

  const handleBlur = (field: keyof typeof formState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(formState);
    setErrors(validation);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTouched({});
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 lg:px-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-paper md:text-4xl">
            {contact.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">{contact.subtitle}</p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 rounded-xl border border-glass-border bg-surface p-4 text-paper transition-colors hover:border-indigo-500/30"
            >
              <Mail className="h-5 w-5 text-indigo-400" />
              <span className="font-medium">{personal.email}</span>
            </a>
            <div className="flex gap-3">
              <SocialLink href={personal.social.github} icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink
                href={personal.social.linkedin}
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href={personal.social.twitter}
                icon={<Twitter className="h-5 w-5" />}
                label="Twitter"
              />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-paper">Message sent!</h3>
              <p className="mt-2 text-slate">
                Thanks for reaching out. I'll get back to you within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg border border-glass-border bg-surface px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-elevated"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-paper">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className="w-full rounded-lg border border-glass-border bg-ink px-4 py-3 text-paper placeholder:text-slate-dim focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Your name"
                />
                {touched.name && errors.name && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-paper">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="w-full rounded-lg border border-glass-border bg-ink px-4 py-3 text-paper placeholder:text-slate-dim focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-paper">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className="w-full resize-none rounded-lg border border-glass-border bg-ink px-4 py-3 text-paper placeholder:text-slate-dim focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Tell me about your project, idea, or role..."
                />
                {touched.message && errors.message && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/40"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-glass-border bg-surface text-slate transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:text-cyan-300"
    >
      {icon}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border bg-ink px-6 py-8 md:px-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-dim md:flex-row">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-indigo-400">React</span>,{" "}
          <span className="text-cyan-400">Tailwind</span>, and curiosity.
        </p>
      </div>
    </footer>
  );
}
