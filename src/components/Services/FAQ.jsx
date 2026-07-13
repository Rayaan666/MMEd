import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How long does event planning take?",
    answer: "The timeline depends on the scale and complexity of your event. Large-scale government events or international exhibitions typically require 3-6 months of planning. For corporate events and product launches, 6-10 weeks is standard. We also accommodate urgent projects where our full team mobilizes to meet compressed timelines without compromising quality."
  },
  {
    question: "Do you provide complete turnkey event solutions?",
    answer: "Absolutely. MME is a full-service, end-to-end event management company. We handle concept development, venue sourcing, creative design, stage and set fabrication, AV production, logistics, catering coordination, talent, entertainment, and post-event reporting — everything under one roof, with one point of contact."
  },
  {
    question: "Can you manage government events in the UAE?",
    answer: "Yes. We have extensive experience managing high-profile government summits, ministerial meetings, national day celebrations, and protocol-sensitive events. We understand the unique requirements and standards expected by UAE government entities, and our dedicated government events team operates with the highest levels of confidentiality and professionalism."
  },
  {
    question: "Do you provide AV production services in-house?",
    answer: "Yes. Our in-house AV production division operates state-of-the-art equipment including massive LED walls, intelligent lighting rigs, world-class audio systems, broadcast cameras, and live streaming infrastructure. We do not subcontract — your production is handled by our own certified technicians, ensuring consistent quality and reliability."
  },
  {
    question: "Can you design and fabricate custom exhibition stands?",
    answer: "Yes, exhibition stand design and fabrication is one of our core competencies. Our in-house design studio creates bespoke stand concepts in 3D, and our fabrication team builds each stand to exacting standards. We cover everything from modular rental stands to fully custom architectural builds with integrated technology, lighting and visitor engagement systems."
  },
  {
    question: "Do you manage international events outside the UAE?",
    answer: "Yes. MME has successfully managed events in Saudi Arabia, Qatar, Egypt, UK, USA, and across Europe. Our international project management capabilities allow us to deploy teams globally, coordinate local vendors, and ensure the same MME quality standard regardless of geography."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Sticky Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-luxury-silver/70 text-lg leading-relaxed mb-8">
              Everything you need to know about working with MME. Can't find an answer? Our team is happy to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border-b border-luxury-gold text-luxury-gold pb-1 hover:text-white hover:border-white transition-colors duration-300 font-semibold uppercase text-sm tracking-widest"
            >
              Contact Our Team
            </a>
          </motion.div>

          {/* Right FAQ List */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-3xl border transition-colors duration-500 overflow-hidden ${
                  activeIndex === index 
                    ? 'border-luxury-gold/30 bg-luxury-gold/5' 
                    : 'border-white/5 glass-card hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="font-display font-semibold text-lg pr-8">{faq.question}</span>
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
                      <p className="px-8 pb-8 text-luxury-silver/70 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
