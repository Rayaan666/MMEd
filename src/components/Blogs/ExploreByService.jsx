import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartHandshake, Mic2, MonitorPlay, Sparkles, Landmark } from 'lucide-react';

const services = [
  { name: "Corporate Events", icon: <Building2 className="w-8 h-8" /> },
  { name: "Luxury Weddings", icon: <HeartHandshake className="w-8 h-8" /> },
  { name: "Event Production", icon: <Mic2 className="w-8 h-8" /> },
  { name: "Exhibitions", icon: <MonitorPlay className="w-8 h-8" /> },
  { name: "Brand Activations", icon: <Sparkles className="w-8 h-8" /> },
  { name: "Government Events", icon: <Landmark className="w-8 h-8" /> },
];

const ExploreByService = ({ setActiveCategory }) => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 text-white">
            Explore by <span className="text-gradient">Service</span>
          </h2>
          <p className="text-luxury-silver/60">Dive deep into insights specific to your event needs.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveCategory(service.name);
                window.scrollTo({ top: 800, behavior: 'smooth' }); // Scroll to grid
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(198,168,106,0.5)' }}
              className="group flex flex-col items-center text-center gap-4 p-8 rounded-[2rem] glass-card border border-white/5 transition-all duration-300"
            >
              <div className="text-luxury-silver/40 group-hover:text-luxury-gold transition-colors duration-300">
                {service.icon}
              </div>
              <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                {service.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByService;
