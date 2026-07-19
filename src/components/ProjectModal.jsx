import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Server, Database, Brain, Monitor } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  
  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Helper to render inline custom Architecture Diagram based on project type
  const renderArchitecture = (id) => {
    switch (id) {
      case 0: // LifeLine AI
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4 px-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-center">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-red-950/30 border border-red-500/20 text-red-400">
              <Monitor className="w-3.5 h-3.5" /> React (Offline UI)
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-green-950/30 border border-green-500/20 text-green-400">
              <Server className="w-3.5 h-3.5" /> FastAPI Engine
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-400">
              <Brain className="w-3.5 h-3.5" /> Gemini Vision & Whisper
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-blue-950/30 border border-blue-500/20 text-blue-400">
              <Database className="w-3.5 h-3.5" /> FAISS Medical KB
            </div>
          </div>
        );
      case 1: // AI Web App Builder
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-center">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
              <Monitor className="w-4 h-4" /> React Frontend
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-green-950/30 border border-green-500/20 text-green-400">
              <Server className="w-4 h-4" /> Node.js Orchestrator
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-400">
              <Brain className="w-4 h-4" /> Gemini AI Engine
            </div>
          </div>
        );
      case 2: // AI Mock Interview Assistant
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-center">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
              <Monitor className="w-4 h-4" /> Audio Recording (UI)
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/30 border border-blue-500/20 text-blue-400">
              <Brain className="w-4 h-4" /> Web Speech (STT)
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-green-950/30 border border-green-500/20 text-green-400">
              <Server className="w-4 h-4" /> NLP.js Evaluator
            </div>
          </div>
        );
      case 4: // Company RAG Chatbot
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4 px-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-center">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
              <Monitor className="w-3.5 h-3.5" /> Client
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-green-950/30 border border-green-500/20 text-green-400">
              <Server className="w-3.5 h-3.5" /> FastAPI/Express
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-400">
              <Brain className="w-3.5 h-3.5" /> LangChain
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-yellow-950/30 border border-yellow-500/20 text-yellow-400">
              <Database className="w-3.5 h-3.5" /> FAISS DB
            </div>
          </div>
        );
      default: // Normal MERN/Web App
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-center">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
              <Monitor className="w-4 h-4" /> Web Client (React)
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-green-950/30 border border-green-500/20 text-green-400">
              <Server className="w-4 h-4" /> API Server (Node/Vite)
            </div>
            <div className="text-gray-600">➔</div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
              <Database className="w-4 h-4" /> MongoDB / Cache
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="w-full max-w-2xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] flex flex-col"
      >
        {/* Header bar */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-black/25">
          <div className="space-y-1 text-left">
            <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${project.badgeColor}`}>
              {project.tag}
            </span>
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">
              {project.title}
            </h3>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Paragraph copy */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Project Overview</h4>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture flow chart */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">System Architecture</h4>
            {renderArchitecture(project.id)}
          </div>

          {/* Core features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Key Capabilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology stack */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/5 bg-black/25 flex justify-end gap-3 text-sm">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-colors"
          >
            Close
          </button>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-dark text-background font-bold transition-colors shadow-lg shadow-primary/10"
          >
            <GithubIcon className="w-4 h-4" /> View Source
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectModal;
