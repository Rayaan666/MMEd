import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

const PopularArticles = ({ popularPosts }) => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  if (!popularPosts || popularPosts.length === 0) return null;

  return (
    <section ref={targetRef} className="py-32 bg-[#090909] overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-6 h-6 text-luxury-gold" />
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
            Trending <span className="text-gradient">Topics</span>
          </h2>
        </div>
        <p className="text-luxury-silver/60 text-lg">The most read insights by event professionals this week.</p>
      </div>

      <div className="relative h-[450px]">
        <motion.div 
          style={{ x }}
          className="absolute top-0 left-6 flex gap-8 w-max pr-12"
        >
          {popularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -10 }}
              className="group w-[400px] h-[400px] rounded-[2rem] relative overflow-hidden bg-black border border-white/10 hover:border-luxury-gold/40 transition-colors duration-500"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-semibold tracking-widest uppercase text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {post.category}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white font-display font-bold text-lg opacity-50 group-hover:opacity-100 group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all duration-300">
                    {index + 1}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4 leading-snug group-hover:text-luxury-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-luxury-silver/60">{post.readTime}</span>
                    <a href={`/blogs/${post.slug}`} className="text-white hover:text-luxury-gold transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularArticles;
