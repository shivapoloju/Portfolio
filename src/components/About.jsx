import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Server, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      number: "6+", 
      label: "Open Source Projects", 
      desc: "Full-stack apps, AI systems, and screening utilities.",
      icon: <Briefcase className="w-5 h-5 text-primary" /> 
    },
    { 
      number: "GenAI", 
      label: "Expertise", 
      desc: "LLMs, LangChain, FAISS database and session isolation.",
      icon: <Cpu className="w-5 h-5 text-accent" /> 
    },
    { 
      number: "Full Stack", 
      label: "Capabilities", 
      desc: "React, Node.js, FastAPI, Python and MongoDB pipelines.",
      icon: <Server className="w-5 h-5 text-secondary" /> 
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-6 relative w-full border-t border-white/5 bg-black/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="mb-16 text-center space-y-4 max-w-xl">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">About Me</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Crafting Intelligent Software with <span className="text-primary">Passion</span>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              I am a dedicated software engineer specializing in building full-stack applications and integrating artificial intelligence into user workflows. My development philosophy is centered around creating clean, performant, and secure solutions.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              With a background in modern web technologies and Generative AI, I thrive on bridging the gap between sophisticated machine learning capabilities and responsive, user-friendly frontend interfaces. I've designed and delivered multiple products ranging from AI-powered interview coaches and resume screeners to enterprise chatbots and publishing platforms.
            </p>

            {/* Profile Info Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Role</span>
                  <p className="text-sm font-semibold text-white">Full Stack & AI Engineer</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</span>
                  <p className="text-sm font-semibold text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-6 w-full">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-card border border-white/5 flex gap-5 items-start text-left shadow-lg hover:border-white/15 transition-colors relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="space-y-1 relative z-10">
                  <span className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">{stat.number}</span>
                  <h4 className="text-sm font-bold text-gray-300">{stat.label}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
