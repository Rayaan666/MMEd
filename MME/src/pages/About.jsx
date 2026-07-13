import React from 'react';
import { Helmet } from 'react-helmet-async';

// Components
import AboutHero from '../components/About/AboutHero';
import OurStory from '../components/About/OurStory';
import VisionMission from '../components/About/VisionMission';
import CoreValues from '../components/About/CoreValues';
import WhyChoose from '../components/About/WhyChoose';
import OurProcess from '../components/About/OurProcess';
import AboutCTA from '../components/About/AboutCTA';

const About = () => {
  // SEO Schema Generation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MME Event Management LLC",
    "url": "https://mmeevents.com",
    "logo": "https://mmeevents.com/logo.png",
    "description": "Dubai's leading luxury event management company specializing in corporate events, exhibitions, and brand activations.",
    "foundingDate": "2010",
    "sameAs": [
      "https://www.facebook.com/mmeevents",
      "https://www.instagram.com/mmeevents",
      "https://www.linkedin.com/company/mmeevents"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MME Event Management LLC",
    "image": "https://mmeevents.com/hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "12345",
      "addressCountry": "AE"
    },
    "telephone": "+971557354031",
    "priceRange": "$$$$"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mmeevents.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://mmeevents.com/about"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* SEO Title & Meta Description */}
        <title>About Us | MME Event Management LLC | Luxury Event Planner Dubai</title>
        <meta name="description" content="Discover MME Event Management LLC, one of Dubai's leading luxury event management companies. With over 15 years of experience, we specialize in corporate events, exhibitions, and brand activations across the UAE." />
        <meta name="keywords" content="Event Management Company Dubai, Luxury Event Planner Dubai, Corporate Event Organizers UAE, Exhibition Management Dubai, Event Production Company UAE, Conference Management Dubai, Brand Activation Agency Dubai, Event Planning Company UAE, Premium Event Services Dubai, Audio Visual Production Dubai" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us | MME Event Management LLC" />
        <meta property="og:description" content="Transforming ideas into unforgettable experiences. Discover our award-winning luxury event planning services in Dubai." />
        <meta property="og:image" content="https://mmeevents.com/hero.jpg" />
        <meta property="og:url" content="https://mmeevents.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | MME Event Management LLC" />
        <meta name="twitter:description" content="Transforming ideas into unforgettable experiences. Discover our award-winning luxury event planning services in Dubai." />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="bg-[#0A0A0A] w-full min-h-screen text-white">
        <AboutHero />
        <OurStory />
        <VisionMission />
        <CoreValues />
        <WhyChoose />
        <OurProcess />
        <AboutCTA />
      </main>
    </>
  );
};

export default About;
