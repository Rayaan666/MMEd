import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const request = searchParams.get('request');
  const requestLabels = {
    quote: 'Get a Quote',
    consultation: 'Book a Consultation',
    proposal: 'Request a Proposal',
  };
  const heading = requestLabels[request] || 'Contact MME';
  const emailSubject = encodeURIComponent(`${heading} — MME Event Management`);

  return (
    <>
      <Helmet>
        <title>Contact Us | MME Event Management</title>
        <meta name="description" content="Contact MME Event Management LLC in Dubai for bespoke corporate event planning, luxury weddings, exhibition stand design, and full-scale event production across the UAE." />
        <link rel="canonical" href="https://mmeeventmanagement.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmeeventmanagement.com/contact" />
        <meta property="og:title" content="Contact Us | MME Event Management" />
        <meta property="og:description" content="Contact MME Event Management LLC in Dubai for bespoke corporate event planning, luxury weddings, exhibition stand design, and full-scale event production across the UAE." />
        <meta property="og:image" content="https://mmeeventmanagement.com/home/hero.png" />
      </Helmet>
      <section className="pt-40 pb-24 min-h-screen bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-5">Start a conversation</p>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-8">{heading}</h1>
          <p className="text-luxury-silver text-lg max-w-2xl leading-relaxed mb-12">
            Tell us about your event, timeline, and vision. Our Dubai team will help shape the right production plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={`mailto:info@mmeeventmanagement.com,mmevents75@gmail.com?subject=${emailSubject}`}
              className="px-8 py-4 bg-luxury-gold text-luxury-black font-semibold text-center rounded-sm hover:bg-white transition-colors"
            >
              Email Our Team
            </a>
            <a
              href="tel:+971557354031"
              className="px-8 py-4 border border-white/30 text-white font-semibold text-center rounded-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors"
            >
              Call +971 55 735 4031
            </a>
            <a
              href="tel:+971503478428"
              className="px-8 py-4 border border-white/30 text-white font-semibold text-center rounded-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors"
            >
              Call +971 50 347 8428
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 border-t border-white/10 pt-10 text-luxury-silver">
            <div>
              <p className="text-white font-semibold mb-2">Email</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:info@mmeeventmanagement.com" className="hover:text-luxury-gold transition-colors block">info@mmeeventmanagement.com</a>
                <a href="mailto:mmevents75@gmail.com" className="hover:text-luxury-gold transition-colors block">mmevents75@gmail.com</a>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Phone</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+971557354031" className="hover:text-luxury-gold transition-colors block">+971 55 735 4031</a>
                <a href="tel:+971503478428" className="hover:text-luxury-gold transition-colors block">+971 50 347 8428</a>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Based in</p>
              <a href="https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noreferrer" className="hover:text-luxury-gold transition-colors block">Dubai, United Arab Emirates</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
