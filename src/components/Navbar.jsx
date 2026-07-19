import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  // Track active section and scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      // Identify active section
      const sections = navLinks.map(link => document.querySelector(link.href));
      const buffer = 150; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && scrollPos >= sec.offsetTop - buffer) {
          setActiveSection(navLinks[i].label.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar py-3 shadow-lg shadow-black/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Shiva<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 relative py-1 ${
                activeSection === link.label.toLowerCase()
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.label.toLowerCase() && (
                <motion.span
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/shivapoloju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivasaipoloju/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[60px] left-0 right-0 bg-background/95 border-b border-white/5 backdrop-blur-xl px-6 py-8 flex flex-col space-y-6 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-bold tracking-widest ${
                  activeSection === link.label.toLowerCase() ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/5 w-full my-2" />
            <div className="flex space-x-6 justify-center">
              <a
                href="https://github.com/shivapoloju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 font-semibold text-sm"
              >
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shivasaipoloju/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 font-semibold text-sm"
              >
                <LinkedinIcon className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
