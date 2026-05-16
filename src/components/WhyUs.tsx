import React from 'react';
import { ShieldCheck, Trophy, Users, Zap } from 'lucide-react';

const reasons = [
  {
    title: 'Certified Elite Trainers',
    desc: 'Our coaches are active competitors and industry veterans with 10+ years of experience.',
    icon: Trophy
  },
  {
    title: 'High-End Modern Gear',
    desc: 'Equipped with the latest from Rogue, Hammer Strength, and Life Fitness.',
    icon: Zap
  },
  {
    title: 'Supportive Brotherhood',
    desc: 'Join a community that actually wants you to succeed. No ego, just grit.',
    icon: Users
  },
  {
    title: 'Secure & Clean Environment',
    desc: 'Medical-grade sanitation protocols and 24/7 security for your peace of mind.',
    icon: ShieldCheck
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gym-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-neon font-display font-medium uppercase tracking-[0.3em] text-xs mb-4 block">Our Difference</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
              Why Join The <br /> <span className="text-neon">Movement?</span>
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-sm mb-12 leading-relaxed">
              Gym Junkies isn't just a place to sweat. It's a high-performance environment designed for maximum adaptation and results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="group">
                  <reason.icon className="w-8 h-8 text-neon mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-display font-bold uppercase mb-2 group-hover:text-neon transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-white/30 text-xs uppercase leading-relaxed tracking-tighter">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-neon to-transparent absolute -inset-4 opacity-10 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1769" 
              alt="Gym culture" 
              className="relative z-10 w-full h-full object-cover border border-white/5 grayscale saturate-50 hover:grayscale-0 transition-all duration-700"
            />
            {/* Branding Overlay */}
            <div className="absolute bottom-10 -left-10 z-20 bg-neon text-gym-dark px-8 py-4 font-display font-black text-3xl uppercase -rotate-6 shadow-[10px_10px_0px_#0A0A0A]">
              NO PAIN NO GAIN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
