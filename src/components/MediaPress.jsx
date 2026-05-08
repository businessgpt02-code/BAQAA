import React from 'react';
import { motion } from 'framer-motion';
import './MediaPress.css';

const MediaPress = () => {
  return (
    <section className="media-snippets-section">
      <div className="media-header text-center">
        <div className="vertical-divider-media"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="media-title"
        >
          MEDIA SNIPPETS
        </motion.h2>
      </div>

      <div className="media-slider-wrapper">
        {/* Left Arrow */}
        <div className="slider-arrow left-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" strokeWidth="1.5">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </div>

        <div className="media-content-panel">
          {/* Magazine Cover */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="magazine-cover-box"
          >
            <img src="/images/aza_cover.png" alt="Aza Magazine Cover" className="magazine-img" />
          </motion.div>

          {/* Quote Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="quote-panel-refined"
          >
            <div className="quote-mark open">“</div>
            <p className="press-quote-text">
              Ambika Gupta of The A-Cube Project – the genius behind the grand, 
              pandemic wedding of actor Kajal Aggarwal & entrepreneur Gautam Kitchlu, 
              helps us understand what goes into the making of the ultimate dream wedding. 
              Her checklist is a game changer for those planning their marriage 
              ceremonies, regardless of the pandemic.
            </p>
            <div className="quote-mark close">”</div>
            
            <div className="publication-info">
              <h4 className="pub-name">- AZA</h4>
              <p className="pub-link">magazine.azafashions.com/books/axpb/?utm_source=azamagazin...</p>
            </div>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <div className="slider-arrow right-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" strokeWidth="1.5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="media-pagination">
        <span className="p-dot"></span>
        <span className="p-dot active"></span>
        <span className="p-dot"></span>
        <span className="p-dot"></span>
      </div>
    </section>
  );
};

export default MediaPress;
