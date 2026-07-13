import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | MME Event Management</title>
      </Helmet>
      <section className="pt-32 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-display text-white">Our Services</h1>
      </section>
    </>
  );
};

export default Services;
