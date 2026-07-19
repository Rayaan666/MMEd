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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-0 bg-luxury-black/80 backdrop-blur-lg border-b border-white/5' : 'py-0 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MME Logo" className="h-32 md:h-40 w-auto object-contain -mt-6 md:-mt-8 -mb-8 md:-mb-11" />
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-sm font-medium text-luxury-silver hover:text-luxury-gold transition-colors">
                {link.name}
              </Link>
            ))}
            <Link to="/contact?request=quote" className="px-6 py-2 border border-luxury-gold text-luxury-gold rounded-full text-sm font-medium hover:bg-luxury-gold hover:text-luxury-black transition-colors">
              Get a Quote
            </Link>
          </nav>

          <button type="button" aria-label="Open navigation menu" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
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
            <button type="button" aria-label="Close navigation menu" className="absolute top-8 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-medium text-white hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact?request=quote"
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-medium text-luxury-gold border border-luxury-gold rounded-full px-6 py-3"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
