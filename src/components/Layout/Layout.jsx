import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import WhatsAppButton from '../ui/WhatsAppButton';

const Layout = ({ children }) => {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    scrollToTop();
    const frame = requestAnimationFrame(scrollToTop);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-luxury-gold selection:text-luxury-black">
      <div className="noise-overlay" />
      <CustomCursor />
      <WhatsAppButton />
      <Navbar />
      <main className="w-full relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
