import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Building2, LayoutGrid, Mic2, HeartHandshake } from 'lucide-react';
import { gsap } from 'gsap';

const floatingCards = [
  {
    icon: <Building2 className="w-5 h-5 text-luxury-gold" />,
    title: 'Corporate Events',
    desc: 'Gala dinners, award ceremonies & VIP networking.',
    delay: 0,
    position: 'top-[10%] right-4 lg:right-0',
    animClass: 'animate-float',
  },
  {
    icon: <LayoutGrid className="w-5 h-5 text-luxury-gold" />,
    title: 'Exhibitions',
    desc: 'Custom stands and interactive brand experiences.',
    delay: 0.3,
    position: 'top-[38%] left-0 lg:-left-8',
    animClass: 'animate-floatReverse',
  },
  {
    icon: <Mic2 className="w-5 h-5 text-luxury-gold" />,
    title: 'AV Production',
    desc: 'Massive LED screens, rigging and technical setup.',
    delay: 0.6,
    position: 'bottom-[15%] right-4 lg:right-0',
    animClass: 'animate-floatSlow',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-luxury-gold" />,
    title: 'Luxury Weddings',
    desc: 'Bespoke destination wedding experiences.',
    delay: 0.9,
    position: 'bottom-[38%] left-0 lg:-left-4',
    animClass: 'animate-float',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.querySelectorAll('.word'), {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.06,
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  const words = 'Extraordinary Events. Exceptional Execution.'.split(' ');

  return (
    <section className="relative min-h-[700px] lg:min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/85 to-[#090909]/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/30 z-10" />
        <img
          src="/images/services/hero_mme_1783864448226.png"
          alt="Luxury Corporate Event — MME Event Management Dubai"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* ── Floating ambient glow ── */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[100px] animate-glow z-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-10 lg:gap-12 items-center">

          {/* ── Left ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-7"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <Star className="text-luxury-gold w-4 h-4 fill-luxury-gold" />
              <span className="text-luxury-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Our Services
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <h1
                ref={headingRef}
                className="max-w-3xl text-4xl sm:text-5xl xl:text-6xl font-display font-semibold leading-[1.05] text-white text-balance"
                aria-label="Extraordinary Events. Exceptional Execution."
              >
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.28em]"
                  >
                    <span className="word inline-block">
                      {['Extraordinary', 'Exceptional'].includes(word)
                        ? <span className="text-gradient">{word}</span>
                        : word}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-luxury-silver/75 max-w-lg font-light leading-relaxed"
            >
              MME Event Management LLC delivers world-class event production for corporate events, government summits, exhibitions, and luxury weddings across Dubai and the UAE.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 mt-2">
              <a
                href="/contact"
                className="group px-8 py-4 bg-luxury-gold text-luxury-black rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-300 flex items-center gap-2"
              >
                Request Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#expertise"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex gap-10 mt-4">
              {[['15+', 'Years'], ['500+', 'Events'], ['100%', 'On-Time']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-display font-bold text-luxury-gold">{num}</p>
                  <p className="text-xs text-luxury-silver/50 uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Floating Cards ── */}
          <div className="hidden lg:block relative h-[620px]">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 + card.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-[260px] ${card.position} ${card.animClass}`}
              >
                <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-luxury-gold/40 transition-colors duration-500 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-luxury-gold/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm">{card.title}</h3>
                  </div>
                  <p className="text-xs text-luxury-silver/60 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll Hint ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] text-luxury-silver/40 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold/60 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
