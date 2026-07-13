import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', enabled: true },
    { name: 'About', path: '/about', enabled: true },
    { name: 'Services', path: '/services', enabled: false },
    { name: 'Blogs', path: '/blogs', enabled: false },
    { name: 'Contact', path: '/contact', enabled: false },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-0 bg-luxury-black/80 backdrop-blur-lg border-b border-white/5' : 'py-0 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MME Logo" className="h-24 md:h-32 w-auto object-contain -mt-3 md:-mt-5 -mb-6 md:-mb-10" />
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              link.enabled ? (
                <Link key={link.name} to={link.path} className="text-sm font-medium text-luxury-silver hover:text-luxury-gold transition-colors">
                  {link.name}
                </Link>
              ) : (
                <span key={link.name} className="text-sm font-medium text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">
                  {link.name}
                </span>
              )
            ))}
            <button type="button" disabled className="px-6 py-2 border border-luxury-gold/40 text-luxury-gold/50 rounded-full text-sm font-medium cursor-not-allowed">
              Get a Quote
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-luxury-black flex flex-col justify-center items-center"
          >
            <button className="absolute top-8 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                link.enabled ? (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-display font-medium text-white hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <span key={link.name} className="text-4xl font-display font-medium text-white/35 cursor-not-allowed" aria-disabled="true">
                    {link.name}
                  </span>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
