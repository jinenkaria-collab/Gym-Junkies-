import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus "The Tank" Thorne',
    role: 'Head Bodybuilding Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=1974',
    specialty: 'Hypertrophy & PPD'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Nutrition & HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1769',
    specialty: 'Fat Loss & Bio-Mechanics'
  },
  {
    name: 'Alex Rivera',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=1887',
    specialty: 'Powerlifting Expert'
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-gym-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-6">
            The <span className="text-neon">Commanders.</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/50 uppercase tracking-widest text-sm italic">
            Seasoned veterans of the iron game. They don't just teach, they lead.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-display font-black mb-1 group-hover:text-neon transition-colors">
                  {trainer.name}
                </h3>
                <div className="text-neon text-xs font-bold uppercase tracking-widest mb-4">
                  {trainer.role}
                </div>
                <p className="text-white/40 text-xs uppercase mb-6 italic tracking-tight">
                  Expertise: {trainer.specialty}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="p-2 border border-white/10 hover:border-neon hover:text-neon transition-all"><Instagram size={18} /></a>
                  <a href="#" className="p-2 border border-white/10 hover:border-neon hover:text-neon transition-all"><Twitter size={18} /></a>
                  <a href="#" className="p-2 border border-white/10 hover:border-neon hover:text-neon transition-all"><Linkedin size={18} /></a>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -top-10 -right-4 text-9xl font-display font-black text-white/5 pointer-events-none group-hover:text-neon/5 transition-colors">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
