import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-gym-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-neon font-display font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-none italic uppercase">
              Join The <br />
              <span className="text-neon">Brotherhood.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Ready to break your plateau? Visit our headquarters or drop us a line. 
              Our commanders are waiting to help you start your transformation.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gym-card p-10 md:p-16 border border-white/5"
          >
            <h2 className="text-3xl font-display font-black text-white uppercase mb-8">Send A Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">FullName</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white text-sm uppercase tracking-widest focus:outline-none focus:border-neon transition-colors"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white text-sm uppercase tracking-widest focus:outline-none focus:border-neon transition-colors"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Training Goal</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white/40 text-sm uppercase tracking-widest focus:outline-none focus:border-neon transition-colors appearance-none">
                  <option>Bodybuilding</option>
                  <option>Strength Training</option>
                  <option>HIIT / Fitness</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white text-sm uppercase tracking-widest focus:outline-none focus:border-neon transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button className="w-full bg-neon text-gym-dark py-5 font-display font-black text-xl uppercase brutalist-border flex items-center justify-center gap-3">
                Send Intel <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: MapPin, title: "Location", detail: "88 Muscle Avenue, Iron City" },
                { icon: Phone, title: "Call Us", detail: "+1 (555) 000-IRON" },
                { icon: Mail, title: "Email", detail: "grit@gymjunkies.com" },
                { icon: Clock, title: "Open Hours", detail: "24/7 Access for Members" }
              ].map((info, i) => (
                <div key={i} className="group">
                  <info.icon className="text-neon mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="text-white font-display font-bold uppercase mb-1 tracking-widest">{info.title}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-tight">{info.detail}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video w-full bg-gym-card border border-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=2070" 
                alt="Map Background"
                className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-neon text-gym-dark p-6 font-display font-black text-2xl brutalist-border">
                  VIEW ON GOOGLE MAPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
