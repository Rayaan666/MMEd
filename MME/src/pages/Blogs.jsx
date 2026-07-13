import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Journal & News | MME Event Management</title>
      </Helmet>
      <section className="pt-32 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-display text-white">Journal</h1>
      </section>
    </>
  );
};

export default Blogs;
