import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const exhibitionData = [
  {
    id: '01',
    title: 'Custom Stand Design',
    description: 'Bespoke architectural designs that perfectly encapsulate your brand identity and draw massive footfall.',
    image: '/images/services/exhibition_services_1783864468880.png',
  },
  {
    id: '02',
    title: 'Stand Fabrication',
    description: 'In-house premium build quality using luxury materials, ensuring your stand looks flawless from every angle.',
    image: '/images/services/hero_mme_1783864448226.png',
  },
  {
    id: '03',
    title: 'Digital Displays',
    description: 'Integration of seamless LED walls, transparent OLEDs, and interactive touch points.',
    image: '/images/services/event_production_1783864459690.png',
  },
  {
    id: '04',
    title: 'Visitor Engagement',
    description: 'Gamification, VR/AR experiences, and lead generation technologies embedded in the stand.',
    image: '/images/services/creative_studio_1783864484125.png',
  }
];

const ExhibitionServices = () => {
  const [activeCard, setActiveCard] = useState('01');

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6">Exhibition <span className="text-gradient">Showcase</span></h2>
            <p className="text-luxury-silver/80 text-lg">
              Award-winning exhibition stand design and build services that command attention on the busiest trade show floors in Dubai and beyond.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
          {exhibitionData.map((item) => {
            const isActive = activeCard === item.id;
            
            return (
              <motion.div
                key={item.id}
                layout
                onMouseEnter={() => setActiveCard(item.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'lg:w-[60%] w-full h-[300px] lg:h-full' : 'lg:w-[13.33%] w-full h-[100px] lg:h-full'
                }`}
              >
                <div className="absolute inset-0 bg-[#111] z-0" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? 'opacity-60' : 'opacity-20'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-t from-transparent via-transparent to-[#090909]/90 z-10" />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end lg:justify-between">
                  <div className={`hidden lg:flex items-center justify-between transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                    <span className="text-luxury-gold font-display text-2xl font-semibold">{item.id}</span>
                  </div>

                  <div className="flex items-center lg:items-start lg:flex-col justify-between h-full lg:justify-end gap-4">
                    <h3 className={`font-display font-semibold whitespace-nowrap transition-all duration-500 ${
                      isActive ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl lg:-rotate-90 lg:-translate-y-12 origin-bottom-left'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="max-w-md"
                        >
                          <p className="text-luxury-silver/80 hidden lg:block text-base mb-6">
                            {item.description}
                          </p>
                          <button className="w-12 h-12 rounded-full bg-luxury-gold text-[#090909] flex items-center justify-center hover:bg-white transition-colors duration-300">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionServices;
