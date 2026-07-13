import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What goes into planning a corporate event in Dubai?",
    answer: "Planning a corporate event in Dubai involves securing government permits (DTCM), sourcing luxury venues, organizing high-end AV production, and managing complex logistics. Partnering with an experienced local agency like MME ensures all regulatory and quality standards are met."
  },
  {
    question: "How do I choose the right venue in the UAE?",
    answer: "Venue selection depends heavily on your guest count, brand image, and technical requirements. Dubai offers world-class hotels, dedicated exhibition centers like DWTC, and unique outdoor spaces. Our team conducts thorough site visits to guarantee the venue aligns perfectly with your vision."
  },
  {
    question: "What are the latest trends in exhibition stand design?",
    answer: "Current trends focus heavily on interactive technology and sustainability. We're seeing massive integrations of curved LED screens, transparent OLED displays, gamification elements for lead capture, and the use of eco-friendly, reusable architectural materials."
  },
  {
    question: "Why is professional AV production crucial for my event?",
    answer: "Audio Visual production is the backbone of the attendee experience. Poor sound or lighting can ruin a great concept. Professional AV ensures clear communication, cinematic atmosphere, and seamless execution, reflecting the premium nature of your brand."
  },
  {
    question: "How far in advance should I start planning a large-scale event?",
    answer: "For large-scale conferences, government summits, or international exhibitions, we recommend starting the planning process 6 to 9 months in advance. This allows ample time for permits, custom fabrication, and securing top-tier venues and talent."
  }
];

const BlogFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-24 bg-[#090909] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Knowledge Base</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Event Planning <span className="text-gradient">FAQ</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border transition-colors duration-500 overflow-hidden ${
                activeIndex === index 
                  ? 'border-luxury-gold/30 bg-luxury-gold/5' 
                  : 'border-white/5 bg-[#050505] hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="font-display font-semibold text-lg md:text-xl pr-8 text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-300 ${
                    activeIndex === index 
                      ? 'bg-luxury-gold border-luxury-gold text-luxury-black' 
                      : 'border-white/10 text-luxury-silver'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-6 md:px-8 pb-8 text-luxury-silver/70 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFAQ;
