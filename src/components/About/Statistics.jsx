import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatItem = ({ endValue, suffix = '', label, duration = 2, delay = 0 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const node = nodeRef.current;
      
      const controls = animate(0, endValue, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate(value) {
          if (node) {
            node.textContent = Math.round(value) + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, endValue, duration, delay, suffix, hasAnimated]);

  return (
    <div className="flex flex-col items-center justify-center p-8 border-r last:border-r-0 border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <h4 className="text-5xl md:text-6xl font-serif text-[#C6A86A] mb-4 flex items-center justify-center">
          <span ref={nodeRef}>0</span>
        </h4>
        <p className="text-white text-sm tracking-widest uppercase font-light text-center">
          {label}
        </p>
      </motion.div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="pt-10 pb-20 bg-[#0A0A0A] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t md:border-t-0 border-white/10">
          <StatItem endValue={18} suffix="+" label="Years Experience" delay={0.1} />
          <StatItem endValue={624} suffix="+" label="Successful Events" delay={0.2} />
          <StatItem endValue={148} suffix="+" label="Corporate Clients" delay={0.3} />
          <StatItem endValue={99} suffix="%" label="Client Satisfaction" delay={0.4} />
          <StatItem endValue={35} suffix="+" label="Professional Team" delay={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
