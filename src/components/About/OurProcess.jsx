import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discover', description: 'Understanding your vision and objectives.' },
  { id: '02', title: 'Plan', description: 'Strategic conceptualization and logistics.' },
  { id: '03', title: 'Design', description: 'Creative development and 3D rendering.' },
  { id: '04', title: 'Execute', description: 'Flawless production and on-site management.' },
  { id: '05', title: 'Celebrate', description: 'Delivering an unforgettable experience.' },
];

const OurProcess = () => {
  return (
    <section className="pt-10 md:pt-12 pb-16 md:pb-24 bg-[#0A0A0A] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4"
          >
            <span className="w-6 md:w-8 h-[1px] bg-[#C6A86A]"></span>
            <h2 className="text-[#C6A86A] text-xs md:text-sm tracking-[0.2em] uppercase">Our Process</h2>
            <span className="w-6 md:w-8 h-[1px] bg-[#C6A86A]"></span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif text-white leading-tight"
          >
            How We Bring Magic to Life
          </motion.h3>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full w-full bg-[#C6A86A] origin-left shadow-[0_0_15px_rgba(198,168,106,0.5)]"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 relative group"
              >
                {/* Connecting Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-14 bottom-[-28px] left-7 w-[1px] bg-white/10 -translate-x-1/2">
                    <div className="w-full h-full bg-gradient-to-b from-[#C6A86A] to-transparent" />
                  </div>
                )}

                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#161616] border border-[#C6A86A]/30 flex items-center justify-center relative z-10 mb-0 lg:mb-6 shrink-0 group-hover:bg-[#C6A86A] group-hover:border-[#C6A86A] transition-colors duration-500">
                  <span className="text-base md:text-lg lg:text-xl font-serif text-[#C6A86A] group-hover:text-[#0A0A0A] transition-colors duration-500">
                    {step.id}
                  </span>
                  {/* Outer Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-[#C6A86A] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
                </div>
                
                <div className="min-w-0 pt-1 lg:pt-0">
                  <h4 className="text-xl md:text-2xl font-serif text-white mb-2 lg:mb-3">{step.title}</h4>
                  <p className="text-[#D9D9D9] font-light text-sm leading-relaxed max-w-none lg:max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
