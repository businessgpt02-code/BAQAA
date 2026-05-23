import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const Featured = () => {
  const logos = [
    { name: 'ELLE', size: 'logo-medium' },
    { name: 'VOGUE', size: 'logo-medium' },
    { name: 'ARABIA WEDDINGS', size: 'logo-medium' },
    { name: 'Media Publications of UAE', size: 'logo-medium' },
    { name: 'LINKEDIN', size: 'logo-medium' }
  ];

  return (
    <section className="featured-section" id="about">

      <div className="featured-container">

        <div className="vertical-divider top-divider"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="featured-logos-wrapper"
        >
          <span className="featured-on-text">FEATURED ON</span>
          <div className="logos-row">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className={`logo-brand ${logo.size}`}
                transition={{ duration: 0.3 }}
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="vertical-divider middle-divider"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="brand-story-wrapper"
        >
          <h2 className="brand-heading">THE MEANING OF BAQAA</h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="brand-description"
          >
            BAQAA is inspired by the Sufi philosophy of eternal presence — a state where beauty, emotion, and meaningful moments continue to live far beyond time. Rooted in timeless artistry and soulful storytelling, every BAQAA celebration is designed to leave an enduring impression that becomes part of your legacy.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default Featured;
