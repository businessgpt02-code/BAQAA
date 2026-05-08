import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SignatureCelebrations.css';

const celebrations = [
  {
    id: '01',
    title: 'GOLDEN HORIZONS',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'WHISPERS OF SAND',
    image: 'https://images.unsplash.com/photo-1545232979-8bf43eead020?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'THE ROYAL SOIRÉE',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'MOONLIT SERENADE',
    image: 'https://images.unsplash.com/photo-1465495910483-0d57229a49b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'BLUSH IN BLOOM',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop'
  }
];

const SignatureCelebrations = () => {
  const [activeImage, setActiveImage] = useState(celebrations[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="signature-section" id="work">
      <div className="top-header-area text-center">
        <div className="vertical-divider-work"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="work-heading"
        >
          OUR WORK
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="work-subtitle"
        >
          Every celebration we create is inspired by a unique story. Explore a glimpse into our world of timeless experiences.
        </motion.p>
      </div>

      <div className="signature-main-layout">
        <div className="project-navigation">
          {celebrations.map((item, index) => (
            <div 
              key={item.id}
              className={`project-nav-item ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => {
                setActiveImage(item.image);
                setActiveIndex(index);
              }}
            >
              <span className="project-number">{item.id}</span>
              <h3 className="project-title">{item.title}</h3>
              {activeIndex === index && (
                <motion.div layoutId="underline" className="project-underline" />
              )}
            </div>
          ))}
        </div>

        <div className="feature-image-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="image-container-rect"
            >
              <img src={activeImage} alt="Project Preview" className="rect-image" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="footer-button-area text-center">
        <motion.button 
          className="btn-more-albums"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          MORE ALBUMS
        </motion.button>
      </div>
    </section>
  );
};

export default SignatureCelebrations;
