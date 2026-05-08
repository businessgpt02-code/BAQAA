import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-container">
        <img src="/images/cta_bg.png" alt="Collaborate with BAQAA" className="cta-bg-img" />
        <div className="cta-overlay-refined"></div>
      </div>

      <div className="cta-content-centered">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="cta-heading-huge"
        >
          PARTNER WITH BAQAA
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="cta-subtitle-lines"
        >
          <p className="cta-italic-line">
            We collaborate with luxury wedding planners, destination wedding vendors, editorial brands, filmmakers, production houses, and creative partners to craft unforgettable celebrations and visual experiences.
          </p>
          <p className="cta-italic-line">
            Connect with BAQAA to create timeless destination weddings, luxury events, cinematic editorials, and extraordinary experiences for your next project.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="btn-cta-contact"
        >
          CONTACT US
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
