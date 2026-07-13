import React from 'react';
import { Helmet } from 'react-helmet-async';

// Section Components
import Hero from '../components/Services/Hero';
import AllServices from '../components/Services/AllServices';
import Industries from '../components/Services/Industries';
import FAQ from '../components/Services/FAQ';
import FinalCTA from '../components/Services/FinalCTA';

/* ─────────────────────────────────────────────
   SEO Schema Definitions
───────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MME Event Management LLC",
  "url": "https://www.mmeeventmanagement.com",
  "logo": "https://www.mmeeventmanagement.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-55-735-4031",
    "contactType": "Customer Service",
    "areaServed": "AE",
    "availableLanguage": ["English", "Arabic"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressLocality": "Dubai"
  },
  "sameAs": [
    "https://www.instagram.com/mmeeventmanagement",
    "https://www.linkedin.com/company/mmeeventmanagement"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MME Event Management LLC",
  "description": "Dubai's premier luxury event management company specialising in corporate events, government events, exhibitions, AV production and luxury weddings across the UAE.",
  "url": "https://www.mmeeventmanagement.com",
  "telephone": "+971-55-735-4031",
  "email": "info@mmeeventmanagement.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$$$",
  "image": "https://www.mmeeventmanagement.com/images/services/hero_mme_1783864448226.png"
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Event Management",
  "provider": {
    "@type": "Organization",
    "name": "MME Event Management LLC"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Management Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Event Management Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Event Management UAE" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exhibition Stand Design Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audio Visual Production Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Wedding Planning Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Launch Events Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Activation Agency Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conference Management Dubai" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mmeeventmanagement.com" },
    { "@type": "ListItem", "position": 2, "name": "Our Services", "item": "https://www.mmeeventmanagement.com/services" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does event planning take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Large-scale events require 3-6 months. Corporate events typically need 6-10 weeks. We also handle urgent projects without compromising quality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide complete turnkey event solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MME is a full-service, end-to-end event management company handling everything from concept to post-event reporting under one roof."
      }
    },
    {
      "@type": "Question",
      "name": "Can you manage government events in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We have extensive experience with UAE government summits, ministerial meetings, and national day celebrations, operating with the highest confidentiality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide AV production services in-house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our in-house AV division operates LED walls, intelligent lighting, audio systems, broadcast cameras, and live streaming infrastructure — all managed by our own certified technicians."
      }
    },
    {
      "@type": "Question",
      "name": "Can you design and fabricate custom exhibition stands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We design bespoke stands in 3D and build each stand in-house, from modular rentals to fully custom architectural builds with integrated technology."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manage international events outside the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MME has managed events in Saudi Arabia, Qatar, Egypt, UK, USA, and across Europe, deploying teams globally with consistent MME quality standards."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MME Event Management Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

/* ─────────────────────────────────────────────
   Main Services Page
───────────────────────────────────────────── */
const Services = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Event Management Services Dubai | Corporate, Exhibition & AV Production | MME</title>
        <meta
          name="description"
          content="MME Event Management LLC offers world-class event management services in Dubai — corporate events, government events, luxury weddings, exhibition stand design, AV production, brand activations and more across the UAE."
        />
        <meta name="keywords" content="Event Management Company Dubai, Luxury Event Management Dubai, Corporate Event Management UAE, Exhibition Stand Design Dubai, Audio Visual Production Dubai, Event Production Company UAE, Conference Management Dubai, Product Launch Events Dubai, Brand Activation Agency Dubai, Government Event Management UAE, Stage Design Dubai, LED Screen Rental Dubai, Luxury Wedding Planner Dubai" />
        <link rel="canonical" href="https://www.mmeeventmanagement.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmeeventmanagement.com/services" />
        <meta property="og:title" content="Event Management Services Dubai | MME Event Management LLC" />
        <meta property="og:description" content="Dubai's leading luxury event management company. Corporate events, government summits, exhibition stands, AV production, and luxury weddings across the UAE and beyond." />
        <meta property="og:image" content="https://www.mmeeventmanagement.com/images/services/hero_mme_1783864448226.png" />
        <meta property="og:site_name" content="MME Event Management LLC" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Event Management Services Dubai | MME Event Management LLC" />
        <meta name="twitter:description" content="World-class corporate events, exhibition stands, AV production and luxury weddings in Dubai, UAE." />
        <meta name="twitter:image" content="https://www.mmeeventmanagement.com/images/services/hero_mme_1783864448226.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      {/* ── Page Sections ── */}
      <main aria-label="MME Event Management Services">
        <Hero />

        <AllServices />

        {/* 2. Our Expertise — Bento Grid */}

        {/* 3. Event Production */}

        {/* 4. Exhibition Services */}

        {/* 5. Creative Studio */}

        {/* 6. Process */}

        {/* 7. Why Choose MME */}

        <Industries />

        {/* 9. Featured Projects */}

        {/* 10. Testimonials */}

        <FAQ />

        <FinalCTA />
      </main>
    </>
  );
};

export default Services;
