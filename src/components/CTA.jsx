import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-container">
        <img src="/CTA/CTA.png" alt="Collaborate with BAQAA" className="cta-bg-img" />
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
          Where Luxury Weddings Become Timeless Memories
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="cta-subtitle-lines"
        >
          <p className="cta-italic-line">
            From intimate ceremonies to grand destination weddings, BAQAA crafts timeless celebrations filled with elegance, emotion, and unforgettable artistry.
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
