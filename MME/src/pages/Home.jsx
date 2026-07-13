import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Home/Hero';
import AboutPreview from '../components/Home/AboutPreview';
import Expertise from '../components/Home/Expertise';
import Stats from '../components/Home/Stats';
import Testimonials from '../components/Home/Testimonials';
import CTA from '../components/Home/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MME Event Management | Luxury Corporate Events in Dubai</title>
        <meta name="description" content="MME is Dubai's premier luxury event management company specializing in high-end corporate events, product launches, and award ceremonies." />
      </Helmet>
      
      <Hero />
      <AboutPreview />
      <Expertise />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
