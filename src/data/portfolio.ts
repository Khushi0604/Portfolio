/**
 * Portfolio content config
 *
 * Edit this file to update your personal info, projects, skills, and social links.
 * No component changes are needed for most updates.
 */

export const personal = {
  name: "Khushi Nanwani",
  role: "Software Engineer / AI Engineer",
  email: "khushi.nanwani@example.com",
  location: "India",
  resumeUrl: "#", // Replace with a real resume download link
  social: {
    github: "https://github.com/khushinanwani",
    linkedin: "https://linkedin.com/in/khushinanwani",
    twitter: "https://x.com/khushinanwani",
  },
};

export const hero = {
  headline: "Software Engineer & AI Engineer",
  subtitle:
    "I design and build intelligent, scalable systems — from polished frontend experiences to machine-learning pipelines that solve real problems.",
  primaryCta: "View My Work",
  secondaryCta: "Download Resume",
};

export const about = {
  bio: [
    "I'm Khushi Nanwani, a software engineer with a deep focus on artificial intelligence and full-stack development.",
    "I enjoy working at the intersection of clean code, thoughtful UX, and data-driven intelligence. Whether I'm training a model, designing an API, or shipping a React interface, I care about building things that are reliable, accessible, and genuinely useful.",
  ],
  photo: "/profile.jpg",
  highlights: [
    { value: "3+", label: "Years Experience" },
    { value: "AI/ML", label: "Core Focus" },
    { value: "Full-Stack", label: "Engineering" },
    { value: "Open Source", label: "Contributor" },
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "neuro-notes",
    title: "NeuroNotes",
    category: "AI Productivity",
    year: "2024",
    shortDescription:
      "An AI-powered note-taking app that summarizes, tags, and links your thoughts automatically.",
    fullDescription:
      "NeuroNotes is an intelligent note-taking platform that uses transformer-based NLP to summarize long-form content, auto-generate tags, and surface related notes. Built with a React frontend, FastAPI backend, and a vector database for semantic search.",
    thumbnail: "/project-neuronotes.jpg",
    techStack: ["React", "TypeScript", "FastAPI", "OpenAI", "Pinecone"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "vision-sort",
    title: "VisionSort",
    category: "Computer Vision",
    year: "2023",
    shortDescription:
      "A real-time object classification and sorting pipeline for manufacturing quality control.",
    fullDescription:
      "VisionSort combines a custom-trained YOLOv8 model with an edge deployment pipeline to classify and sort items on a conveyor belt in real time. The system includes a dashboard for monitoring accuracy, latency, and production-line metrics.",
    thumbnail: "/project-visionsort.jpg",
    techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Streamlit"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "dev-dash",
    title: "DevDash",
    category: "Developer Tool",
    year: "2023",
    shortDescription:
      "A developer analytics dashboard that aggregates CI/CD metrics, code reviews, and team velocity.",
    fullDescription:
      "DevDash pulls data from GitHub, Vercel, and Linear to give engineering teams a single view of their delivery health. Features include DORA metrics, PR review insights, and customizable alerts.",
    thumbnail: "/project-devdash.jpg",
    techStack: ["Next.js", "Tailwind CSS", "tRPC", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
  },
  {
    category: "Backend & AI",
    items: ["Python", "FastAPI", "Node.js", "PyTorch", "TensorFlow", "OpenAI API"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "Figma"],
  },
];

export const contact = {
  headline: "Let's build something meaningful.",
  subtitle:
    "Have a project, research idea, or role in mind? Send a message and I'll get back to you within 48 hours.",
};
