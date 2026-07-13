import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full bg-[#050505]">
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/home/hero.png" 
            alt="Luxury Corporate Event Management Company in Dubai" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col items-center justify-center text-center max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-luxury-gold" />
            <span className="uppercase tracking-[0.3em] text-luxury-gold text-xs md:text-sm font-semibold">Premium Event Agency Dubai</span>
            <div className="w-12 h-[1px] bg-luxury-gold" />
          </div>

          {/* Primary SEO H1 Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
            Leading <span className="text-gradient">Event Management</span> Company in Dubai
          </h1>

          {/* Secondary SEO Optimized Copy */}
          <p className="text-base md:text-xl text-[#d5d5d5] max-w-3xl mb-12 font-light leading-relaxed">
            MME Event Management LLC is the premier choice for luxury corporate event organizers, bespoke exhibition stand design, and production in Dubai & across the UAE. We craft unforgettable brand experiences, audio-visual spectacles, and high-end gala productions.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact?request=consultation" className="px-8 py-4 bg-luxury-gold text-luxury-black rounded-full font-medium tracking-wide hover:bg-white transition-colors">
              Book Consultation
            </Link>
            <Link to="/contact?request=proposal" className="px-8 py-4 border border-white/40 text-white rounded-full font-medium tracking-wide hover:border-luxury-gold hover:text-luxury-gold transition-colors">
              Request Proposal
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 right-10 z-20 flex flex-col items-center gap-4 mix-blend-difference pointer-events-none">
          <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
            <div className="w-full h-full bg-white absolute top-0 animate-[shimmer_2s_infinite]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
