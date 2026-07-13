import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurStory = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={container} className="relative pt-12 pb-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Abstract Lighting Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-[#C6A86A] to-transparent blur-[120px]" />
        <div className="absolute bottom-1/4 -right-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-white to-transparent blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Cinematic Image */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10"
            >
              <motion.img 
                style={{ y: imageY }}
                src="/about/story.png" 
                alt="Event Planners Coordinating Luxury Event" 
                className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
              />
              {/* Glass overlay subtle detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#C6A86A]"></span>
              <h2 className="text-[#C6A86A] text-sm tracking-[0.2em] uppercase">Our Story</h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8"
            >
              Elevating the Standard of Luxury Events in Dubai
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="space-y-6 text-lg text-[#D9D9D9] font-light leading-relaxed"
            >
              <p>
                MME Event Management LLC specializes in creating premium corporate events, exhibitions, conferences, product launches, gala dinners, government functions, luxury weddings, and brand activations. 
              </p>
              <p>
                Every event is carefully planned to deliver unforgettable experiences that strengthen brands and build meaningful connections. Our dedicated team of professionals blends visionary creativity with meticulous attention to detail, ensuring seamless execution from concept to celebration.
              </p>
              <p className="pl-6 border-l-2 border-[#C6A86A] italic font-serif mt-8 text-xl text-white/90">
                "We don't just organize events; we orchestrate moments that leave a lasting legacy."
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;
