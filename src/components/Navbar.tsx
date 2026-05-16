import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X } from 'lucide-react';

import { View } from '../App';

interface NavbarProps {
  setView: (view: View) => void;
  currentView: View;
}

export default function Navbar({ setView, currentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs', type: 'anchor' },
    { name: 'About', view: 'about', type: 'route' },
    { name: 'Trainers', href: '#trainers', type: 'anchor' },
    { name: 'Membership', href: '#membership', type: 'anchor' },
    { name: 'Contact', view: 'contact', type: 'route' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.type === 'route') {
      setView(link.view);
    } else {
      if (currentView !== 'home') {
        setView('home');
        // Small delay to allow home to render before scrolling
        setTimeout(() => {
          const el = document.getElementById(link.href.replace('#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gym-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('home')} 
          className="flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
        >
          <Dumbbell className="w-8 h-8 text-neon transform group-hover:rotate-45 transition-transform" />
          <span className="font-display font-bold text-2xl tracking-tighter uppercase italic text-white text-left">
            Gym<span className="text-neon">Junkies</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link)}
              className={`transition-colors cursor-pointer bg-transparent border-none outline-none ${
                (link.type === 'route' && currentView === link.view) ? 'text-neon' : 'text-white/70 hover:text-neon'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setView('contact')}
            className="bg-neon text-gym-dark px-6 py-2 rounded-none font-display font-bold text-sm uppercase brutalist-border transition-all cursor-pointer"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gym-dark border-b border-white/10 flex flex-col items-center py-10 gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link)}
                className={`text-xl font-display font-medium uppercase transition-colors cursor-pointer bg-transparent border-none outline-none ${
                    (link.type === 'route' && currentView === link.view) ? 'text-neon' : 'text-white/80 hover:text-neon'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
                onClick={() => setView('contact')}
                className="bg-neon text-gym-dark px-10 py-3 rounded-none font-display font-bold uppercase brutalist-border cursor-pointer"
            >
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
