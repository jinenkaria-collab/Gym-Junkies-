import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '1,999',
    features: [
      { text: 'Gym Access 24/7', available: true },
      { text: 'Basic Training Plan', available: true },
      { text: 'Locker Room Access', available: true },
      { text: 'Personal Trainer', available: false },
      { text: 'Custom Diet Plan', available: false },
    ],
    recommended: false
  },
  {
    name: 'Pro Junkie',
    price: '3,999',
    features: [
      { text: 'Gym Access 24/7', available: true },
      { text: 'Advanced Training Plan', available: true },
      { text: 'Recovery Zone Access', available: true },
      { text: '2x Session Trainer/mo', available: true },
      { text: 'Custom Diet Plan', available: false },
    ],
    recommended: true
  },
  {
    name: 'Elite Titan',
    price: '6,999',
    features: [
      { text: 'Gym Access 24/7', available: true },
      { text: 'Infinite Training Plans', available: true },
      { text: 'Full Recovery Spa', available: true },
      { text: 'Personal Coach 24/7', available: true },
      { text: 'Full Custom Macro Plan', available: true },
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="membership" className="py-24 bg-gym-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 text-[20rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none -mr-20 -mt-20">
        GEAR
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4">
            Pick Your <span className="text-neon">Poison.</span>
          </h2>
          <p className="text-white/40 uppercase tracking-widest text-sm">
            Invest in yourself. No excuses, only results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 border transition-all duration-500 ${
                plan.recommended 
                ? 'bg-neon text-gym-dark border-neon shadow-[0_20px_50px_rgba(223,255,0,0.15)] scale-105 z-10' 
                : 'bg-gym-card text-white border-white/10 hover:border-neon/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-gym-dark text-neon text-[10px] uppercase font-black px-4 py-1 tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-display font-black uppercase mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-black">₹</span>
                  <span className="text-6xl font-display font-black tracking-tighter">{plan.price}</span>
                  <span className="opacity-60 text-sm uppercase font-bold">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    {feature.available 
                      ? <Check className={`w-5 h-5 ${plan.recommended ? 'text-gym-dark' : 'text-neon'}`} /> 
                      : <X className="w-5 h-5 opacity-40" />
                    }
                    <span className={`text-sm uppercase tracking-wide font-medium ${!feature.available ? 'opacity-40 line-through' : ''}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 font-display font-black uppercase text-xl transition-all ${
                plan.recommended 
                ? 'bg-gym-dark text-neon hover:scale-105 active:scale-95' 
                : 'bg-neon text-gym-dark brutalist-border'
              }`}>
                Join The Cult
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
