import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, CalendarCheck, LayoutGrid, Lightbulb, 
  Users, Cpu, Gem, Clock, UserCheck
} from 'lucide-react';

const reasons = [
  { icon: <Award className="w-7 h-7" />, title: '15+ Years Experience', desc: 'Over a decade and a half of delivering extraordinary events across the UAE and beyond.' },
  { icon: <CalendarCheck className="w-7 h-7" />, title: '500+ Successful Events', desc: 'A proven portfolio of large-scale, high-impact events for global brands and government entities.' },
  { icon: <LayoutGrid className="w-7 h-7" />, title: 'Complete Turnkey Solutions', desc: 'From concept to completion, every element of your event is managed under one roof.' },
  { icon: <Lightbulb className="w-7 h-7" />, title: 'Award-Winning Creativity', desc: 'Our design team has earned recognition for pushing creative boundaries year after year.' },
  { icon: <Users className="w-7 h-7" />, title: 'Experienced Production Team', desc: 'A crew of 200+ expert technicians, designers, managers and coordinators on standby.' },
  { icon: <Cpu className="w-7 h-7" />, title: 'Latest Event Technology', desc: 'We invest in the newest AV, LED, and interactive technology before anyone else in the region.' },
  { icon: <Gem className="w-7 h-7" />, title: 'Luxury Standards', desc: 'Every detail is treated with a luxury-first mindset, ensuring premium quality across all touchpoints.' },
  { icon: <Clock className="w-7 h-7" />, title: 'Reliable Delivery', desc: 'We have a 100% on-time delivery record because your event cannot afford delays.' },
  { icon: <UserCheck className="w-7 h-7" />, title: 'Dedicated Project Managers', desc: 'Your named project manager is a single point of contact from kickoff to post-event debrief.' },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Difference</span>
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6">
            Why Clients <span className="text-gradient">Choose MME</span>
          </h2>
          <p className="text-luxury-silver/70 max-w-2xl mx-auto text-lg">
            Built on trust, driven by results, and defined by an unrelenting commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, borderColor: 'rgba(198,168,106,0.4)' }}
              className="glass-card p-8 rounded-3xl border border-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Corner Number */}
              <span className="absolute top-6 right-8 text-5xl font-display font-bold text-white/[0.04] select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-luxury-silver/60 text-sm leading-relaxed">{reason.desc}</p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
