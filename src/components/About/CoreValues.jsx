import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Trophy, Palette, Crosshair, ShieldCheck, HeartHandshake } from 'lucide-react';

const coreValues = [
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries to create fresh, modern, and unparalleled event concepts.',
    icon: Lightbulb,
  },
  {
    title: 'Excellence',
    description: 'Committing to the highest standards of quality in every aspect of our production and service.',
    icon: Trophy,
  },
  {
    title: 'Creativity',
    description: 'Infusing unique artistic vision into every project to ensure a memorable and bespoke experience.',
    icon: Palette,
  },
  {
    title: 'Precision',
    description: 'Meticulous attention to detail and flawless execution from the initial brief to the final curtain call.',
    icon: Crosshair,
  },
  {
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and unwavering ethical standards in all our partnerships.',
    icon: ShieldCheck,
  },
  {
    title: 'Client Commitment',
    description: 'Prioritizing our clients’ goals to build lasting relationships based on trust and success.',
    icon: HeartHandshake,
  },
];

const CoreValues = () => {
  return (
    <section className="pt-4 pb-20 bg-[#0A0A0A] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
            <h2 className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Core Values</h2>
            <span className="w-8 h-[1px] bg-[#C6A86A]"></span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            The Principles That Drive Us
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-white/5 hover:bg-[#C6A86A] transition-colors duration-500"
            >
              <div className="relative h-full bg-[#161616] rounded-2xl p-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C6A86A]/50 transition-colors duration-500">
                  <value.icon className="w-6 h-6 text-[#D9D9D9] group-hover:text-[#C6A86A] transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-serif text-white mb-4 group-hover:text-[#C6A86A] transition-colors duration-500">
                  {value.title}
                </h4>
                
                <p className="text-[#D9D9D9] font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
