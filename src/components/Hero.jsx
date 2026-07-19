import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  const subheaders = [
    "Full Stack Developer",
    "GenAI & RAG Developer",
    "AI Solutions Builder"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % subheaders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open for opportunities
          </motion.div>

          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-lg font-medium"
            >
              Hi there, I am
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Shiva Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">Poloju</span>
            </motion.h1>
          </div>

          {/* Animating subtitle */}
          <div className="h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-bold text-gray-300 font-display"
              >
                {subheaders[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            I construct full-stack web architectures and design intelligent AI agent pipelines. Specialize in integrating large language models with vector databases to build production-ready RAG applications.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
          >
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-background font-bold transition-all glow-primary cursor-pointer active:scale-95 text-sm md:text-base"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all cursor-pointer active:scale-95 text-sm md:text-base"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 pt-4 text-gray-500"
          >
            <span className="text-xs uppercase tracking-wider font-semibold">Connect:</span>
            <a href="https://github.com/shivapoloju" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shivasaipoloju/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Floating Terminal Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-md glass-panel rounded-2xl p-6 glow-accent animate-float flex flex-col font-mono text-left shadow-2xl relative border border-white/10">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> shiva.js
              </span>
            </div>

            {/* Code lines */}
            <div className="space-y-1.5 text-xs md:text-sm select-none">
              <p className="text-accent"><span className="text-secondary-dark">const</span> developer <span className="text-gray-400">=</span> <span className="text-yellow-400">{`{`}</span></p>
              <p className="pl-4 text-gray-300">name: <span className="text-green-400">"Shiva Sai Poloju"</span>,</p>
              <p className="pl-4 text-gray-300">role: <span className="text-green-400">"Full Stack & AI Engineer"</span>,</p>
              <p className="pl-4 text-gray-300">location: <span className="text-green-400">"Hyderabad, India"</span>,</p>
              <p className="pl-4 text-gray-300">skills: <span className="text-purple-400">[</span></p>
              <p className="pl-8 text-green-400">"React", "Node.js", "Express",</p>
              <p className="pl-8 text-green-400">"FastAPI", "Python", "Google Gemini",</p>
              <p className="pl-8 text-green-400">"FAISS Vector DB", "LangChain"</p>
              <p className="pl-4 text-purple-400">],</p>
              <p className="pl-4 text-gray-300">loves: <span className="text-green-400">"Solving complex problems"</span>,</p>
              <p className="pl-4 text-gray-300">currentFocus: <span className="text-green-400">"Intelligent RAG Systems"</span></p>
              <p className="text-yellow-400">{`};`}</p>
              
              <div className="pt-4 border-t border-white/5 mt-4 text-[10px] text-gray-500 flex justify-between items-center">
                <span>// 100% test coverage</span>
                <span className="text-green-400">● Active Workspace</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
