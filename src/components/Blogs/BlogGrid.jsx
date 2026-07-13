import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

const BlogGrid = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center text-luxury-silver/60 text-lg">
        No articles found matching your criteria.
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#050505] min-h-[600px]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -8 }}
                className="group relative flex flex-col glass-card border border-white/5 hover:border-luxury-gold/40 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-[#0A0A0A]"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#090909]/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-semibold tracking-widest uppercase text-luxury-gold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-luxury-silver/50 mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-AE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-white mb-4 line-clamp-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-luxury-silver/70 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3">
                      <img src={post.author.avatar || "/images/services/event_production_1783864459690.png"} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-white/90">{post.author.name}</span>
                    </div>
                    <a href={`/blogs/${post.slug}`} className="text-luxury-gold hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;
