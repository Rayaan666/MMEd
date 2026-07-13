import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Luxury Event Experiences',
    description: 'We specialize in crafting high-end, bespoke events that exude elegance, sophistication, and exclusivity tailored perfectly to your brand.',
    image: '/about/1.png',
  },
  {
    title: 'Experienced Production Team',
    description: 'Our world-class professionals bring decades of combined experience, ensuring every technical and creative aspect is handled with absolute mastery.',
    image: '/about/2.png',
  },
  {
    title: 'Creative Concept Development',
    description: 'From initial mood boards to 3D renders, our creative studio develops unique, award-winning concepts that captivate and inspire.',
    image: '/about/3.png',
  },
  {
    title: 'Complete Event Management',
    description: 'A seamless, end-to-end turnkey solution where we manage everything—from venue sourcing and permits to logistics and execution.',
    image: '/about/4.png',
  }
];

const WhyChoose = () => {
  return (
    <section className="pt-12 pb-24 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
            <h2 className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Why Choose MME</h2>
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Setting the Benchmark for Excellence
          </motion.h3>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#C6A86A] text-xl font-serif italic border-b border-[#C6A86A]/30 pb-1">0{index + 1}</span>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-serif text-white mb-6 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[#D9D9D9] text-lg font-light leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
