import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Annual Government Summit',
    category: 'Government Events',
    year: '2024',
    image: '/images/services/hero_mme_1783864448226.png',
  },
  {
    title: 'Luxury Brand Launch',
    category: 'Product Launch',
    year: '2024',
    image: '/images/services/event_production_1783864459690.png',
  },
  {
    title: 'International Exhibition Stand',
    category: 'Exhibition Services',
    year: '2023',
    image: '/images/services/exhibition_services_1783864468880.png',
  },
  {
    title: 'Royal Wedding Celebration',
    category: 'Luxury Weddings',
    year: '2023',
    image: '/images/services/expertise_wedding_1783864504457.png',
  },
  {
    title: 'Corporate Gala Dinner',
    category: 'Corporate Events',
    year: '2024',
    image: '/images/services/final_cta_1783864494363.png',
  },
];

const FeaturedProjects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-semibold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-luxury-black transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-luxury-black transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-[2rem]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.05,
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute bottom-12 left-12 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
                  {project.category} · {project.year}
                </span>
                <h3 className="text-4xl md:text-6xl font-display font-semibold text-white">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex gap-3 justify-center mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                index === current ? 'w-10 bg-luxury-gold' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
