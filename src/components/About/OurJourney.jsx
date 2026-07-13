import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timeline = [
  { year: '2010', title: 'Company Established', description: 'MME Event Management LLC was founded in Dubai with a vision to redefine luxury events.' },
  { year: '2013', title: 'Corporate Expansion', description: 'Expanded operations to handle large-scale corporate events and conferences across the UAE.' },
  { year: '2016', title: 'Exhibition Industry', description: 'Successfully entered the competitive exhibition industry, managing grand national pavilions.' },
  { year: '2019', title: '500+ Events Delivered', description: 'Reached a major milestone of delivering over 500 successful, high-profile events.' },
  { year: '2022', title: 'Premium Brand Recognition', description: 'Recognized as one of the premier luxury event management companies in the Middle East.' },
  { year: 'Today', title: 'Leading the Future', description: 'Continuing to innovate and set new industry benchmarks for world-class production.' },
];

const OurJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the line drawing based on scroll
  const scaleY = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A86A]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
            <h2 className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Our Journey</h2>
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            A Legacy of Excellence
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#C6A86A] via-[#C6A86A] to-transparent"
            />
          </div>

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center mb-16 last:mb-0">
                
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#C6A86A] z-10"
                />

                {/* Content */}
                <div className={`w-full flex ${isEven ? 'md:justify-end' : 'md:justify-start'} pl-12 md:pl-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                  >
                    <h4 className="text-5xl font-serif text-[#C6A86A]/20 mb-2 absolute -top-4 -z-10 select-none">
                      {item.year}
                    </h4>
                    <span className="inline-block text-[#C6A86A] text-xl font-serif mb-2">{item.year}</span>
                    <h5 className="text-2xl font-serif text-white mb-3">{item.title}</h5>
                    <p className="text-[#D9D9D9] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurJourney;
