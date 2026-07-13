import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { gsap } from 'gsap';

const trendingKeywords = [
  "Corporate Galas", "LED Stage Design", "Luxury Weddings 2026", "Event Tech", "Exhibition Stands"
];

const BlogHero = ({ searchQuery, setSearchQuery }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.querySelectorAll('.word'), {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.04,
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  const titleWords = "Dubai Event Insights & Inspiration".split(' ');

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#090909]/80 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent z-10" />
        <img
          src="/images/services/event_production_1783864459690.png"
          alt="Luxury Corporate Event Background"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_15s_ease-in-out_infinite]"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-luxury-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6 block"
        >
          Editorial Magazine
        </motion.span>

        <div className="overflow-hidden mb-8 max-w-5xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05] text-white"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <span className="word inline-block text-white">
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-luxury-silver/80 max-w-3xl font-light leading-relaxed mb-12"
        >
          Expert insights, event trends, exhibition ideas, production knowledge, and planning guides from Dubai's leading luxury event management specialists.
        </motion.p>

        {/* ── Search Bar ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-2xl relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 group-hover:border-luxury-gold/50 transition-colors duration-300">
              <Search className="w-6 h-6 text-luxury-silver/50" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event planning articles, trends, production..." 
                className="w-full bg-transparent border-none outline-none text-white px-4 py-4 placeholder:text-luxury-silver/40 font-light text-lg"
              />
              <button className="px-8 py-4 bg-luxury-gold text-luxury-black rounded-full font-semibold hover:bg-white transition-colors duration-300">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <span className="text-xs text-luxury-silver/50 uppercase tracking-widest">Trending:</span>
            {trendingKeywords.map((keyword, i) => (
              <button 
                key={i}
                onClick={() => setSearchQuery(keyword)}
                className="text-xs text-luxury-silver/80 hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm"
              >
                {keyword}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
