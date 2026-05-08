import React from 'react';
import { motion } from 'framer-motion';
import './CinematicMemories.css';

const CinematicMemories = () => {
  return (
    <section className="cinematic-section" id="films">
      <div className="heading-container text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cinematic-title"
        >
          TIMELESS MEMORIES CRAFTED FOREVER
        </motion.h2>
      </div>

      <div className="video-wrapper-refined">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="main-video-area"
        >
          <div className="video-placeholder-box">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop" 
              alt="Wedding Film" 
              className="video-poster-img"
            />
            
            {/* Play Button Overlay */}
            <div className="video-play-overlay">
              <div className="play-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>

            {/* Video structure for future implementation */}
            <video className="actual-video hidden">
              {/* <source src="..." type="video/mp4" /> */}
            </video>

            {/* TikTok/Music icon bottom right */}
            <div className="video-badge-bottom">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </div>

            {/* Carousel dots */}
            <div className="video-carousel-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicMemories;
