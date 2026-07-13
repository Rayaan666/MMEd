import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Sound System',
    num: '01',
    desc: 'High-quality speakers and audio equipment for crystal-clear sound throughout your event.',
    img: '/home/1.png',
  },
  {
    title: 'LED Screen',
    num: '02',
    desc: 'Large, vibrant LED screens to display visuals and enhance the overall experience.',
    img: '/home/2.png',
  },
  {
    title: 'Lighting',
    num: '03',
    desc: 'Customized lighting setups including stage lights, ambiance lighting, and special effects.',
    img: '/home/3.png',
  }
];

const Expertise = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      const totalWidth = container.scrollWidth - window.innerWidth;
      
      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
        }
      });
      
      // Image internal parallax
      gsap.utils.toArray('.gallery-image').forEach(img => {
        gsap.to(img, {
          x: 80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
          }
        });
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#050505]">
      <section ref={sectionRef} className="h-screen bg-[#050505] overflow-hidden flex flex-col justify-between pt-28 pb-12 relative">
        <div className="absolute top-4 md:top-8 left-6 md:left-12 z-20 pointer-events-none mix-blend-difference">
          <h2 className="text-[10vw] font-display font-bold leading-none text-white tracking-tighter">EXPERTISE</h2>
        </div>

        <div ref={scrollContainerRef} className="flex gap-16 pl-[20vw] pr-[20vw] items-center h-[55vh] relative z-10 w-max flex-nowrap">
          {services.map((service, index) => (
            <div key={index} className="relative w-[60vw] md:w-[40vw] h-full shrink-0 group overflow-hidden rounded-2xl border border-white/5">
              {/* Removed Grayscale filter */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="gallery-image w-[120%] h-full object-cover origin-left scale-105 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Added solid dark overlay at bottom to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100" />
              
              <div className="absolute top-6 left-6 z-20 mix-blend-difference">
                <span className="text-xl font-display font-bold text-white opacity-80">{service.num}</span>
              </div>
              
              {/* Showing description and title without hover-triggered animations/opacities */}
              <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#e0e0e0] text-xs md:text-sm font-light max-w-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center w-full z-20 mb-4">
          <button type="button" disabled className="px-8 py-3.5 bg-[#C6A86A]/60 text-[#0A0A0A] font-semibold tracking-widest uppercase text-xs rounded-sm shadow-[0_4px_20px_rgba(198,168,106,0.25)] cursor-not-allowed">
            View All Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
