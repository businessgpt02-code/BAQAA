import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const Featured = () => {
  const logos = [
    { name: 'AD', size: 'logo-large' },
    { name: 'VOGUE', size: 'logo-large' },
    { name: 'Van Gogh Museum', size: 'logo-medium' },
    { name: 'The New York Times', size: 'logo-medium' },
    { name: 'Forbes', size: 'logo-large' }
  ];

  return (
    <section className="featured-section" id="about">
      <div className="floral-accent"></div>

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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="vertical-divider middle-divider"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="brand-story-wrapper"
        >
          <h2 className="brand-heading">THE BAQAA EXPERIENCE</h2>
          
          <p className="brand-description">
            BAQAA IS A LUXURY WEDDING AND CELEBRATION BRAND THAT CRAFTS<br className="desktop-only"/>
            TIMELESS EXPERIENCES FILLED WITH ELEGANCE, EMOTION,<br className="desktop-only"/>
            CULTURE, AND UNFORGETTABLE ARTISTRY.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Featured;
