import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Destinations.css';

const destinations = [
  { 
    name: 'RAJASTHAN', 
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    name: 'KERALA', 
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    name: 'ANDAMANS', 
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop' 
  }
];

const AnimatedTravelPath = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll to drawing progress
  const pathLength = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  
  // Wide elegant curved path
  const d = "M20 60 Q 250 10, 500 60 T 980 60";

  return (
    <div ref={containerRef} className="travel-path-container">
      <svg width="1000" height="120" viewBox="0 0 1000 120" fill="none" className="travel-path-svg">
        {/* Animated Dashed Path */}
        <motion.path
          d={d}
          stroke="#8d8a86"
          strokeWidth="1.2"
          strokeDasharray="10 14"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Location Pin Left (Static) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path 
            d="M20 60 C20 54, 26 48, 20 42 C14 48, 20 54, 20 60 Z" 
            fill="#8d8a86" 
          />
          <circle cx="20" cy="50" r="2.5" fill="#8d8a86" />
        </motion.g>

        {/* Moving Paper Airplane */}
        <motion.g
          style={{ 
            offsetPath: `path("${d}")`,
            offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"]),
            offsetRotate: "auto 15deg", // Natural tilt
            opacity: useTransform(pathLength, [0, 0.05], [0, 1])
          }}
        >
          {/* Outlined minimalist paper plane */}
          <path 
            d="M-10 -5 L10 0 L-10 5 L-7 0 L-10 -5 Z M-7 0 L10 0" 
            fill="none" 
            stroke="#8d8a86" 
            strokeWidth="1" 
            strokeLinejoin="round" 
          />
        </motion.g>
      </svg>
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-header text-center">
        <div className="vertical-divider-dest"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dest-title"
        >
          TOP WEDDING DESTINATIONS OF BAQAA
        </motion.h2>
        
        <AnimatedTravelPath />
      </div>

      <div className="destinations-grid-refined">
        {destinations.map((dest, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="dest-card-refined"
          >
            <div className="dest-img-box">
              <img src={dest.image} alt={dest.name} />
            </div>
            
            <div className="dest-map-box">
              <img src="/images/map_outline.png" alt="Map Outline" className="map-outline-img" />
              {/* Pink Marker */}
              <div className="pink-marker"></div>
            </div>
            
            <h3 className="dest-name-label">{dest.name}</h3>
            
            <button className="dest-explore-btn">EXPLORE</button>
          </motion.div>
        ))}
      </div>

      <div className="destinations-footer-refined">
        <motion.button 
          className="btn-more-dest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          MORE DESTINATIONS
        </motion.button>
      </div>
    </section>
  );
};

export default Destinations;
