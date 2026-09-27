import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const content = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'We respect your privacy and only use information you share with us to respond to enquiries and provide event-management services.',
    sections: [
      ['Information we collect', 'We may collect contact details, company information, and event requirements that you voluntarily send by email or phone.'],
      ['How we use it', 'We use this information to prepare proposals, communicate about your event, and deliver requested services.'],
      ['Contact', 'You can ask about, correct, or request deletion of your information by emailing info@mmeeventmanagement.com or mmevents75@gmail.com.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These website terms explain the general conditions for using MME Event Management’s website and contacting us about our services.',
    sections: [
      ['Website information', 'Website content is provided for general information. Project scope, availability, pricing, and deliverables are confirmed in a separate written agreement.'],
      ['Intellectual property', 'Unless stated otherwise, the site’s branding, copy, images, and design are owned by or licensed to MME Event Management LLC.'],
      ['Contact', 'For questions about these terms, email info@mmeeventmanagement.com or mmevents75@gmail.com.'],
    ],
  },
};

const Legal = ({ type }) => {
  const page = content[type];

  return (
    <>
      <Helmet>
        <title>{page.title} | MME Event Management</title>
        <link rel="canonical" href={`https://mmeeventmanagement.com/${type}`} />
      </Helmet>
      <main className="pt-40 pb-24 min-h-screen bg-[#0A0A0A] text-white">
        <article className="container mx-auto px-6 md:px-12 max-w-4xl">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">MME Event Management LLC</p>
          <h1 className="text-5xl md:text-7xl font-display mb-8">{page.title}</h1>
          <p className="text-luxury-silver text-lg leading-relaxed mb-12">{page.intro}</p>
          <div className="space-y-10">
            {page.sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="text-2xl font-display mb-3">{title}</h2>
                <p className="text-luxury-silver leading-relaxed">{body}</p>
              </section>
            ))}
          </div>
          <Link to="/contact" className="inline-block mt-14 text-luxury-gold border-b border-luxury-gold pb-1">Contact us</Link>
        </article>
      </main>
    </>
  );
};

export default Legal;
