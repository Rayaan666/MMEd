import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    position: 'Marketing Director, TechGlobal',
    text: 'MME Event Management delivered an award-winning product launch that completely exceeded our expectations. Their attention to detail, creative vision, and flawless execution made it the most talked-about event in our industry.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Mohammed Al Mansoori',
    position: 'CEO, Horizon Developments',
    text: 'Partnering with MME for our annual gala dinner was the best decision. Their team brings a level of luxury and sophistication that is unmatched in Dubai. They transformed our vision into an unforgettable masterpiece.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Elena Rostova',
    position: 'Founder, Luxe Weddings',
    text: 'As a partner, I rely heavily on precision and creativity. MME Event Management seamlessly orchestrates the technical and aesthetic aspects of our largest weddings, ensuring every moment feels magical and effortless.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-32 bg-[#161616] relative z-10 overflow-hidden">
      
      {/* Decorative large quote mark */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 opacity-5 pointer-events-none">
        <Quote size={200} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
            <h2 className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Client Testimonials</h2>
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C6A86A] p-1 mb-8">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <p className="text-xl md:text-3xl font-serif text-white leading-relaxed mb-10 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="text-[#C6A86A] font-semibold text-lg uppercase tracking-wider mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#D9D9D9] font-light text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              type="button"
              disabled
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              type="button"
              disabled
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
