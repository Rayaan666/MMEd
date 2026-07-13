import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-48 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#090909]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-[#090909]/50 z-20" />
        <img
          src="/images/services/final_cta_1783864494363.png"
          alt="Luxury Gala Dinner Stage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-6 block">
              Let's Work Together
            </span>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05] mb-8 text-white">
              Let's Create Your Next <span className="text-gradient">Extraordinary</span> Event
            </h2>
            
            <p className="text-xl text-luxury-silver/80 mb-14 leading-relaxed max-w-2xl mx-auto">
              Partner with MME and experience the difference that world-class creativity, meticulous planning, and flawless execution delivers to every single event.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-10 py-5 bg-luxury-gold text-luxury-black rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300"
              >
                <CalendarDays className="w-6 h-6" />
                Book Consultation
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-10 py-5 border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Request Proposal
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl z-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/3 rounded-full blur-3xl z-20 pointer-events-none" />
    </section>
  );
};

export default FinalCTA;
