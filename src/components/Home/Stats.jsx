import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: '+', label: 'Events Delivered', sublabel: 'Across the Middle East & Beyond' },
  { value: 15, suffix: '+', label: 'Years of Excellence', sublabel: 'Trusted Since 2009' },
  { value: 200, suffix: '+', label: 'Premium Clients', sublabel: 'Fortune 500 & Government' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Consistently Exceeding Expectations' },
];

function useCountUp(target, duration = 2, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const StatItem = ({ value, suffix, label, sublabel, index, isVisible }) => {
  const count = useCountUp(value, 2, isVisible);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-12 group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Vertical divider (except last) */}
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
      )}

      {/* Massive number */}
      <div className="relative mb-3">
        <span className="text-[clamp(4rem,8vw,7rem)] font-display font-bold leading-none tracking-tighter text-white tabular-nums">
          {count}
        </span>
        <span className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold leading-none text-luxury-gold absolute -right-[1.2ch] top-0">
          {suffix}
        </span>
      </div>

      {/* Thin gold accent line */}
      <div className="w-8 h-[2px] bg-luxury-gold mb-4 group-hover:w-16 transition-all duration-500 ease-out" />

      <p className="text-white font-semibold text-sm md:text-base uppercase tracking-[0.15em] text-center mb-1">{label}</p>
      <p className="text-[#666] text-xs text-center font-light tracking-wide">{sublabel}</p>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Trigger count-up when section enters viewport
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => setIsVisible(true),
      });

      // Animate the horizontal separator line drawing across
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Staggered fade-in for each stat
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-luxury-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <div ref={lineRef} className="flex-1 h-[1px] bg-gradient-to-r from-luxury-gold to-transparent origin-left" />
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold shrink-0">Our Impact in Numbers</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-luxury-gold to-transparent origin-right" />
        </div>

        {/* Stats Grid — no cards, raw typographic layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x-0 gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item opacity-0">
              <StatItem {...stat} index={index} isVisible={isVisible} />
            </div>
          ))}
        </div>

        {/* Bottom decorative divider */}
        <div className="mt-12 md:mt-16 flex items-center gap-3 md:gap-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-[#444] text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.28em] md:tracking-[0.4em] font-medium shrink-0 text-center">
            MME Event Management LLC - Dubai, UAE
          </p>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
