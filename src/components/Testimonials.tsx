import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "This place saved me. The energy here is unlike any other commercial gym. It's raw, it's real, and you're surrounded by people who actually work.",
    author: "James Miller",
    plan: "Pro Junkie Member"
  },
  {
    text: "Elite equipment and even better coaching. Marcus helped me put 50kg on my total in just 3 months. If you want results, this is it.",
    author: "Sarah Chen",
    plan: "Elite Titan Member"
  },
  {
    text: "Finally a gym that doesn't play pop music and smells like hard work. Best decision I made for my fitness journey.",
    author: "David Ross",
    plan: "Basic Member"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gym-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="w-16 h-16 text-neon mb-6 opacity-20" />
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
            Words From The <span className="text-neon">Brotherhood.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gym-card p-10 border border-white/5 relative group"
            >
              <div className="text-neon/20 font-display font-black text-6xl absolute -top-4 -left-2 select-none group-hover:text-neon/40 transition-colors">
                “
              </div>
              <p className="text-white/60 text-lg italic mb-8 relative z-10 font-light leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="text-white font-display font-bold uppercase tracking-widest text-sm">
                  {review.author}
                </div>
                <div className="text-neon text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  {review.plan}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
