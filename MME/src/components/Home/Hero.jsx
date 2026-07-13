import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the hero section and scale the text to reveal the video and content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(textRef.current, {
        scale: 60, // Scale the M text massively
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
      }, 0)
      .to(videoRef.current, {
        scale: 1, // Zoom out video slightly to full frame
        opacity: 1,
        filter: 'brightness(0.4)', // Darker overlay for readability of text
        duration: 2,
        ease: 'power2.inOut'
      }, 0)
      .fromTo(contentRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.5,
          ease: 'power3.out'
        },
        1.2 // Starts revealing as MME zooms out and disappears
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#050505]">
      <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Background Video/Image that scales down to normal */}
        <div 
          ref={videoRef} 
          className="absolute inset-0 z-0 w-full h-full scale-[1.2] opacity-0 origin-center"
        >
          <img 
            src="/home/hero.png" 
            alt="Luxury Corporate Event Management Company in Dubai" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Massive scaling text layer */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-difference">
          <h2 
            ref={textRef} 
            className="text-[30vw] font-display font-bold leading-none tracking-tighter text-white whitespace-nowrap origin-center"
          >
            MME
          </h2>
        </div>

        {/* Hidden Content Layer revealed on scroll - SEO Optimized */}
        <div 
          ref={contentRef}
          className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center opacity-0 max-w-4xl"
        >
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
            <button type="button" disabled className="px-8 py-4 bg-luxury-gold/60 text-luxury-black rounded-full font-medium tracking-wide cursor-not-allowed">
              Book Consultation
            </button>
            <button type="button" disabled className="px-8 py-4 bg-luxury-gold/60 text-luxury-black rounded-full font-medium tracking-wide cursor-not-allowed">
              Request Proposal
            </button>
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
