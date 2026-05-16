import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { number: '15+', label: 'Elite Trainers', detail: 'Certified & Dedicated' },
  { number: '500+', label: 'Active Junkies', detail: 'Growing Brotherhood' },
  { number: '120+', label: 'Modern Items', detail: 'High-End Equipment' },
  { number: '07+', label: 'Gym Locations', detail: 'Nationwide Network' },
];

export default function Stats() {
  return (
    <section className="bg-gym-dark py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-6"
            >
              <div className="text-6xl md:text-8xl font-display font-black text-white/5 absolute -top-4 -left-2 group-hover:text-neon/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="relative">
                <div className="text-4xl md:text-5xl font-display font-bold text-neon mb-1">
                  {stat.number}
                </div>
                <div className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-tighter">
                  {stat.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
