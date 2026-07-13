import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Landmark, Hotel, Stethoscope, GraduationCap, 
  Car, Gem, Monitor, ShoppingBag, Scissors, Building, Banknote
} from 'lucide-react';

const industries = [
  { icon: <Briefcase className="w-8 h-8" />, name: 'Corporate' },
  { icon: <Landmark className="w-8 h-8" />, name: 'Government' },
  { icon: <Hotel className="w-8 h-8" />, name: 'Hospitality' },
  { icon: <Stethoscope className="w-8 h-8" />, name: 'Healthcare' },
  { icon: <GraduationCap className="w-8 h-8" />, name: 'Education' },
  { icon: <Car className="w-8 h-8" />, name: 'Automotive' },
  { icon: <Gem className="w-8 h-8" />, name: 'Luxury Brands' },
  { icon: <Monitor className="w-8 h-8" />, name: 'Technology' },
  { icon: <ShoppingBag className="w-8 h-8" />, name: 'Retail' },
  { icon: <Scissors className="w-8 h-8" />, name: 'Fashion' },
  { icon: <Building className="w-8 h-8" />, name: 'Real Estate' },
  { icon: <Banknote className="w-8 h-8" />, name: 'Banking' },
];

const Industries = () => {
  return (
    <section className="py-32 bg-[#090909]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Sectors We Serve</span>
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-luxury-silver/70 max-w-2xl mx-auto text-lg">
            From government summits to luxury fashion weeks, our expertise spans every industry in the UAE and the wider region.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, borderColor: 'rgba(198,168,106,0.5)' }}
              className="group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl glass-card border border-white/5 transition-all duration-500 cursor-default"
            >
              <div className="text-white/30 group-hover:text-luxury-gold transition-colors duration-500">
                {industry.icon}
              </div>
              <span className="text-sm font-medium text-luxury-silver/70 group-hover:text-white transition-colors duration-300 text-center">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
