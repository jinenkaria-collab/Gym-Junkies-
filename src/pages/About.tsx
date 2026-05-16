import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-gym-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-neon font-display font-bold uppercase tracking-[0.3em] text-sm mb-4 block">The Genesis</span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-none italic">
              Legacy Of <br />
              <span className="text-neon">The Iron.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10">
              Gym Junkies started in a small basement with nothing but a rusted squat rack and a burning desire for progress. 
              Today, we are the premier destination for those who reject mediocrity and embrace the grind.
            </p>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1769" 
              alt="Gym culture" 
              className="w-full h-full object-cover border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-[20px_20px_0px_#DFFF0020]"
            />
            <div className="absolute -bottom-6 -right-6 bg-neon text-gym-dark font-display font-black p-8 text-4xl">
              10+ YEARS
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8">
              Our <span className="text-neon">Mission.</span>
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-sm mb-12 italic">
              "To forge stronger individuals through relentless intensity and a community that never settles."
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Target, title: "Precision Training", desc: "Every rep counts. We focus on scientific bio-mechanics." },
                { icon: Users, title: "Unbreakable Community", desc: "No ego zone. We push each other to the absolute limit." },
                { icon: Shield, title: "Integrity First", desc: "Real results require real work. No shortcuts allowed here." }
              ].map((value, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-neon/10 flex items-center justify-center text-neon">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold uppercase mb-1 tracking-wider">{value.title}</h4>
                    <p className="text-white/30 text-xs uppercase tracking-tight leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
            Our <span className="text-neon">Core Pillars.</span>
          </h2>
          <p className="text-white/40 uppercase tracking-widest text-sm max-w-2xl mx-auto">
            These values are embedded in every weight dropped and every PR achieved in our facility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Intensity", desc: "We don't do comfortable. Progress lives in the uncomfortable zone." },
            { title: "Loyalty", desc: "Once a Junkie, always a Junkie. We support our brotherhood." },
            { title: "Excellence", desc: "From equipment to coaching, we only offer the best." }
          ].map((pillar, i) => (
            <div key={i} className="bg-gym-card p-12 border border-white/5 hover:border-neon/50 transition-colors">
              <h3 className="text-3xl font-display font-black text-neon mb-6">0{i+1}.</h3>
              <h4 className="text-xl font-display font-bold text-white uppercase mb-4 tracking-tighter">{pillar.title}</h4>
              <p className="text-white/30 text-sm uppercase tracking-widest leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
