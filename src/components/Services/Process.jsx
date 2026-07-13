import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardList, Palette, Code2, Zap, PartyPopper } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-8 h-8" />,
    title: 'Discover',
    description: 'We immerse ourselves in your brand, objectives, and audience to define the perfect event vision.',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Plan',
    description: 'Comprehensive logistics, budgeting, and timeline planning with zero margin for error.',
  },
  {
    number: '03',
    icon: <Palette className="w-8 h-8" />,
    title: 'Design',
    description: 'Our creative studio brings the concept to life with 3D renders, moodboards, and cinematic storyboards.',
  },
  {
    number: '04',
    icon: <Code2 className="w-8 h-8" />,
    title: 'Develop',
    description: 'Full production build-out — from stage fabrication to AV integration and digital experiences.',
  },
  {
    number: '05',
    icon: <Zap className="w-8 h-8" />,
    title: 'Execute',
    description: 'Flawless on-ground delivery managed by our dedicated event directors and technical crew.',
  },
  {
    number: '06',
    icon: <PartyPopper className="w-8 h-8" />,
    title: 'Celebrate',
    description: 'An extraordinary event that exceeds every expectation, with post-event analytics and reporting.',
  },
];

const Process = () => {
  return (
    <section className="py-32 bg-[#090909] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-6xl font-display font-semibold">
            Our <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[80px] left-[8.33%] right-[8.33%] h-[2px] bg-white/5 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
              className="h-full bg-gradient-to-r from-luxury-gold/50 to-luxury-gold/10 origin-left"
            />
          </div>

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative mb-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-[160px] h-[160px] rounded-full glass-card border border-white/10 group-hover:border-luxury-gold/60 transition-colors duration-500 flex flex-col items-center justify-center gap-2 relative z-10"
                  >
                    <div className="text-luxury-gold">{step.icon}</div>
                    <span className="text-4xl font-display font-bold text-white/10 absolute bottom-4 right-6 select-none">{step.number}</span>
                  </motion.div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-luxury-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                </div>

                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-luxury-gold transition-colors duration-300">{step.title}</h3>
                <p className="text-luxury-silver/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 pb-12 relative"
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[30px] top-[60px] bottom-0 w-[2px] bg-gradient-to-b from-luxury-gold/30 to-transparent" />
              )}
              
              <div className="w-[60px] h-[60px] rounded-full glass-card border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold z-10 bg-[#090909]">
                {step.icon}
              </div>
              
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-luxury-gold/50 text-sm font-display font-bold">{step.number}</span>
                  <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                </div>
                <p className="text-luxury-silver/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
