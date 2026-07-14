import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.987 2.894 9.83 9.83 0 0 1 2.895 6.994c-.003 5.45-4.437 9.884-9.886 9.889m8.413-18.297A11.8 11.8 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.688 1.448h.005c6.558 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.488-8.413" />
  </svg>
);

const WhatsAppButton = () => {
  const message = encodeURIComponent('Hello MME Event Management, I would like to discuss an upcoming event.');

  return (
    <motion.a
      href={`https://wa.me/971557354031?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MME Event Management on WhatsApp"
      title="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.25 }}
      className="group fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.35)] ring-1 ring-white/25 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-[#111]/95 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <WhatsAppIcon />
    </motion.a>
  );
};

export default WhatsAppButton;
