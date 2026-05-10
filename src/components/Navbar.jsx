import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#">
            <img 
              src="/logo/BAQAA.png" 
              alt="BAQAA" 
              className={`logo-img logo-default ${!scrolled ? 'visible' : ''}`} 
            />
            <img 
              src="/logo/BAQAA1.png" 
              alt="BAQAA" 
              className={`logo-img logo-scrolled ${scrolled ? 'visible' : ''}`} 
            />
          </a>
        </div>
        
        <ul className="nav-links">
          {['Home', 'About', 'Weddings', 'Destinations', 'Journal', 'BAQAA BAZAR', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={item === 'BAQAA BAZAR' ? '#' : `#${item.toLowerCase()}`} 
                className="nav-link text-editorial"
                onClick={item === 'BAQAA BAZAR' ? (e) => e.preventDefault() : undefined}
                style={item === 'BAQAA BAZAR' ? { cursor: 'default' } : {}}
              >
                {item}
                <span className="underline" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
