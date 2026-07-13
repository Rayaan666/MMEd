import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "MME transformed our annual gala into a cinematic experience that left every guest speechless. The attention to detail was unparalleled.",
    name: "Sarah Al-Rashidi",
    title: "VP Corporate Affairs",
    company: "Emirates Group",
    initial: "S",
  },
  {
    quote: "From concept to execution, the MME team operated with a level of precision and creativity we've never encountered before. Truly world-class.",
    name: "James Whitfield",
    title: "Chief Marketing Officer",
    company: "Expo Dubai",
    initial: "J",
  },
  {
    quote: "Our product launch in Dubai exceeded every benchmark. MME's production quality rivals the biggest names in global event management.",
    name: "Leila Nasseri",
    title: "Brand Director",
    company: "LVMH Middle East",
    initial: "L",
  },
  {
    quote: "The LED installations and audio design were breathtaking. MME brings a luxury agency mentality to every single project.",
    name: "Omar Khalifa",
    title: "Head of Events",
    company: "Abu Dhabi Investment Authority",
    initial: "O",
  },
  {
    quote: "Every corner of our conference venue told our brand story. MME didn't just execute an event — they engineered an emotion.",
    name: "Priya Mehta",
    title: "Communications Director",
    company: "Majid Al Futtaim",
    initial: "P",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const [active, setActive] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      // Infinite marquee row 1 — left to right
      gsap.to(marqueeRef1.current, {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      // Infinite marquee row 2 — right to left (reversed)
      gsap.fromTo(marqueeRef2.current,
        { x: '-50%' },
        {
          x: '0%',
          duration: 28,
          ease: 'none',
          repeat: -1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Rotate featured testimonial every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featured = testimonials[active];

  // Duplicate for seamless loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-[#070707] overflow-hidden border-t border-white/5">

      {/* Large ambient text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-display font-bold text-white leading-none uppercase tracking-tighter whitespace-nowrap">Voices</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-8 md:mb-16">
        {/* Section header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-10 md:mb-16 opacity-0">
          <div>
            <span className="text-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.28em] md:tracking-[0.4em] font-bold block mb-3 md:mb-4">Client Testimonials</span>
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-[0.95] md:leading-[0.9] tracking-tight md:tracking-tighter">
              Voices of<br /><span className="text-stroke-gold">Trust</span>
            </h2>
          </div>
          <p className="text-[#666] text-sm max-w-xs font-light leading-relaxed">
            What our clients say about the MME experience — in their own words.
          </p>
        </div>

        {/* Featured Quote — large, cinematic, transitions automatically */}
        <div className="relative border-t border-white/10 pt-8 md:pt-12 pb-8 md:pb-12 min-h-[0] md:min-h-[220px]">
          {/* Giant quote mark */}
          <span className="absolute -top-3 left-0 text-[5rem] md:text-[8rem] leading-none font-serif text-luxury-gold/20 select-none pointer-events-none">"</span>

          <div key={active} className="animate-[fadeSlideIn_0.6s_ease_forwards]">
            <blockquote className="text-lg md:text-3xl lg:text-4xl font-display font-light text-white leading-snug tracking-normal md:tracking-tight mb-7 md:mb-10 max-w-5xl pl-5 md:pl-8">
              {featured.quote}
            </blockquote>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-5 pl-5 md:pl-8">
              {/* Initial Avatar */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 flex items-center justify-center shrink-0">
                <span className="text-luxury-gold font-display font-bold text-lg">{featured.initial}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide">{featured.name}</p>
                <p className="text-[#666] text-xs font-light">{featured.title}</p>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 w-full md:w-auto md:ml-auto pt-2 md:pt-0">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled
                    className={`rounded-full cursor-not-allowed ${i === active ? 'w-8 h-1.5 bg-luxury-gold/70' : 'w-1.5 h-1.5 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden grid gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              disabled
              className={`w-full border px-4 py-4 text-left transition-colors ${
                i === active ? 'border-luxury-gold/50 bg-luxury-gold/10' : 'border-white/10 bg-white/[0.02]'
              } cursor-not-allowed`}
            >
              <p className="text-white text-sm leading-relaxed mb-3">{t.quote}</p>
              <p className="text-luxury-gold text-xs uppercase tracking-[0.16em] font-bold">{t.name}</p>
              <p className="text-[#777] text-xs mt-1">{t.title}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden mb-4 hidden md:block">
        <div ref={marqueeRef1} className="flex gap-8 w-max">
          {row1.map((t, i) => (
            <div key={i} className="shrink-0 border-l border-white/10 pl-8 pr-16 py-3 cursor-default">
              <p className="text-[#555] text-sm font-light max-w-[280px] leading-relaxed truncate">{t.quote.slice(0, 60)}...</p>
              <p className="text-luxury-gold/60 text-xs mt-2 uppercase tracking-wider font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — reversed, slightly different speed */}
      <div className="relative overflow-hidden hidden md:block">
        <div ref={marqueeRef2} className="flex gap-8 w-max">
          {row2.map((t, i) => (
            <div key={i} className="shrink-0 border-r border-white/10 pr-8 pl-16 py-3 cursor-default">
              <p className="text-[#444] text-sm font-light max-w-[280px] leading-relaxed truncate">{t.quote.slice(0, 60)}...</p>
              <p className="text-luxury-gold/50 text-xs mt-2 uppercase tracking-wider font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070707] to-transparent z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070707] to-transparent z-20 pointer-events-none hidden md:block" />

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
