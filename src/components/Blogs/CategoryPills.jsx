import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  "All Articles",
  "Corporate Events",
  "Luxury Weddings",
  "Government Events",
  "Event Production",
  "Exhibitions",
  "Conference Planning",
  "Brand Activations",
  "Event Technology",
  "Event Planning Tips"
];

const CategoryPills = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full py-8 overflow-x-auto scrollbar-hide border-b border-white/5 bg-[#050505] sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 w-max">
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat || (cat === "All Articles" && activeCategory === "");
            
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(cat === "All Articles" ? "" : cat)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-luxury-black' : 'text-luxury-silver/70 hover:text-white bg-white/5 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-luxury-gold rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPills;
