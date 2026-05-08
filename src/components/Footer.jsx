import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top-divider"></div>
      
      <div className="footer-main-grid">
        {/* Column 1: Get Around */}
        <div className="footer-col">
          <h4 className="footer-heading">GET AROUND</h4>
          <ul className="footer-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT THE COMPANY</a></li>
            <li><a href="#founder">MEET THE FOUNDER</a></li>
            <li><a href="#work">OUR WORK</a></li>
          </ul>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col">
          <h4 className="footer-heading">LINKS</h4>
          <ul className="footer-links">
            <li><a href="#tribe">MEET THE TRIBE</a></li>
            <li><a href="#destinations">DESTINATIONS</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>

        {/* Column 3: Logo (Center) */}
        <div className="footer-col logo-col">
          <div className="footer-logo-box">
            <img src="/logo/BAQAA1.png" alt="BAQAA Logo" className="footer-logo-img" />
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="footer-col">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="social-row">
            <a href="#" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <div className="social-divider"></div>
            <a href="#" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <div className="social-divider"></div>
            <a href="#" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#555"/></svg>
            </a>
            <div className="social-divider"></div>
            <a href="#" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.55 11.75l-5.8 3.27z"/></svg>
            </a>
          </div>
          <div className="contact-info-footer">
            <p className="footer-email">hello@baqaa.com</p>
            <p className="footer-legal">Terms & Condition | Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-strip">
        <p className="copyright-text">
          BAQAA Glamour Weddings © 2026 — All photos and videos on this website belong to BAQAA Glamour Weddings unless stated otherwise.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
