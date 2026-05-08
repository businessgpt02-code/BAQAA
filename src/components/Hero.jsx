import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Hero.css';

const images = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2000&auto=format&fit=crop'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="hero-section" id="home">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div 
              className="hero-bg"
              style={{ backgroundImage: `url(${images[currentSlide]})` }}
            />
            <div className="hero-overlay"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-content-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Crafting Timeless Luxury <br /> Weddings & Destination Celebrations
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            BAQAA is a luxury wedding planning and destination wedding design company in Dubai, 
            creating bespoke celebrations filled with elegance, emotion, couture styling, 
            and unforgettable experiences across the UAE and worldwide.
          </motion.p>
          
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="btn-hero">Plan Your Wedding</button>
            <button className="btn-hero">Explore Our Celebrations</button>
          </motion.div>
        </motion.div>
      </div>


      <div className="hero-controls">
        <button onClick={prevSlide} className="control-btn"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="control-btn"><ChevronRight size={24} /></button>
      </div>

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle p-${i}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
