import React from 'react';
import { Dumbbell, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

export default function Footer({ setView }: FooterProps) {
  return (
    <footer className="bg-gym-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-1">
            <button 
                onClick={() => setView('home')}
                className="flex items-center gap-2 mb-8 group cursor-pointer bg-transparent border-none outline-none text-left"
            >
              <Dumbbell className="w-10 h-10 text-neon group-hover:rotate-45 transition-transform" />
              <span className="font-display font-bold text-3xl tracking-tighter uppercase italic text-white">
                Gym<span className="text-neon">Junkies</span>
              </span>
            </button>
            <p className="text-white/40 text-sm uppercase tracking-widest leading-relaxed mb-8">
              The ultimate destination for those who live for the grind. No shortcuts. No excuses. Only results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-neon hover:text-gym-dark transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-neon hover:text-gym-dark transition-all duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-neon hover:text-gym-dark transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-black uppercase mb-8 tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Home', view: 'home' },
                { name: 'About Us', view: 'about' },
                { name: 'Programs', href: '#programs' },
                { name: 'Trainers', href: '#trainers' },
                { name: 'Contact Us', view: 'contact' }
              ].map(link => (
                <button 
                  key={link.name} 
                  onClick={() => link.view ? setView(link.view as View) : (window.location.hash = link.href!)}
                  className="text-white/40 hover:text-neon text-sm uppercase tracking-widest transition-colors font-medium cursor-pointer bg-transparent border-none outline-none text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-black uppercase mb-8 tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin className="text-neon shrink-0" size={20} />
                <span className="text-white/40 text-sm uppercase leading-tight font-medium">
                  88 Muscle Avenue, Power District, Iron City, IC 9901
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-neon shrink-0" size={20} />
                <span className="text-white/40 text-sm font-medium">+1 (555) 000-IRON</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-neon shrink-0" size={20} />
                <span className="text-white/40 text-sm font-medium">grit@gymjunkies.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-black uppercase mb-8 tracking-wider">Join Newsletter</h4>
            <p className="text-white/40 text-xs uppercase mb-6 leading-relaxed">
              Get training tips and exclusive gear drops.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-white/5 border border-white/10 px-4 py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-neon transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-neon text-gym-dark px-4 font-display font-bold text-xs uppercase brutalist-border">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 GYM JUNKIES INC. • BUILT FOR THE BOLD.
          </div>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
