import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const productionServices = [
  "Stage Design & Fabrication",
  "Massive LED Screens",
  "Intelligent Lighting Systems",
  "Professional Audio Systems",
  "Structural Rigging",
  "Special Effects (SFX)",
  "Live Streaming Services",
  "Broadcast Quality Production",
  "Multi-Camera Coverage",
  "Drone Aerial Filming"
];

const EventProduction = () => {
  return (
    <section className="py-32 relative bg-[#090909]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Huge Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[700px] rounded-[2rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay z-10" />
            <img 
              src="/images/services/event_production_1783864459690.png" 
              alt="Event Production Setup" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Glowing border effect */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none" />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Technical Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                World-Class <span className="text-gradient">Event Production</span>
              </h2>
              <p className="text-luxury-silver/80 text-lg leading-relaxed">
                We provide state-of-the-art technical production services, ensuring every visual, auditory, and structural element is flawlessly executed to international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {productionServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
                  <span className="text-luxury-silver text-sm md:text-base font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8"
            >
              <button className="border-b border-luxury-gold text-luxury-gold pb-1 hover:text-white hover:border-white transition-colors duration-300 font-semibold tracking-wide uppercase text-sm">
                View Tech Rider Specs
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventProduction;
