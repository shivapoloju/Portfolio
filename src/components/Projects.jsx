import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Modulo-like wrap function
const wrapIndex = (min, max, value) => {
  const range = max - min;
  return ((value - min) % range + range) % range + min;
};

const ProjectSlider = ({ items, onProjectClick }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const count = items.length;
  const activeIndex = wrapIndex(0, count, index);
  const activeItem = items[activeIndex];

  const handlePrev = useCallback(() => {
    setIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Drag swiping handlers
  const dragThreshold = 10000;
  const calculateDragStrength = (offset, velocity) => Math.abs(offset) * velocity;

  const handleDragEnd = (event, info) => {
    const strength = calculateDragStrength(info.offset.x, info.velocity.x);
    if (strength < -dragThreshold) {
      handleNext();
    } else if (strength > dragThreshold) {
      handlePrev();
    }
  };

  // Map indexes to display 5 slides: [-2, -1, 0, 1, 2]
  const indices = [-2, -1, 0, 1, 2];

  // spring animations
  const springSettingsDefault = { type: "spring", stiffness: 300, damping: 30, mass: 1 };
  const springSettingsScale = { type: "spring", stiffness: 450, damping: 18, mass: 1 };

  return (
    <div 
      className="group relative flex h-[620px] w-full flex-col overflow-hidden text-white outline-none select-none overflow-x-hidden pt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        
        {/* 3D Rail Track */}
        <motion.div 
          className="relative mx-auto flex h-[360px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {indices.map((offsetValue) => {
            const absoluteTargetIndex = index + offsetValue;
            const circularIndex = wrapIndex(0, count, absoluteTargetIndex);
            const projectItem = items[circularIndex];

            const isActive = offsetValue === 0;
            const depth = Math.abs(offsetValue);
            
            // 3D Transforms mapping from the original template
            const xTranslation = offsetValue * (isMobile ? 180 : 380);
            const zTranslation = -depth * 150;
            const scale = isActive ? 1 : 0.85;
            const rotateY = offsetValue * -20;
            const opacity = isActive ? 1 : Math.max(0.1, 1 - depth * 0.4);
            const blurVal = isActive ? 0 : depth * 5;
            const brightnessVal = isActive ? 1 : 0.45;

            return (
              <motion.div
                key={absoluteTargetIndex}
                className={`absolute aspect-video w-[280px] md:w-[500px] rounded-2xl border-t border-white/20 bg-neutral-900 shadow-2xl transition-shadow duration-300 ${
                  isActive ? 'z-20 shadow-white/10 cursor-pointer' : 'z-10 cursor-pointer'
                }`}
                initial={false}
                animate={{
                  x: xTranslation,
                  z: zTranslation,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blurVal}px) brightness(${brightnessVal})`
                }}
                transition={{
                  default: springSettingsDefault,
                  scale: springSettingsScale
                }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => {
                  if (offsetValue !== 0) {
                    setIndex((prev) => prev + offsetValue);
                  } else {
                    onProjectClick(projectItem);
                  }
                }}
              >
                {/* Visual mockup of the project */}
                <img 
                  src={projectItem.imageSrc} 
                  alt={projectItem.title} 
                  className="h-full w-full rounded-2xl object-cover pointer-events-none"
                />
                {/* Glossy gradient highlight overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lower Info & Navigation Panel */}
        <div className="mx-auto mt-6 md:mt-10 flex w-full max-w-4xl flex-col items-center justify-between gap-4 md:gap-6 md:flex-row pointer-events-auto">
          
          {/* Active card info */}
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left h-28 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="space-y-2.5"
              >
                <div className="space-y-1">
                  {activeItem.meta && (
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
                      {activeItem.meta}
                    </span>
                  )}
                  <h3 className="text-2xl font-extrabold font-display tracking-tight text-white">
                    {activeItem.title}
                  </h3>
                </div>
                
                {activeItem.description && (
                  <p className="max-w-md text-sm text-neutral-400 leading-normal font-light">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 rounded-full bg-neutral-900/80 p-1 ring-1 ring-white/10 backdrop-blur-md">
              <button
                onClick={handlePrev}
                className="rounded-full p-2.5 text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <span className="min-w-[40px] text-center text-xs font-mono text-neutral-500">
                {activeIndex + 1} / {count}
              </span>
              
              <button
                onClick={handleNext}
                className="rounded-full p-2.5 text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <button
              onClick={() => onProjectClick(activeItem)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-background font-bold transition-all text-xs cursor-pointer active:scale-95 shadow-md shadow-primary/10"
            >
              Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 0,
      title: "LifeLine AI – Offline Medical Assistant",
      tag: "Disaster Resilient & Offline AI",
      description: "Disaster-resilient offline AI triage, multilingual voice interaction, Gemini visual injury assessment, and GPS hospital locator.",
      longDescription: "LifeLine AI is a disaster-resilient, offline-first HealthTech and Emergency Response application designed for low-connectivity regions and crisis situations. Features real-time AI symptom triage, multilingual voice interactions (English, Hindi, Telugu), step-by-step first-aid protocols, Gemini visual injury assessment, GPS hospital locating with Anti-Snake Venom (ASV) and ICU availability, drug safety warnings, and instant emergency medical PDF report exports.",
      features: [
        "Symptom-Based AI Triage & Severity Prediction",
        "Multilingual Voice Assistant (English, Hindi, Telugu)",
        "Offline Medical RAG Vector KB & CPR Metronome",
        "Gemini Vision Visual Injury Assessment Scanner",
        "GPS Emergency Hospital Finder with ASV & ICU Beds",
        "SOS Siren & WhatsApp/SMS Location Broadcast",
        "Emergency Medical PDF Summary Exporter (jsPDF)"
      ],
      tech: ["React", "FastAPI", "Python", "Google Gemini", "FAISS DB", "Whisper AI"],
      github: "https://github.com/shivapoloju/LifeLine-AI-Offline-Emergency-Assistant",
      imageSrc: "/lifeline_ai.png",
      meta: "Offline Emergency AI & HealthTech",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
      id: 1,
      title: "AI Powered Web App Builder",
      tag: "GenAI & Sandboxing",
      description: "Uses Google's Gemini API to generate web applications through an intuitive chat interface with a live code editor.",
      longDescription: "AI Powered Web App Builder is a full-stack application that leverages Google's Gemini API to interpret natural language instructions and construct executable frontend code on the fly. It features a fully-featured live code editor, file explorer tree, interactive visual preview tab, and multiple project saving and loading capability.",
      features: [
        "Chat-driven web page scaffolding",
        "Live interactive browser preview",
        "Embedded code editor and file structure creator",
        "Firebase / DB project saving & loading",
        "Fully responsive and clean layout"
      ],
      tech: ["React", "Node.js", "Express", "Gemini API", "Tailwind CSS"],
      github: "https://github.com/shivapoloju/Ai-Powered-WebApp-Builder",
      imageSrc: "/webapp_builder.png",
      meta: "GenAI & Sandbox Platform",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      id: 2,
      title: "AI Interview Coach",
      tag: "Speech-to-Text & NLP",
      description: "An AI mock interview coach featuring automated questions, native speech-to-text, and local NLP speech analytics.",
      longDescription: "An AI-powered mock interview coach built with React and Node.js. It helps job seekers practice for technical and behavioral interviews by generating custom questions based on target roles, recording candidate audio, converting speech-to-text natively, and evaluating transcripts for filler words, tone, pacing, and vocabulary.",
      features: [
        "Automated role-based question generator",
        "Native browser Speech-to-Text translation",
        "NLP filler word count analysis",
        "Pacing, tone, and grammar evaluation",
        "Local statistics dashboard"
      ],
      tech: ["React", "Node.js", "Web Speech API", "NLP.js", "Framer Motion"],
      github: "https://github.com/shivapoloju/AI-Interview-Preparation-Assistant",
      imageSrc: "/interview_coach.png",
      meta: "AI & Speech Analytics",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      id: 3,
      title: "ATS-Genius Screening",
      tag: "Gemini 2.5 & Screening",
      description: "Upload PDF resumes to get match scores, skill gap analyses, and tailored interview prep questions using Gemini 2.5.",
      longDescription: "ATS-Genius is a GenAI-powered Applicant Tracking System screening and job-matching platform. It allows recruiters or candidates to upload PDF resumes, cross-reference them with target job descriptions, analyze skill alignment, and receive scoring alongside interview prep questions.",
      features: [
        "PDF resume text parsing",
        "Targeted job description matching score",
        "Automated skill gap identification",
        "Tailored preparation question generation",
        "Interactive analysis dashboard"
      ],
      tech: ["React", "Tailwind CSS", "Gemini 2.5", "PDF.js", "Node.js"],
      github: "https://github.com/shivapoloju/ATS-Genius",
      imageSrc: "/ats_genius.png",
      meta: "ATS Scoring & Match Engine",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      id: 4,
      title: "Company-RAG-Chatbot",
      tag: "LangChain & Vector DB",
      description: "An enterprise-grade, multi-session RAG chatbot isolating FAISS vector databases dynamically by chat session.",
      longDescription: "An enterprise-grade, multi-session RAG chatbot isolating FAISS vector databases dynamically by chat session. Powered by React, Express, FastAPI, LangChain, and Google Gemini, it allows organizations to load private company documentation, embed it, and chat with files securely without cross-session leakage.",
      features: [
        "FAISS vector database isolation by session",
        "FastAPI embedding pipeline",
        "Multi-file document uploading (PDF, TXT)",
        "Contextual chat memory buffer",
        "Streaming responses using Gemini API"
      ],
      tech: ["React", "FastAPI", "LangChain", "FAISS DB", "Express", "Google Gemini"],
      github: "https://github.com/shivapoloju/Company-RAG-Chatbot",
      imageSrc: "/rag_chatbot.png",
      meta: "Isolated FAISS Vector DB Chat",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      id: 5,
      title: "Premium Blog Platform",
      tag: "Full Stack MERN",
      description: "Built with React, Node.js, and MongoDB, featuring secure user auth, post likes, view tracking, and user profile management.",
      longDescription: "A premium Blog Publishing Platform built with React, Node.js, and MongoDB. Features secure JWT user authentication, article creation with rich text editing, post liking and commenting, view tracking metrics, and custom user profile dashboards.",
      features: [
        "JWT secure session token auth",
        "Rich text blog post publisher",
        "Likes, comments, and engagement tracking",
        "Interactive user profile pages",
        "Advanced search and categorization"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/shivapoloju/blog-platform",
      imageSrc: "/blog_platform.png",
      meta: "Secure Blogging Solution",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      id: 6,
      title: "CareerForge Guidance",
      tag: "TypeScript & Career Guidance",
      description: "A comprehensive career guidance and resume crafting portal featuring mock tests, skill alignment, and interview feedback.",
      longDescription: "CareerForge is an interactive, TypeScript-based career development platform. It features resume building, skill alignment quizzes, automated mock testing, and direct feedback reports to guide students and professionals on their career paths.",
      features: [
        "Resume builder with styling templates",
        "Career matching questionnaires",
        "Skill verification testing",
        "Feedback report downloads",
        "Modern TypeScript codebase"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/shivapoloju/CareerForge",
      imageSrc: "/career_forge.png",
      meta: "Skills Verification Portal",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 px-6 relative w-full border-t border-white/5 bg-black/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-8 text-center space-y-4 max-w-xl">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Selected Works</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Explore My Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Drag the rail or use navigation buttons to view detailed snapshots of my latest web development and machine learning projects.
          </p>
        </div>

        {/* 3D Coverflow Slider */}
        <ProjectSlider 
          items={projectsData} 
          onProjectClick={(project) => setSelectedProject(project)} 
        />

        {/* Modal display overlay */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
