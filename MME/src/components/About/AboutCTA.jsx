import React from 'react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/about/CTA.png" 
          alt="Luxury Event Atmosphere" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/80 to-[#0A0A0A]/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-[#C6A86A]/30 bg-[#C6A86A]/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C6A86A]"></span>
            <span className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Let's Work Together</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Ready to Create Something <span className="text-[#C6A86A] italic">Extraordinary?</span>
          </h2>
          
          <p className="text-xl text-[#D9D9D9] font-light max-w-3xl mx-auto mb-12">
            Partner with MME Event Management LLC to transform your vision into unforgettable experiences through exceptional planning, creative production, and flawless execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button type="button" disabled className="w-full sm:w-auto px-10 py-5 bg-[#C6A86A]/60 text-[#0A0A0A] font-semibold tracking-wide rounded-sm shadow-[0_0_20px_rgba(198,168,106,0.3)] cursor-not-allowed">
              Request Proposal
            </button>
            <button type="button" disabled className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white/50 font-semibold tracking-wide rounded-sm backdrop-blur-sm cursor-not-allowed">
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
