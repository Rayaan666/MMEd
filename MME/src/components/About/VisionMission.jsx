import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const VisionMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="pt-4 pb-20 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Mission Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-[#C6A86A] hover:to-transparent transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6A86A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
            
            <div className="relative h-full bg-[#161616] rounded-3xl p-10 lg:p-14 overflow-hidden z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#C6A86A]/50 group-hover:bg-[#C6A86A]/10 transition-all duration-500">
                <Target className="w-8 h-8 text-[#C6A86A]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-[#C6A86A] transition-colors duration-500">Our Mission</h3>
              
              <p className="text-[#D9D9D9] font-light leading-relaxed text-lg group-hover:text-white transition-colors duration-500">
                To deliver exceptional event experiences that surpass expectations through innovative concepts, meticulous planning, and flawless execution. We strive to create environments where connections flourish and brand stories come alive.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-[#C6A86A] hover:to-transparent transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6A86A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
            
            <div className="relative h-full bg-[#161616] rounded-3xl p-10 lg:p-14 overflow-hidden z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#C6A86A]/50 group-hover:bg-[#C6A86A]/10 transition-all duration-500">
                <Eye className="w-8 h-8 text-[#C6A86A]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-[#C6A86A] transition-colors duration-500">Our Vision</h3>
              
              <p className="text-[#D9D9D9] font-light leading-relaxed text-lg group-hover:text-white transition-colors duration-500">
                To be the premier event management company in the UAE, globally recognized for pioneering luxury experiences, setting new industry standards, and consistently transforming the ordinary into the extraordinary.
              </p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
