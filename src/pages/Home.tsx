import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import WhyUs from '../components/WhyUs';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <WhyUs />
      {/* Full Width Marquee (Recipe 5 style) */}
      <div className="bg-neon py-10 overflow-hidden select-none border-y-4 border-gym-dark">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-12">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-gym-dark font-display font-black text-6xl md:text-8xl flex items-center gap-12 italic uppercase">
              Push Your Limits <span className="text-gym-dark/20">•</span> No Excuses <span className="text-gym-dark/20">•</span> Iron Paradise <span className="text-gym-dark/20">•</span> 
            </span>
          ))}
        </div>
      </div>
      <Trainers />
      <Pricing />
      <Testimonials />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </>
  );
}
