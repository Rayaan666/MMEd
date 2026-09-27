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
        <meta name="description" content="MME Event Management LLC delivers luxury corporate events, exhibitions, brand activations and professional event production services across Dubai and the UAE." />
        <link rel="canonical" href="https://mmeeventmanagement.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmeeventmanagement.com/" />
        <meta property="og:title" content="MME Event Management | Luxury Corporate Events in Dubai" />
        <meta property="og:description" content="MME Event Management LLC delivers luxury corporate events, exhibitions, brand activations and professional event production services across Dubai and the UAE." />
        <meta property="og:image" content="https://mmeeventmanagement.com/home/hero.png" />
        <meta property="og:site_name" content="MME Event Management LLC" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mmeeventmanagement.com/" />
        <meta name="twitter:title" content="MME Event Management | Luxury Corporate Events in Dubai" />
        <meta name="twitter:description" content="MME Event Management LLC delivers luxury corporate events, exhibitions, brand activations and professional event production services across Dubai and the UAE." />
        <meta name="twitter:image" content="https://mmeeventmanagement.com/home/hero.png" />
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
