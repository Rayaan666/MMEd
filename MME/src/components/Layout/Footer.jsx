import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal pt-3 pb-8 border-t border-white/5 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block -mt-5 md:-mt-7 -mb-4">
              <img src="/logo.png" alt="MME Logo" className="h-28 md:h-36 w-auto object-contain" />
            </Link>
            <p className="text-luxury-silver max-w-md text-sm leading-relaxed -mt-2">
              Dubai's premier luxury event management agency. We craft unforgettable, high-end corporate and private experiences globally.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-luxury-silver hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-luxury-silver hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><span className="text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">Our Services</span></li>
              <li><span className="text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">Journal & News</span></li>
              <li><span className="text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">Contact</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="flex flex-col gap-4 text-luxury-silver">
              <li>Dubai, United Arab Emirates</li>
              <li>info@mmeeventmanagement.com</li>
              <li>+971 55 735 4031</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-luxury-silver">
          <p>&copy; {new Date().getFullYear()} MME Event Management LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">Privacy Policy</span>
            <span className="text-luxury-silver/50 cursor-not-allowed" aria-disabled="true">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
