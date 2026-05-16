import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Heart, Zap, Target } from 'lucide-react';

const programs = [
  {
    title: 'Body Building',
    description: 'Transform your physique with high-volume isolation and heavy compound lifts.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=2070',
    tags: ['Mass', 'Power', 'Hypertrophy']
  },
  {
    title: 'Functional HIIT',
    description: 'Bust through plateaus with high-intensity intervals that test your engine.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070',
    tags: ['Cardiac', 'Agility', 'Endurance']
  },
  {
    title: 'Strength Engine',
    description: 'Focus on the big three: Squat, Bench, and Deadlift. Raw strength starting here.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1517838276535-2224424966c5?auto=format&fit=crop&q=80&w=2070',
    tags: ['Heavy', '1RM', 'Olympics']
  },
  {
    title: 'Mobility Flow',
    description: 'Optimize your recovery and range of motion for long-term athletic health.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1571019623129-f48f476a8cce?auto=format&fit=crop&q=80&w=2070',
    tags: ['Flex', 'Recover', 'Stability']
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
              Our <span className="text-neon">Arsenal.</span>
            </h2>
            <p className="text-white/60 text-lg uppercase tracking-wide">
              Specialized training paths designed to break your limits and build your legacy.
            </p>
          </div>
          <button className="text-white font-display font-bold uppercase tracking-widest flex items-center gap-4 hover:text-neon transition-colors group">
            All Programs <div className="w-12 h-px bg-white/20 group-hover:bg-neon transition-colors" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-none"
            >
              <img 
                src={program.image} 
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gym-dark via-gym-dark/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <program.icon className="w-12 h-12 text-neon mb-6 transform group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-display font-black text-white mb-3 group-hover:text-neon transition-colors">
                  {program.title}
                </h3>
                <p className="text-white/50 text-sm mb-6 line-clamp-2 uppercase tracking-tighter">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 uppercase tracking-widest text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_15px_#DFFF00]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
