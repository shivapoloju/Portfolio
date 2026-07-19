import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript (ES6+)",
          glowColor: "rgba(234, 179, 8, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#eab308]">
              <rect width="24" height="24" rx="4" />
              <text x="18" y="19" fill="black" fontSize="11" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">JS</text>
            </svg>
          )
        },
        {
          name: "Python",
          glowColor: "rgba(56, 189, 248, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#38bdf8]">
              <path d="M12 2C8 2 8 3.5 8 5H12V7.5H8.5C6.5 7.5 5.5 8.5 5.5 10.5C5.5 12.5 6.5 13.5 8.5 13.5H9.5V12.5C9.5 11 10.5 10 12 10H16C18 10 18.5 9 18.5 7C18.5 5 18 2 12 2Z" fill="#38bdf8" />
              <path d="M12 22C16 22 16 20.5 16 19H12V16.5H15.5C17.5 16.5 18.5 15.5 18.5 13.5C18.5 11.5 17.5 10.5 15.5 10.5H14.5V11.5C14.5 13 13.5 14 12 14H8C6 14 5.5 15 5.5 17C5.5 19 6 22 12 22Z" fill="#eab308" />
            </svg>
          )
        },
        {
          name: "SQL",
          glowColor: "rgba(14, 165, 233, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#0ea5e9]">
              <ellipse cx="12" cy="6" rx="8" ry="3" />
              <path d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6" />
              <path d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12" />
              <text x="12" y="14" fill="#0ea5e9" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL</text>
            </svg>
          )
        },
        {
          name: "HTML5",
          glowColor: "rgba(249, 115, 22, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#f97316]">
              <path d="M3 3L5 19L12 21L19 19L21 3H3ZM16.5 7.5H8L8.3 10.5H16L15.3 16.2L12 17.1L8.7 16.2L8.5 13.5H10.8L10.9 14.6L12 14.9L13.1 14.6L13.3 12.5H8.2L7.5 5.5H16.7L16.5 7.5Z" />
            </svg>
          )
        },
        {
          name: "CSS3",
          glowColor: "rgba(59, 130, 246, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#3b82f6]">
              <path d="M3 3L5 19L12 21L19 19L21 3H3ZM16.5 7.5H8L8.3 10.5H14L13.6 14.5L12 15L10.4 14.5L10.3 13H8.1L8.3 16.2L12 17.2L15.7 16.2L16.3 9.5H8.1L7.9 7.5H16.5V7.5Z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          glowColor: "rgba(56, 189, 248, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#38bdf8]">
              <circle cx="12" cy="12" r="2" fill="#38bdf8" />
              <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(0 12 12)" />
              <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
              <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
            </svg>
          )
        },
        {
          name: "Vite",
          glowColor: "rgba(168, 85, 247, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#a855f7]">
              <path d="M12 2L3 7L12 22L21 7L12 2Z" fill="rgba(168, 85, 247, 0.2)" />
              <path d="M12 4L7 8.5L11 12L9 18L17 9.5L12.5 9.5L15 5.5L12 4Z" fill="#fbbf24" />
            </svg>
          )
        },
        {
          name: "Tailwind CSS",
          glowColor: "rgba(6, 182, 212, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#06b6d4]">
              <path d="M12 6C8.5 6 6 8.5 6 12C6 15.5 8.5 18 12 18C15.5 18 18 15.5 18 12C18 8.5 15.5 6 12 6ZM12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15Z" />
              <path d="M18.5 7.5C18.5 7.5 21 10 21 12C21 14 18.5 16.5 18.5 16.5" stroke="#06b6d4" strokeWidth="1.5" />
              <path d="M5.5 7.5C5.5 7.5 3 10 3 12C3 14 5.5 16.5 5.5 16.5" stroke="#06b6d4" strokeWidth="1.5" />
            </svg>
          )
        },
        {
          name: "Bootstrap",
          glowColor: "rgba(147, 51, 234, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#9333ea]">
              <rect width="24" height="24" rx="5" />
              <text x="12" y="17" fill="white" fontSize="14" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">B</text>
            </svg>
          )
        },
        {
          name: "React Router",
          glowColor: "rgba(239, 68, 68, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#ef4444]">
              <circle cx="6" cy="6" r="3" fill="#ef4444" />
              <circle cx="18" cy="18" r="3" fill="#ef4444" />
              <path d="M6 9V14C6 16 8 18 10 18H15" strokeWidth="2" />
              <path d="M12 6H18V12" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "Responsive Web Design",
          glowColor: "rgba(16, 185, 129, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#10b981]">
              <rect x="2" y="3" width="14" height="12" rx="2" />
              <path d="M6 19H12" strokeWidth="2" />
              <path d="M9 15V19" />
              <rect x="14" y="9" width="8" height="12" rx="2" fill="#030303" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="0.75" fill="#10b981" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          glowColor: "rgba(34, 197, 94, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#22c55e]">
              <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" />
              <path d="M12 2V11M12 11L4 6.5M12 11L20 6.5" />
              <circle cx="12" cy="11" r="2" fill="#22c55e" />
            </svg>
          )
        },
        {
          name: "Express.js",
          glowColor: "rgba(255, 255, 255, 0.3)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-gray-200">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M7 9H11M7 12H10M7 15H11" />
              <path d="M14 9L17 15M17 9L14 15" />
            </svg>
          )
        },
        {
          name: "FastAPI",
          glowColor: "rgba(13, 148, 136, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#0d9488]">
              <rect width="24" height="24" rx="4" />
              <path d="M12 4L6 13H11.5L10 20L18 11H12.5L12 4Z" fill="white" />
            </svg>
          )
        },
        {
          name: "REST APIs",
          glowColor: "rgba(245, 158, 11, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#f59e0b]">
              <rect x="2" y="8" width="6" height="8" rx="2" fill="#f59e0b" fillOpacity="0.2" />
              <rect x="16" y="8" width="6" height="8" rx="2" fill="#f59e0b" fillOpacity="0.2" />
              <path d="M8 12H16" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" fill="#f59e0b" />
            </svg>
          )
        },
        {
          name: "JWT Authentication",
          glowColor: "rgba(234, 179, 8, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#eab308]">
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" />
              <circle cx="12" cy="15.5" r="1.5" fill="#eab308" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          glowColor: "rgba(34, 197, 94, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#22c55e]">
              <path d="M12 1.5C12 1.5 8 7 8 11.5C8 16 12 22.5 12 22.5C12 22.5 16 16 16 11.5C16 7 12 1.5 12 1.5Z" />
              <path d="M12 1.5V22.5" stroke="white" strokeWidth="1" />
              <path d="M12 7.5C12 7.5 10 9 10 11.5C10 14 12 16.5 12 16.5" fill="none" stroke="white" strokeWidth="1.2" />
            </svg>
          )
        },
        {
          name: "Mongoose",
          glowColor: "rgba(239, 68, 68, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#ef4444]">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
              <circle cx="12" cy="12" r="3" fill="white" />
            </svg>
          )
        },
        {
          name: "MySQL",
          glowColor: "rgba(37, 99, 235, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#2563eb]">
              <ellipse cx="12" cy="6" rx="8" ry="3" />
              <path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" />
              <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" />
              <path d="M8 12L12 16L16 10" stroke="#00d8ff" strokeWidth="1.5" />
            </svg>
          )
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        {
          name: "Generative AI",
          glowColor: "rgba(168, 85, 247, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#a855f7]">
              <path d="M12 2C12 2 12.5 9.5 14.5 11.5C16.5 13.5 24 14 24 14C24 14 16.5 14.5 14.5 16.5C12.5 18.5 12 26 12 26C12 26 11.5 18.5 9.5 16.5C7.5 14.5 0 14 0 14C0 14 7.5 13.5 9.5 11.5C11.5 9.5 12 2 12 2Z" />
            </svg>
          )
        },
        {
          name: "Google Gemini API",
          glowColor: "rgba(56, 189, 248, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#38bdf8]">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#38bdf8" fillOpacity="0.3" />
              <circle cx="12" cy="12" r="3" fill="#38bdf8" />
            </svg>
          )
        },
        {
          name: "OpenAI API",
          glowColor: "rgba(16, 185, 129, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#10b981]">
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="#10b981" />
              <path d="M12 4V20M4 12H20" strokeWidth="1.5" />
            </svg>
          )
        },
        {
          name: "Prompt Engineering",
          glowColor: "rgba(251, 191, 36, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#fbbf24]">
              <path d="M4 17L10 11L4 5" strokeWidth="2" />
              <path d="M12 19H20" strokeWidth="2" />
              <path d="M19 5L15 9" stroke="#a855f7" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "RAG Systems",
          glowColor: "rgba(99, 102, 241, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#6366f1]">
              <rect x="3" y="4" width="10" height="14" rx="2" />
              <path d="M13 10H20L17 17H10" />
              <circle cx="17" cy="17" r="2" fill="#6366f1" />
            </svg>
          )
        },
        {
          name: "AI Chatbots",
          glowColor: "rgba(236, 72, 153, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#ec4899]">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="#ec4899" fillOpacity="0.1" />
              <circle cx="9" cy="11" r="1.5" fill="#ec4899" />
              <circle cx="15" cy="11" r="1.5" fill="#ec4899" />
              <path d="M9 15C10 16 14 16 15 15" strokeWidth="1.5" />
              <path d="M12 2V6" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "Resume Screening Systems",
          glowColor: "rgba(14, 165, 233, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#0ea5e9]">
              <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" />
              <path d="M14 2V8H20" />
              <path d="M9 13L11 15L15 10" stroke="#10b981" strokeWidth="2" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          glowColor: "rgba(249, 115, 22, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#f97316]">
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M6 9V15" />
              <path d="M18 9V12C18 14 15 15 12 15" />
            </svg>
          )
        },
        {
          name: "GitHub",
          glowColor: "rgba(255, 255, 255, 0.3)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-white">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          )
        },
        {
          name: "Postman",
          glowColor: "rgba(249, 115, 22, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#f97316]">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12L16 7L13 17L11 13L8 12Z" fill="white" />
            </svg>
          )
        },
        {
          name: "VS Code",
          glowColor: "rgba(59, 130, 246, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#3b82f6]">
              <path d="M17.5 3L8.5 10.5L3.5 6.5L1.5 8L6.5 12L1.5 16L3.5 17.5L8.5 13.5L17.5 21L22.5 18.5V5.5L17.5 3ZM17.5 16.5L11.5 12L17.5 7.5V16.5Z" />
            </svg>
          )
        },
        {
          name: "Vercel",
          glowColor: "rgba(255, 255, 255, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
              <path d="M12 2L24 22H0L12 2Z" />
            </svg>
          )
        },
        {
          name: "Render",
          glowColor: "rgba(6, 182, 212, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#06b6d4]">
              <rect width="24" height="24" rx="5" />
              <path d="M7 17V7H13C15.2 7 17 8.8 17 11C17 13.2 15.2 15 13 15H10V17H7ZM10 12H13C13.5 12 14 11.5 14 11C14 10.5 13.5 10 13 10H10V12Z" fill="white" />
            </svg>
          )
        },
        {
          name: "MongoDB Atlas",
          glowColor: "rgba(34, 197, 94, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#22c55e]">
              <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              <path d="M12 4C12 4 9 8 9 12C9 16 12 20 12 20C12 20 15 16 15 12C15 8 12 4 12 4Z" fill="#22c55e" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        {
          name: "Data Structures & Algorithms",
          glowColor: "rgba(168, 85, 247, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#a855f7]">
              <circle cx="12" cy="5" r="2.5" fill="#a855f7" />
              <circle cx="6" cy="18" r="2.5" fill="#a855f7" />
              <circle cx="18" cy="18" r="2.5" fill="#a855f7" />
              <path d="M12 7.5V12M12 12L6 15.5M12 12L18 15.5" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "Object-Oriented Programming",
          glowColor: "rgba(56, 189, 248, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#38bdf8]">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="#38bdf8" fillOpacity="0.2" />
              <rect x="13" y="13" width="8" height="8" rx="2" fill="#38bdf8" fillOpacity="0.2" />
              <path d="M11 7H17V13" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "DBMS",
          glowColor: "rgba(14, 165, 233, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#0ea5e9]">
              <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#0ea5e9" fillOpacity="0.3" />
              <ellipse cx="12" cy="12" rx="7" ry="2.5" />
              <ellipse cx="12" cy="19" rx="7" ry="2.5" />
              <path d="M5 5V19M19 5V19" strokeWidth="1.5" />
            </svg>
          )
        },
        {
          name: "Operating Systems",
          glowColor: "rgba(245, 158, 11, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#f59e0b]">
              <rect x="5" y="5" width="14" height="14" rx="3" />
              <rect x="9" y="9" width="6" height="6" fill="#f59e0b" />
              <path d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: "Computer Networks",
          glowColor: "rgba(16, 185, 129, 0.4)",
          icon: (
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[1.5] stroke-[#10b981]">
              <rect x="9" y="3" width="6" height="4" rx="1" fill="#10b981" />
              <rect x="3" y="17" width="6" height="4" rx="1" fill="#10b981" />
              <rect x="15" y="17" width="6" height="4" rx="1" fill="#10b981" />
              <path d="M12 7V13M6 17V13H18V17" strokeWidth="2" />
            </svg>
          )
        }
      ]
    }
  ];

  const tabList = ['All', ...categories.map(c => c.title)];

  const filteredCategories = activeTab === 'All' 
    ? categories 
    : categories.filter(c => c.title === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 px-6 relative w-full border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-12 space-y-4 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Technical Skills</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A comprehensive overview of programming languages, frontend/backend frameworks, AI engines, databases, tools, and computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-primary text-background shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Skills Content */}
        <div className="space-y-14">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6 text-left">
              {/* Category Subheading */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Skills Grid for this Category */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4,
                      scale: 1.04,
                      borderColor: skill.glowColor,
                      boxShadow: `0 8px 20px -4px ${skill.glowColor}, 0 0 10px ${skill.glowColor}`
                    }}
                    className="p-4 rounded-2xl bg-card/70 border border-white/5 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 text-center group"
                  >
                    {/* Skill Icon */}
                    <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
