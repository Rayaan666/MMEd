import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#090909]/80 backdrop-blur-sm z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/60 to-transparent z-10" />
            <img 
              src="/images/services/final_cta_1783864494363.png" 
              alt="Luxury Gala Event" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-20 p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 leading-tight">
                Stay Ahead of <span className="text-gradient">Event Trends</span>
              </h2>
              <p className="text-lg text-luxury-silver/80 leading-relaxed">
                Join our exclusive mailing list to receive the latest insights, production knowledge, and inspiration from Dubai's top event directors directly in your inbox.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md"
            >
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="relative group">
                  <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 group-hover:border-luxury-gold/50 transition-colors duration-300 focus-within:border-luxury-gold/50">
                    <Mail className="w-6 h-6 text-luxury-silver/50" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email" 
                      className="w-full bg-transparent border-none outline-none text-white px-4 py-4 placeholder:text-luxury-silver/40"
                    />
                    <button type="submit" className="w-14 h-14 shrink-0 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full p-4 px-8 text-luxury-gold"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-medium">Welcome to the inner circle.</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
