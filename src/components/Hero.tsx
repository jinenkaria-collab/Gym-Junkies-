import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-gym-dark">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gym-dark via-gym-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-neon font-display font-semibold tracking-[0.3em] uppercase mb-4 text-sm">
              Premium Fitness Collective
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] text-white uppercase italic mb-8">
              Push Your <br />
              <span className="text-stroke">Limits.</span> <br />
              <span className="text-neon">Unbreak</span> You.
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed">
              We provide the tools, the intensity, and the brotherhood. 
              You bring the sweat and the grit. It's time to build the strongest version of yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon text-gym-dark px-10 py-5 font-display font-bold text-xl uppercase brutalist-border flex items-center gap-3"
              >
                Start Training <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="flex items-center gap-4 text-white uppercase font-display font-bold tracking-widest group"
              >
                <span className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon group-hover:text-neon transition-colors">
                  <Play className="w-6 h-6 fill-current" />
                </span>
                Witness results
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Label (Recipe 11 style) */}
      <div className="absolute right-6 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-[10px] uppercase tracking-[1em] text-white/30 font-display">
          EST. 2024 • RAW INTENSITY • MODERN GEAR
        </span>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden lg:block p-6 bg-gym-card/50 backdrop-blur-md border border-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-neon flex items-center justify-center text-gym-dark">
            <span className="font-display font-black text-2xl">24</span>
          </div>
          <div>
            <div className="text-white font-bold leading-none">HOURS</div>
            <div className="text-white/40 text-xs">OPEN ACCESS</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
