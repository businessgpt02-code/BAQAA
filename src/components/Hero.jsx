import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Hero.css';

const images = [
  '/hero%20section/herosection1.png',
  '/hero%20section/herosection2.png',
  '/hero%20section/herosection3.jpeg',
  '/hero%20section/herosection4.jpeg',
  '/hero%20section/herosection5.jpeg',
  '/hero%20section/herosection6.jpeg',
  '/hero%20section/herosection7.jpeg',
  '/hero%20section/herosection8.jpeg',
  '/hero%20section/herosection9.jpeg',
  '/hero%20section/herosection10.jpeg'
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
            Crafting Timeless Luxury <br /> Weddings, Events & Destination Celebrations
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            BAQAA is a luxury wedding planning, events and destination wedding design company in Dubai,
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
