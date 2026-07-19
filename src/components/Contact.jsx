import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "shivasaipoloju5@gmail.com",
      href: "mailto:shivasaipoloju5@gmail.com"
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-accent" />,
      label: "GitHub",
      value: "github.com/shivapoloju",
      href: "https://github.com/shivapoloju"
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-secondary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shivasaipoloju/",
      href: "https://www.linkedin.com/in/shivasaipoloju/"
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      label: "Calls & WhatsApp",
      value: "+91 72070 62605",
      href: "https://wa.me/917207062605"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Direct Background Submission via FormSubmit API to shivasaipoloju5@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/shivasaipoloju5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          _captcha: "false"
        })
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger canvas-confetti burst celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#38bdf8', '#a855f7']
      });

      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success alert after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (err) {
      console.warn("Direct API submission failed, falling back to mailto client:", err);
      
      // Fallback: pre-filled mailto redirect if network request fails
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:shivasaipoloju5@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative w-full border-t border-white/5 bg-transparent overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4 max-w-xl">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Get In Touch</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let's Collaborate On Something <span className="text-primary">Great</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Have an open position, project proposal, or query? Drop a message below, and let's connect!
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
            {contactDetails.map((detail, idx) => {
              const cardContent = (
                <div className="p-5 rounded-2xl bg-card border border-white/5 flex flex-col gap-4 shadow-lg hover:border-white/12 transition-all group relative h-full">
                  <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{detail.label}</span>
                    <p className="text-sm font-semibold text-white mt-1 break-all">{detail.value}</p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a 
                  key={idx} 
                  href={detail.href} 
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={idx} className="block h-full hover:-translate-y-1 transition-transform duration-300">
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 rounded-2xl glass-panel border border-white/10 shadow-2xl relative">
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-3 text-left"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase font-bold text-gray-400 tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase font-bold text-gray-400 tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase font-bold text-gray-400 tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Proposal / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase font-bold text-gray-400 tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, role, or ideas..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-background font-bold transition-all glow-primary cursor-pointer active:scale-[0.98] text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Attribution */}
        <div className="pt-24 pb-8 border-t border-white/5 mt-20 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Shiva Sai Poloju. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-red-500 animate-pulse">❤️</span> using React & Tailwind
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
