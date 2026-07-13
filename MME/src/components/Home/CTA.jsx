import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <section
      className="relative py-16 md:py-20 bg-[#050505] overflow-hidden border-t border-white/5"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/home/CTA.png" 
          alt="Luxury Event Atmosphere" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/75 to-[#050505]/80" />
      </div>

      {/* Hidden SEO Schema Data */}
      <meta itemProp="name" content="MME Event Management LLC" />
      <meta itemProp="description" content="Dubai's premier luxury event management company specializing in corporate events, product launches, exhibition stand design, audio visual production, and award ceremonies across the UAE." />
      <meta itemProp="url" content="https://www.mmeevents.ae" />
      <meta itemProp="telephone" content="+971-55-735-4031" />
      <meta itemProp="address" content="Dubai, United Arab Emirates" />
      <meta itemProp="areaServed" content="Dubai, UAE, Middle East" />
      <meta itemProp="priceRange" content="$$$" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] bg-luxury-gold/5 rounded-full blur-[150px]" />
      </div>

      {/* Large ghosted background text for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.025] overflow-hidden w-full text-center">
        <span className="text-[18vw] font-display font-bold text-white leading-none uppercase tracking-tighter whitespace-nowrap">
          MME EVENTS
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[1px] bg-luxury-gold" />
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold">
            Event Management Company Dubai
          </span>
        </motion.div>

        {/* Primary SEO-optimized heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            id="cta-heading"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-[7vw] font-display font-bold leading-[0.85] tracking-tighter text-white"
          >
            Plan Your Next<br />
            <span className="text-stroke-gold">Luxury Event</span><br />
            with MME
          </motion.h2>
        </div>

        {/* SEO-rich subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#888] text-base md:text-lg font-light leading-relaxed max-w-2xl mt-8 mb-12"
          itemProp="description"
        >
          From high-end <strong className="text-white font-medium">corporate event management in Dubai</strong> to stunning{' '}
          <strong className="text-white font-medium">exhibition stand design across the UAE</strong>, MME delivers
          bespoke event production, audio-visual excellence, and award-winning brand activations.
          Trusted by Fortune 500 companies and government entities alike.
        </motion.p>

        {/* CTA Buttons + Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              disabled
              className="group relative px-10 py-5 bg-luxury-gold/60 text-[#050505] rounded-full overflow-hidden font-display font-bold text-base uppercase tracking-wider inline-flex items-center gap-3 cursor-not-allowed"
              aria-label="Book a Consultation with MME Event Management Dubai"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowUpRight size={18} className="relative z-10" />
            </button>

            <button
              type="button"
              disabled
              className="group px-10 py-5 border border-white/20 text-white/50 rounded-full font-display font-bold text-base uppercase tracking-wider inline-flex items-center gap-3 cursor-not-allowed"
              aria-label="Request a Proposal from MME Event Management"
            >
              Request Proposal
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Contact Info — inline, editorial style */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 text-right">
            <div
              className="group flex flex-col items-start sm:items-end gap-1"
              aria-label="Call MME Event Management Dubai"
              itemProp="telephone"
            >
              <span className="text-[#555] text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
                <Phone size={10} /> Call Us
              </span>
              <span className="text-white text-sm font-medium">
                +971 55 735 4031
              </span>
            </div>

            <div
              className="group flex flex-col items-start sm:items-end gap-1"
              aria-label="Email MME Event Management"
              itemProp="email"
            >
              <span className="text-[#555] text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
                <Mail size={10} /> Email Us
              </span>
              <span className="text-white text-sm font-medium">
                info@mmeeventmanagement.com
              </span>
            </div>
          </div>
        </motion.div>

        {/* SEO keywords footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-12 pt-6 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-3"
        >
          {[
            'Corporate Events Dubai',
            'Product Launch UAE',
            'Exhibition Stand Design',
            'Conference Management',
            'Audio Visual Production',
            'Award Ceremonies Dubai',
            'Brand Activations UAE',
            'Luxury Weddings Dubai',
          ].map((kw) => (
            <span key={kw} className="text-[#3a3a3a] text-[10px] uppercase tracking-[0.2em] font-medium hover:text-luxury-gold/50 transition-colors duration-300 cursor-default">
              {kw}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
