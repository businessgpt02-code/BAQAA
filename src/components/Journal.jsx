import React from 'react';
import { motion } from 'framer-motion';
import './Journal.css';

const blogPosts = [
  {
    title: 'STARRY BLOOM AFFAIR',
    description: 'A timeless canvas of sunflowers and moonlit skies.',
    image: '/images/van_gogh_blog.png',
    frameClass: 'arch-frame-tall'
  },
  {
    title: 'BLUSH PERU ESCAPADE',
    description: 'Colorful celebrations blooming beautifully within the majestic Andes.',
    image: '/images/pink_peru_blog.png',
    frameClass: 'arch-frame-round'
  },
  {
    title: 'LILIES OF MONET REVERIE',
    description: 'Artistic floral fantasies beside the enchanting lily waters.',
    image: '/images/garden_giverny_blog.png',
    frameClass: 'arch-frame-round'
  }
];

const Journal = () => {
  return (
    <section className="journal-section" id="journal">
      <div className="journal-header text-center">
        <div className="vertical-divider-journal"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="journal-title"
        >
          READ OUR BLOG
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="journal-subtitle"
        >
          Explore further into the stories and creative vision behind our most unforgettable luxury celebrations.
        </motion.p>
      </div>

      <div className="journal-collage-grid">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="blog-collage-card"
          >
            <div className={`artistic-frame ${post.frameClass}`}>
              <div className="card-texture"></div>
              <img src={post.image} alt={post.title} className="collage-base-img" />
              
              {/* Decorative Elements */}
              {index === 0 && (
                <>
                  <div className="paint-swatches left">
                    <div className="swatch" style={{ background: '#F4D03F' }}></div>
                    <div className="swatch" style={{ background: '#2E86C1' }}></div>
                    <div className="swatch" style={{ background: '#873600' }}></div>
                  </div>
                  <div className="floral-overlay-item sunflower">🌻</div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="color-palette-circles right">
                    <div className="palette-circle" style={{ background: '#FF1493' }}></div>
                    <div className="palette-circle" style={{ background: '#FFB6C1' }}></div>
                    <div className="palette-circle" style={{ background: '#FF69B4' }}></div>
                  </div>
                  <div className="floral-overlay-item pink-flower">🌸</div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="paint-palette-strips right">
                    <div className="palette-strip" style={{ background: '#229954' }}></div>
                    <div className="palette-strip" style={{ background: '#D4AC0D' }}></div>
                    <div className="palette-strip" style={{ background: '#7D3C98' }}></div>
                  </div>
                  <div className="shutter-detail"></div>
                </>
              )}
            </div>

            <div className="blog-content-area">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-desc">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="journal-footer-refined">
        <motion.button 
          className="btn-show-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SHOW ALL BLOGS
        </motion.button>
      </div>
    </section>
  );
};

export default Journal;
