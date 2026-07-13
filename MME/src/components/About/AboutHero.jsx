import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10" />
        <img 
          src="/about/hero.png" 
          alt="Luxury Corporate Gala Event" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-32 pb-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#C6A86A]"></span>
            <span className="text-white text-sm font-medium tracking-wider uppercase">About MME</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
          >
            Crafting Extraordinary Events That Inspire, Connect & Leave Lasting Impressions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#D9D9D9] max-w-xl font-light"
          >
            For over 15 years, MME Event Management LLC has transformed ideas into unforgettable experiences through innovative event planning, world-class production, and flawless execution across Dubai and the UAE.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button type="button" disabled className="px-8 py-4 bg-[#C6A86A]/60 text-[#0A0A0A] font-semibold tracking-wide rounded-sm cursor-not-allowed">
              Explore Our Story
            </button>
            <button type="button" disabled className="px-8 py-4 bg-transparent border border-white/20 text-white/50 font-semibold tracking-wide rounded-sm backdrop-blur-sm cursor-not-allowed">
              View Our Portfolio
            </button>
          </motion.div>
        </div>

        {/* Right Side - Floating Stats Cards */}
        <div className="w-full lg:w-1/2 hidden lg:flex relative h-[500px] justify-center items-center mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-10 right-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-64 transform rotate-6 hover:rotate-0 transition-all duration-500"
          >
            <h3 className="text-[#C6A86A] text-4xl font-serif mb-2">15+</h3>
            <p className="text-white text-sm font-light uppercase tracking-wider">Years Experience</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-64 transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10"
          >
            <h3 className="text-[#C6A86A] text-4xl font-serif mb-2">500+</h3>
            <p className="text-white text-sm font-light uppercase tracking-wider">Successful Events</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 right-10 bg-[#161616]/80 backdrop-blur-xl border border-[#C6A86A]/30 p-6 rounded-2xl w-64 transform rotate-3 hover:rotate-0 transition-all duration-500"
          >
            <h3 className="text-white text-4xl font-serif mb-2">98%</h3>
            <p className="text-[#D9D9D9] text-sm font-light uppercase tracking-wider">Client Satisfaction</p>
          </motion.div>
        </div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-[#C6A86A]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
