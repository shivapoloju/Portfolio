import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  
  // Set up intersection observer to reveal elements on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-gray-200">
      {/* Dynamic Background Particles */}
      <ParticlesBackground />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
