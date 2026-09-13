/**
 * Portfolio content config
 *
 * Edit this file to update your personal info, experience, projects, skills,
 * and education. No component changes are needed for most updates.
 */

export const personal = {
  name: "Khushi Nanwani",
  role: "Software Engineer",
  email: "khushi.nanwani18@gmail.com",
  location: "Pune, India",
  resumeUrl: "/Khushi Nanwani Resume.pdf", // Replace with a link to your resume PDF (e.g. /Khushi-Nanwani-Resume.pdf)
  social: {
    github: "https://github.com/Khushi0604",
    linkedin: "https://www.linkedin.com/in/khushi-nanwani-734029213/",
  },
};

export const hero = {
  badge: "Graduated in Jul 2026 · Open to full-time roles",
  headline: "AI & Software Engineer",
  subtitle:
    "M.Sc. Computer Applications student in Pune with two software engineering internships and hands-on experience building agentic AI, RAG, and machine learning systems in Python. Looking for a full-time AI/ML or software engineering role.",
  primaryCta: "View My Projects",
  secondaryCta: "Download Resume",
};

export const about = {
  bio: [
    "I'm Khushi Nanwani, an M.Sc. (Computer Applications) student at Vishwakarma College, Pune, graduating in July 2026 and actively looking for my first full-time role in AI/ML or software engineering.",
    "Across two internships I've shipped real work: a formulation and inventory intelligence dashboard with predictive demand estimation, and an AI system for detecting abusive content using OCR and NLP. On my own time I build agentic AI and RAG applications with LangChain, LangGraph, FastAPI, and Groq.",
    "I like problems where data, models, and clean engineering meet — and I learn fastest when I'm building something end to end.",
  ],
  photo: "/profile.jpg",
  highlights: [
    { value: "2", label: "Internships" },
    { value: "Jul 2026", label: "Graduated" },
    { value: "AI / ML ", label: "Core Focus" },
    { value: "Pune", label: "Based In" },
  ],
};

export type Experience = {
  company: string;
  location: string;
  position: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Legacy Life Sciences",
    location: "Pune, India",
    position: "Software Engineering Intern",
    period: "Jan 2026 – May 2026",
    points: [
      "Developed a Smart Formulation & Inventory Intelligence Dashboard using Python, Pandas, NumPy and Streamlit.",
      "Applied analytical logic and implemented predictive demand estimation using Linear Regression for future inventory planning.",
      "Performed data analysis on inventory usage trends to support manufacturing decision-making.",
    ],
  },
  {
    company: "ZPlus Cyber Secure Technologies Pvt. Ltd.",
    location: "Pune, India",
    position: "Software Engineering Intern",
    period: "Jan 2024 – Jul 2024",
    points: [
      "Built Cyber Watch, an AI system for detecting abusive content using OCR + NLP.",
      "Performed data preprocessing and feature extraction to improve model accuracy.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "fpa-insight-agent",
    title: "FP&A Insight Agent",
    category: "Agentic AI",
    year: "2026",
    shortDescription:
      "An agentic AI assistant that answers financial planning questions with multi-step reasoning and RAG over FP&A data.",
    fullDescription:
      "An agentic AI assistant for financial planning and analysis queries, built with LangChain tool-calling, LangGraph multi-step reasoning, and RAG over structured FP&A datasets.",
    highlights: [
      "Built an agentic AI assistant for financial planning queries using LangChain tool-calling, LangGraph multi-step reasoning, and RAG over structured FP&A datasets.",
      "Integrated memory, semantic retrieval, and Groq LLMs into a FastAPI + Streamlit architecture, reducing manual FP&A analysis effort.",
    ],
    thumbnail: "/project-fpa-agent.jpg",
    techStack: ["Python", "LangChain", "LangGraph", "FastAPI", "Groq", "FAISS", "Streamlit"],
    repoUrl: "https://github.com/Khushi0604/FpaInsightAgent",
  },
  {
    id: "vision-rag",
    title: "VisionRAG — Multimodal RAG & Document Intelligence",
    category: "Multimodal RAG",
    year: "2025",
    shortDescription:
      "A multimodal retrieval platform that answers questions over PDFs, images, audio, and structured data with citations.",
    fullDescription:
      "A multimodal RAG platform over PDFs, images, audio, and structured data using FAISS vector search, Sentence Transformers, and Groq LLMs, with OCR, Whisper, BLIP, and web search unified behind one FastAPI backend.",
    highlights: [
      "Engineered a multimodal RAG platform over PDFs, images, audio, and structured data using FAISS vector search, Sentence Transformers, and Groq LLMs.",
      "Integrated OCR, Whisper, BLIP, and Tavily web search into a unified FastAPI backend delivering citation-backed, context-aware responses.",
    ],
    thumbnail: "/project-visionrag.jpg",
    techStack: ["Python", "LangChain", "FastAPI", "FAISS", "Whisper", "BLIP", "Groq", "Streamlit"],
    repoUrl: "https://github.com/Khushi0604/VisionRAG",
  },
  {
    id: "video-summarizer",
    title: "AI Video Summarizer + Deepfake Detection",
    category: "Multimodal ML",
    year: "2025",
    shortDescription:
      "An end-to-end pipeline that summarizes video content and flags potential deepfakes across audio, visual, and text signals.",
    fullDescription:
      "An end-to-end multimodal ML pipeline for processing video, audio, and text data using OpenAI Whisper and BLIP for feature extraction, with a Streamlit interface simulating model serving and user interaction.",
    highlights: [
      "Built an end-to-end multimodal ML pipeline for processing video, audio, and text data using OpenAI Whisper and BLIP for feature extraction.",
      "Developed a Streamlit-based interface to simulate model serving and user interaction.",
    ],
    thumbnail: "/project-video-summarizer.jpg",
    techStack: ["Whisper", "BLIP", "Groq", "FFmpeg", "Streamlit"],
    repoUrl: "https://github.com/Khushi0604/ai-video-summarizer",
  },
];

export const skills = [
  {
    category: "Languages & Databases",
    items: ["Python", "SQL", "FAISS"],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Semantic Search",
    ],
  },
  {
    category: "ML & Data Science",
    items: [
      "NLP",
      "OCR",
      "Regression",
      "Time Series Forecasting",
      "EDA",
      "Feature Engineering",
    ],
  },
  {
    category: "Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Streamlit",
      "TensorFlow",
      "FastAPI",
    ],
  },
  {
    category: "Tools",
    items: ["Jupyter", "Git", "Google Sheets", "Slides", "Docs", "Excel (Pivot Tables, Charts)"],
  },
];

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    institution: "Vishwakarma College of Arts, Commerce and Science",
    location: "Pune, India",
    degree: "M.Sc. (Computer Applications)",
    period: "Jul 2024 – Jul 2026",
  },
  {
    institution: "Vishwakarma College of Arts, Commerce and Science",
    location: "Pune, India",
    degree: "B.Sc. (Computer Science)",
    period: "Oct 2020 – Jul 2023",
  },
];

export const contact = {
  headline: "Let's Connect?",
  subtitle:
    "Open to full-time roles, internships, and collaborations in AI/ML and software engineering. Send a message and I'll reply within 48 hours.",
  web3formsAccessKey: "5ad32f65-50cf-47e5-bff2-57e41aeeee87",
  };
