import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  const steps = [
    { num: '01', title: 'Conceptualization', desc: 'Decoding the brand DNA to forge a narrative that transcends traditional event boundaries.' },
    { num: '02', title: 'Spatial Design', desc: 'Crafting 3D architectures and spatial journeys that dictate audience emotion and flow.' },
    { num: '03', title: 'Engineering', desc: 'The invisible backbone. Flawless technical, audio-visual, and logistical orchestration.' },
    { num: '04', title: 'The Spectacle', desc: 'Live execution. Every cue hit, every moment captured. Perfection in real-time.' }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the vertical line drawing itself down
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // Reveal step cards as the line passes them
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: i % 2 === 0 ? 50 : -50, filter: 'blur(10px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "top 40%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-[#050505] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-32 relative z-20">
          <h2 className="text-[12vw] md:text-[8vw] font-display font-bold text-stroke-gold uppercase leading-none opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white relative z-10">The Architecture of Impact</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-luxury-gold -translate-x-1/2 origin-top hidden md:block shadow-[0_0_15px_rgba(198,168,106,0.6)]" />

          {steps.map((step, index) => (
            <div key={index} className={`process-step flex flex-col md:flex-row items-center justify-between mb-32 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} relative z-10`}>
                <div className="glass-card p-10 group hover:border-luxury-gold/50 transition-colors duration-700">
                  <h4 className="text-3xl font-display text-white mb-4">{step.title}</h4>
                  <p className="text-[#a0a0a0] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Number Node */}
              <div className="hidden md:flex w-2/12 justify-center relative z-20">
                <div className="w-16 h-16 rounded-full bg-[#050505] border border-luxury-gold flex items-center justify-center relative">
                  <span className="text-luxury-gold font-display font-bold">{step.num}</span>
                  <div className="absolute inset-0 rounded-full border border-luxury-gold scale-[1.3] opacity-30 animate-pulse" />
                </div>
              </div>

              {/* Empty Side for staggering */}
              <div className="hidden md:block w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
