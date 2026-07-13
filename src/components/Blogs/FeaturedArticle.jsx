import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const FeaturedArticle = ({ post }) => {
  if (!post) return null;

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display font-semibold text-white">Featured Editor's Pick</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-luxury-gold/30 to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative rounded-[2rem] overflow-hidden bg-[#090909] border border-white/5 hover:border-luxury-gold/30 transition-colors duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Image Side */}
            <div className="relative w-full h-[400px] lg:h-full overflow-hidden">
              <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-10 lg:p-16 relative z-20">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full border border-luxury-gold text-luxury-gold text-xs font-semibold tracking-widest uppercase">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-luxury-silver/60 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-luxury-silver/60 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-display font-semibold text-white mb-6 leading-[1.15] group-hover:text-luxury-gold transition-colors duration-500">
                {post.title}
              </h3>

              <p className="text-lg text-luxury-silver/80 leading-relaxed mb-10 font-light max-w-xl">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img src={post.author.avatar || "/images/services/event_production_1783864459690.png"} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-medium">{post.author.name}</p>
                    <p className="text-luxury-silver/60 text-xs">{post.author.role}</p>
                  </div>
                </div>

                <a href={`/blogs/${post.slug}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-luxury-gold group-hover:text-luxury-black group-hover:border-luxury-gold transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
