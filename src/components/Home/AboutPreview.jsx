import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Split text reveal
      const lines = textRef.current.querySelectorAll('.text-line');
      
      gsap.fromTo(lines, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Image Parallax
      gsap.fromTo(imageRef.current,
        { y: -30, scale: 1.1 },
        {
          y: 30,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 md:py-24 bg-[#050505] overflow-hidden border-b border-white/5"
      aria-label="About MME Event Management"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid Structure - Centered items to eliminate dead vertical space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* SEO Keyword Tagline */}
            <div className="mb-4">
              <span className="text-luxury-gold uppercase tracking-[0.25em] text-xs font-bold block">
                Premium Event Management Company Dubai
              </span>
            </div>

            {/* Massive styled typography - Reduced spacing & size for perfect alignment */}
            <header ref={textRef} className="relative z-20 mb-8">
              <div className="overflow-hidden">
                <h2 className="text-line text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase leading-[0.95] tracking-tighter">
                  Who <span className="text-stroke">We</span>
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-line text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase leading-[0.95] tracking-tighter">
                  Are?
                </h2>
              </div>
            </header>

            {/* Description & Stats Sub-grid - Tighter layouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
              <div className="max-w-sm">
                {/* Secondary SEO Subheading */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  Leading Luxury Corporate Event Organizers in UAE
                </h3>
                <p className="text-[#a0a0a0] text-sm md:text-base font-light leading-relaxed">
                  We design spaces, moments, and interactions that exist for a fleeting time but leave an eternal mark on brand legacy. As Dubai's premier event planning agency, true luxury lies in our unseen production details.
                </p>
              </div>
              
              <div className="flex flex-row sm:flex-col justify-start gap-6 sm:pl-6 sm:border-l border-white/10">
                <div>
                  <h4 className="text-4xl font-display text-white mb-0.5 font-bold">15<span className="text-luxury-gold">+</span></h4>
                  <p className="text-[#666] text-[10px] uppercase tracking-[0.2em] font-semibold">Years of Mastery</p>
                </div>
                <div className="sm:border-t border-white/5 sm:pt-3">
                  <h4 className="text-4xl font-display text-white mb-0.5 font-bold">500<span className="text-luxury-gold">+</span></h4>
                  <p className="text-[#666] text-[10px] uppercase tracking-[0.2em] font-semibold">Global Productions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Image Card (Scaled down to match text height perfectly) */}
          <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] max-h-[450px] rounded-2xl overflow-hidden glass-card p-1.5 border border-white/10">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  ref={imageRef}
                  src="/home/whoweare.png" 
                  alt="Luxury Corporate Event Management Company in Dubai - MME Events" 
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
              </div>
            </div>
            
            {/* Absolute accent tag */}
            <div className="absolute -bottom-4 -left-4 bg-[#0c0c0c] border border-white/10 px-4 py-2.5 rounded-xl z-20 shadow-xl hidden sm:block">
              <p className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] font-bold">Dubai, UAE</p>
              <p className="text-white text-xs font-display mt-0.5">Exceptional Execution</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;
