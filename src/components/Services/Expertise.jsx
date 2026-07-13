import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, HeartHandshake, Trophy, Rocket, Sparkles, MonitorPlay, Mic2, Map, Users2, Star, Briefcase } from 'lucide-react';

const expertiseData = [
  {
    title: "Corporate Events",
    description: "High-level corporate gatherings, gala dinners, and strategic meetings.",
    icon: <Building2 className="w-8 h-8 text-luxury-gold" />,
    image: "/images/services/hero_mme_1783864448226.png", // Reusing hero for now or generate specific
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Government Events",
    description: "Protocol-driven events for ministries and official entities.",
    icon: <Landmark className="w-8 h-8 text-luxury-gold" />,
    image: "/images/services/expertise_wedding_1783864504457.png",
    span: "col-span-1",
  },
  {
    title: "Luxury Weddings",
    description: "Bespoke destination weddings and premium celebrations.",
    icon: <HeartHandshake className="w-8 h-8 text-luxury-gold" />,
    image: "/images/services/expertise_wedding_1783864504457.png",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Award Ceremonies",
    description: "Glamorous red carpet events and recognition galas.",
    icon: <Trophy className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Product Launches",
    description: "Immersive brand reveals that captivate audiences.",
    icon: <Rocket className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Brand Activations",
    description: "Experiential marketing and interactive pop-ups.",
    icon: <Sparkles className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Exhibitions",
    description: "Custom stand design and complete booth fabrication.",
    icon: <MonitorPlay className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1 md:col-span-2",
    image: "/images/services/exhibition_services_1783864468880.png",
  },
  {
    title: "Conferences",
    description: "Large-scale summits and professional conventions.",
    icon: <Mic2 className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Roadshows",
    description: "Multi-city promotional tours and mobile experiences.",
    icon: <Map className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "VIP Events",
    description: "Exclusive, invitation-only luxury experiences.",
    icon: <Star className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Networking Events",
    description: "Curated environments for high-level business connections.",
    icon: <Users2 className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1",
  },
  {
    title: "Annual Meetings",
    description: "End-of-year corporate celebrations and AGMs.",
    icon: <Briefcase className="w-8 h-8 text-luxury-gold" />,
    span: "col-span-1 md:col-span-2",
  }
];

const Expertise = () => {
  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6">Our <span className="text-gradient">Expertise</span></h2>
          <p className="text-luxury-silver/80 max-w-2xl mx-auto text-lg">
            A comprehensive suite of event management services tailored to deliver unmatched quality and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass-card border-white/5 hover:border-luxury-gold/50 transition-colors duration-500 ${item.span}`}
            >
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              )}
              
              <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-luxury-gold transition-colors duration-300">{item.title}</h3>
                <p className="text-luxury-silver/70 text-sm transform opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-luxury-gold/0 via-luxury-gold/0 to-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
