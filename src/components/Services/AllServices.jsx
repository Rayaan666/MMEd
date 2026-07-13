import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Corporate Events',
    description: 'We craft high-level corporate gatherings, award ceremonies, and strategic meetings that reflect your brand’s prestige and professionalism. From concept to flawless execution, we manage every detail.',
    image: '/images/services/hero_mme_1783864448226.png',
  },
  {
    title: 'Luxury Weddings',
    description: 'Bespoke destination weddings and premium celebrations designed to be unforgettable. Our dedicated team curates breathtaking atmospheres, ensuring your special day is nothing short of magical.',
    image: '/images/services/expertise_wedding_1783864504457.png',
  },
  {
    title: 'Exhibition Services',
    description: 'Award-winning exhibition stand design and build services. We create custom, architectural booths with interactive digital displays that command attention on the busiest trade show floors.',
    image: '/images/services/exhibition_services_1783864468880.png',
  },
  {
    title: 'AV Production',
    description: 'State-of-the-art technical production services. We provide massive LED screens, intelligent lighting systems, and professional audio setups to ensure your event looks and sounds spectacular.',
    image: '/images/services/event_production_1783864459690.png',
  },
  {
    title: 'Government Events',
    description: 'Protocol-driven events for ministries and official entities. We have extensive experience managing high-profile summits with the utmost confidentiality, security, and precision.',
    image: '/images/services/final_cta_1783864494363.png',
  },
  {
    title: 'Creative Studio',
    description: 'Our in-house design team brings your vision to life before it’s even built. We offer 3D visualization, brand identity creation, and motion graphics to ensure complete aesthetic cohesion.',
    image: '/images/services/creative_studio_1783864484125.png',
  }
];

const AllServices = () => {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Offerings</span>
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6">
            Comprehensive <span className="text-gradient">Services</span>
          </h2>
          <p className="text-luxury-silver/80 max-w-2xl mx-auto text-lg">
            Delivering excellence across a diverse spectrum of event requirements, tailored to your unique vision.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group">
                     {/* Glow behind image */}
                    <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none group-hover:border-luxury-gold/30 transition-colors duration-500" />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-luxury-gold/50 font-display font-bold text-3xl">
                        {String(index + 1).padStart(2, '0')}
                     </span>
                     <div className="h-[1px] w-12 bg-luxury-gold/30" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-luxury-silver/80 leading-relaxed font-light mb-8 max-w-lg">
                    {service.description}
                  </p>

                  <Link
                    to={`/contact?request=proposal&service=${encodeURIComponent(service.title)}`}
                    className="group inline-flex items-center gap-2 text-luxury-gold uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
