import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "MME completely transformed our annual summit into a world-class experience. The production quality was nothing short of breathtaking, and every single detail was executed flawlessly.",
    name: "Ahmed Al Rashidi",
    title: "Director of Corporate Affairs",
    company: "Emirates Investment Authority",
    rating: 5,
  },
  {
    quote: "Their creative team designed an exhibition stand that stopped every single visitor in their tracks. We received compliments from competitors. The ROI was exceptional.",
    name: "Sarah Mitchell",
    title: "Head of Marketing",
    company: "Global Pharma LLC",
    rating: 5,
  },
  {
    quote: "From the initial concept to the final curtain call, MME delivered a product launch that generated more media coverage than we've ever seen. An incredible team.",
    name: "Khalid Al Maktoum",
    title: "CEO",
    company: "Prestige Auto Group",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Testimonials = () => {
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
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Client Stories</span>
          <h2 className="text-4xl md:text-6xl font-display font-semibold">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8, borderColor: 'rgba(198,168,106,0.3)' }}
              className="glass-card p-10 rounded-3xl border border-white/5 transition-all duration-500 flex flex-col gap-8 relative overflow-hidden group"
            >
              {/* Decorative Quote */}
              <span className="absolute -top-6 -left-2 text-[200px] font-display font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                ))}
              </div>

              <blockquote className="text-luxury-silver/90 text-lg leading-relaxed italic flex-1 relative z-10">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-display font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-luxury-gold transition-colors duration-300">{t.name}</p>
                  <p className="text-xs text-luxury-silver/50">{t.title}, {t.company}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
