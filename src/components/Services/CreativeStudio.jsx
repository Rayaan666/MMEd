import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const studioServices = [
  "Concept Development",
  "3D Visualization",
  "Brand Identity",
  "Event Theme Design",
  "Content Creation",
  "Stage Graphics",
  "Motion Graphics",
  "Digital Assets",
  "Social Media Creatives",
  "Photography Direction",
  "Videography Planning"
];

const CreativeStudio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={containerRef} className="py-32 relative min-h-[900px] overflow-hidden flex items-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 -top-40 -bottom-40 z-0"
      >
        <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-[2px] z-10" />
        <img 
          src="/images/services/creative_studio_1783864484125.png" 
          alt="MME Creative Studio" 
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              In-House Design
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-semibold mb-8 text-white">
              The <span className="text-gradient">Creative</span> Studio
            </h2>
            <p className="text-xl text-luxury-silver/90 leading-relaxed mb-12 max-w-2xl">
              Where imagination meets execution. Our in-house creative team designs every touchpoint of your event, from massive 3D stage renders to pixel-perfect motion graphics, ensuring complete brand cohesion.
            </p>
          </motion.div>

          {/* Floating Tags */}
          <div className="flex flex-wrap gap-4 max-w-3xl">
            {studioServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5, borderColor: '#C6A86A' }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium cursor-default transition-colors duration-300"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute right-[10%] top-[20%] w-64 h-64 border border-luxury-gold/20 rounded-full blur-[1px] hidden lg:block z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-[5%] bottom-[10%] w-96 h-96 border border-white/5 rounded-full blur-[2px] hidden lg:block z-10"
      />
    </section>
  );
};

export default CreativeStudio;
