import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import './About.css';

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="texture-overlay"></div>
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <iframe 
            src="https://player.vimeo.com/video/191335609?background=1&badge=0&autopause=0&player_id=0&app_id=58479" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            className="hero-video-iframe"
            title="INDIAN WEDDING IN DUBAI | PARK HYATT"
          ></iframe>
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hero-title"
          >
            BAQAA | Timeless Luxury Weddings, <br/> Events & Immersive Destination Experiences
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hero-description"
          >
            From Dubai to global destinations, BAQAA curates luxury weddings, events <br/> and bespoke celebrations through visionary design, floral artistry, and seamless execution.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="#story" className="btn-hero">Discover Our Story</a>
            <a href="/#weddings" className="btn-hero">Explore Our Celebrations</a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT BAQAA (REDESIGN) */}
      <section id="story" className="section about-baqaa-redesign">
        <div className="floral-decoration side-right">
          <img src="/florals/floral1.png" alt="" />
        </div>
        <div className="editorial-container">
          <motion.div className="editorial-left" {...fadeIn}>
            <div className="arched-frame">
              <div className="frame-outline"></div>
              <img src="/hero section/herosection3.png" alt="Luxury Wedding Celebration" />
            </div>
          </motion.div>
          
          <motion.div className="editorial-right" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="editorial-content-wrapper">
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>
              
              <h2 className="editorial-heading">ABOUT BAQAA</h2>
              
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>
              
              <div className="editorial-body">
                <p className="highlight">Thirty-eight years of vision, leadership, and an unwavering commitment to destination excellence.</p>
                <p>
                  Established as a premier luxury wedding and events house, BAQAA orchestrates seamless, turnkey journeys that transcend borders. 
                  Our expertise lies in the delicate balance of artistry and scale, built on a storied heritage of trust and precision.
                </p>
                <p>
                  We do not merely plan events; we curate emotionally immersive experiences, transforming your most cherished dreams into a legacy 
                  of timeless celebrations and enduring memories.
                </p>
              </div>
              
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>
              
              <p className="tagline-editorial">TIMELESS CELEBRATIONS. ENDURING MEMORIES.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — FOUNDER (EDITORIAL COLLAGE) */}
      <section className="section founder-editorial">
        <div className="founder-container">
          <div className="founder-visual-col">
            <div className="editorial-collage">
              {/* 1. Background Paper Layers */}
              <div className="collage-paper paper-1"></div>
              <div className="collage-paper paper-2"></div>
              
              {/* 2. Gold Pin and Connecting Lines */}
              <div className="gold-pin-ornament">
                <div className="pin-circle"></div>
                <div className="pin-line-diag"></div>
              </div>
              
              {/* 3. Floral Vertical Accent (Left Only) */}
              <div className="floral-vertical-collage">
                <img src="/images/floral_vertical_left.png" alt="" />
              </div>

              {/* 4. Arch Portrait */}
              <div className="portrait-arch-wrapper">
                <img src="/images/founder.png" alt="Rachna Chadha" />
                <div className="portrait-gold-outline"></div>
              </div>
              
              {/* 7. Quote Card (Stationery Style) */}
              <motion.div 
                className="quote-card-collage"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className="quote-card-content">
                  <span className="quote-serif">“</span>
                  <p>
                    Every wedding is not an event — <br/>
                    it is a journey, a story waiting to be told, <br/>
                    and a memory designed to last a lifetime.
                  </p>
                  <span className="quote-serif flipped">”</span>
                  <div className="card-mini-ornament">
                    <svg viewBox="0 0 60 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="25" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                      <path d="M28 5 L30 3 L32 5 L30 7 Z" fill="var(--champagne-gold)" />
                      <line x1="35" y1="5" x2="60" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="founder-content-col">
            <motion.div className="content-wrapper" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="founder-vertical-line"></div>
              <span className="founder-label-text">THE FOUNDER</span>
              <div className="founder-horizontal-divider"></div>
              
              <h2 className="founder-name">Rachna Chadha</h2>
              <h3 className="founder-subtitle-editorial">THE DREAM WEAVER BEHIND BAQAA</h3>
              
              <div className="editorial-divider-thin"></div>
              
              <div className="editorial-narrative">
                <p>
                  Rachna Chadha is a visionary storyteller who transforms emotions, heritage, and dreams into celebrations that are immersive, meaningful, and timeless.
                </p>
                <p>
                  Rooted in intention and artistry, her creative philosophy transforms every detail into part of a larger narrative — one that reflects the essence of each couple’s unique journey.
                </p>
                <p>
                  From grand destination weddings to intimate luxury experiences, she personally shapes every celebration with precision, warmth, creativity, and soul.
                </p>
                <p>
                  For over three decades, her signature approach has blended artistic imagination with flawless execution, creating unforgettable celebrations recognized for elegance, authenticity, and emotional resonance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="floral-edge-right-bottom">
          <img src="/florals/floral2.png" alt="" />
        </div>
      </section>

      {/* SECTION 4 — MILESTONES / LEGACY TIMELINE (IDENTICAL REPLICATION) */}
      <section className="section about-milestones-legacy">
        <div className="milestone-floral-left">
          <img src="/florals/floral3.png" alt="" />
        </div>
        
        <motion.div className="section-header-editorial text-center" {...fadeIn}>
          <div className="vertical-divider-work"></div>
          <h2 className="work-heading">MILESTONES</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="work-subtitle"
          >
            A journey of three decades, defined by vision, leadership, and an unwavering commitment to creating extraordinary experiences.
          </motion.p>
        </motion.div>
        
        <div className="legacy-timeline-viewport">
          {/* THE GOLDEN THREAD (SVG PATH) - CONNECTING CARDS */}
          <svg className="timeline-svg-path-exact" viewBox="0 0 1200 800" fill="none">
            {/* SINGLE CONTINUOUS GOLD THREAD — TOP 4 CARDS (AS PERFECTED) */}
            <motion.path
              d="M150,220 C270,220 330,180 450,220 C570,260 630,180 750,220 C870,260 930,220 1050,220"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            
            {/* CONNECTION BETWEEN ROWS */}
            <motion.path 
              d="M1050,220 C1250,220 1250,410 600,410 C0,410 0,600 150,600"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 2 }}
            />

            {/* BOTTOM ROW CONNECTORS */}
            <motion.path
              d="M150,600 L450,600 L750,600 L1050,600"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
            />

            {/* Connection Nodes — Top Row (As Perfected) */}
            {[150, 450, 750, 1050].map((x, i) => (
              <motion.circle
                key={`node-t-${i}`}
                cx={x}
                cy={220}
                r="4"
                fill="var(--champagne-gold)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.6 + 0.5 }}
              />
            ))}

            {/* Connection Nodes — Bottom Row */}
            {[150, 450, 750, 1050].map((x, i) => (
              <motion.circle
                key={`node-b-${i}`}
                cx={x}
                cy={600}
                r="4"
                fill="var(--champagne-gold)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 4 + i * 0.6 }}
              />
            ))}
          </svg>

          <div className="timeline-grid-exact">
            {/* TOP ROW */}
            <motion.div className="milestone-item-exact pos-1" {...fadeIn}>
              <div className="stationery-card card-circle">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1992</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Launch of Bollywood <br/> events & musical <br/> concerts</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-2" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="stationery-card card-arch">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1996</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Leadership of award <br/> winning Dubai Shopping <br/> Festival events</p>

                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-3" {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="stationery-card card-ornate-big">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1995 to 2009</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">
                    Launch of luxury properties, <br/> global brands & couture houses, <br/> bespoke events for HNW <br/> clients and banks
                  </p>

                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-4" {...fadeIn} transition={{ delay: 0.6 }}>
              <div className="stationery-card card-circle badge-mode">
                <div className="stationery-inner">

                  <div className="badge-icon-wrap">
                    <img src="/handshake/handshake.png" alt="Handshake" className="handshake-icon-img" />
                  </div>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc font-bold gold-text">Strategic <br/> Hotel Partnerships</p>
                  <div className="card-bottom-deco">✦</div>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM ROW */}
            <motion.div className="milestone-item-exact pos-5" {...fadeIn} transition={{ delay: 0.8 }}>
              <div className="stationery-card card-ribbon">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">2010</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Indian destination <br/> weddings launched <br/> in the UAE</p>
                </div>
                <div className="ribbon-bottom-notch"></div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-6" {...fadeIn} transition={{ delay: 1.0 }}>
              <div className="stationery-card card-circle">
                <div className="stationery-inner">
                  <h3 className="year-burgundy">2012</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Expansion <br/> into Turkey</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-7" {...fadeIn} transition={{ delay: 1.2 }}>
              <div className="stationery-card card-arch">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">2017</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Expansion into <br/> Middle East, Europe <br/> and South East Asia</p>

                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-8" {...fadeIn} transition={{ delay: 1.4 }}>
              <div className="stationery-card card-circle lotus-mode">
                <div className="stationery-inner">
                  <div className="lotus-icon-wrap">
                    <img src="/handshake/lotus.png" alt="Lotus" className="lotus-icon-img" />
                  </div>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Transforming destination <br/> weddings from an idea <br/> into an industry</p>
                  <div className="card-bottom-deco">
                    <div className="mini-divider-dots"><span>•</span><span>•</span><span>•</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Center Ornament */}
          <div className="timeline-bottom-ornament">
             <img src="/florals/underline.png" alt="" className="bottom-underline-img" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR STRENGTHS (EXACT REPLICATION) */}
      <section className="about-strengths-identical relative">
        {/* Large Botanical Background Sketch (Left Edge) */}
        <div className="botanical-sketch-side">
          {/* Botanical sketch removed */}
        </div>

        <div className="section-container-luxury">
          {/* TOP HEADER */}
          <motion.div className="strengths-header-lux" {...fadeIn}>
             <div className="vertical-divider-work"></div>
             <h2 className="work-heading">OUR STRENGTHS</h2>
             <div className="header-bottom-ornament">
                <svg viewBox="0 0 100 20" className="mini-ornament-svg">
                   <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                   <path d="M48 10 L50 7 L52 10 L50 13 Z" fill="var(--champagne-gold)" />
                </svg>
             </div>
             <p className="subtitle-strengths-lux">EXPERTISE. PRECISION. PERFECTION.</p>
             <div className="divider-thin-lux"></div>
          </motion.div>

          <div className="strengths-main-grid">
            {/* LEFT: TALL LUXURY ARCHED PANEL */}
            <motion.div 
              className="arch-panel-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <div className="luxury-arch-card">
                <div className="arch-card-inner">
                  {/* Top Monogram Area */}
                    <div className="arch-top-monogram">
                      <div className="monogram-lotus">
                        <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                           <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                           <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                        </svg>
                      </div>
                      <div className="monogram-box">
                        <img src="/logo/BAQAA2.png" alt="BAQAA Logo" className="monogram-logo-img" />
                      </div>
                      <div className="monogram-lotus">
                        <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                           <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                           <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                        </svg>
                      </div>
                    </div>

                  <div className="arch-content-lux">
                    <p className="arch-p-top">
                      BAQAA, with <span className="burgundy-accent">38 years</span> of industry expertise, delivers complete turnkey solutions, seamlessly managing every element from macro vision to micro detailing.
                    </p>
                    
                    <div className="arch-divider-lotus">
                      <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                         <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                         <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                      </svg>
                    </div>

                    <p className="arch-p-bottom">
                      Our scope spans concept design and décor, hospitality, entertainment, event orchestration, F&B curation, and end-to-end execution.
                    </p>
                    
                    <div className="arch-bottom-ornament">
                       <div className="diamond-line">
                          <div className="line"></div>
                          <div className="diamond-mini"></div>
                          <div className="line"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: LARGE CIRCULAR INFOGRAPHIC (SVG REBUILD FOR PRECISION) */}
            <motion.div 
              className="infographic-wheel-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="luxury-wheel-wrapper">
                <svg className="wheel-svg-exact" viewBox="0 0 600 600" fill="none">
                  <defs>
                    <path id="wheelTopPath" d="M 120, 300 A 180,180 0 0,1 480,300" />
                    <path id="wheelBottomPath" d="M 120, 300 A 180,180 0 0,0 480,300" />
                    
                    {/* Segment Template: 60 degree annular sector centered at top (-90deg) */}
                    <path id="segTemplate" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                    
                    {/* Inner annular sector path for segments */}
                    {/* We'll just define the segments manually for better control */}
                  </defs>

                  {/* Dotted outer circle */}
                  <circle cx="300" cy="300" r="285" stroke="var(--champagne-gold)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
                  
                  {/* Cardinal Diamonds */}
                  <g fill="var(--champagne-gold)">
                    <rect x="297" y="12" width="6" height="6" transform="rotate(45 300 15)" />
                    <rect x="297" y="582" width="6" height="6" transform="rotate(45 300 585)" />
                    <rect x="12" y="297" width="6" height="6" transform="rotate(45 15 300)" />
                    <rect x="582" y="297" width="6" height="6" transform="rotate(45 585 300)" />
                  </g>

                  {/* WHEEL SEGMENTS (Using g rotations) */}
                  <g className="segments-radial-group">
                    {/* 1. CONCEPT DESIGN (Burgundy, Top) */}
                    <g className="wheel-seg-group" transform="rotate(0 300 300)">
                      <path className="wheel-seg burgundy-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135)">
                         <path d="M-10,-15 L10,-15 L10,5 L0,15 L-10,5 Z" fill="none" stroke="var(--champagne-gold)" strokeWidth="1" />
                         <text y="35" textAnchor="middle" className="wheel-text-inner text-white">CONCEPT DESIGN</text>
                      </g>
                    </g>

                    {/* 2. DÉCOR DESIGN (Ivory, Top-Right) */}
                    <g className="wheel-seg-group" transform="rotate(60 300 300)">
                      <path className="wheel-seg ivory-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135) rotate(-60)">
                         <g transform="translate(10, 0)" fill="none" stroke="var(--champagne-gold)" strokeWidth="1">
                            <rect x="-7" y="-7" width="14" height="14" transform="rotate(45)" />
                            <path d="M0,-14 L0,-18 M0,14 L0,18 M-14,0 L-18,0 M14,0 L18,0" />
                         </g>
                         <text x="10" y="35" textAnchor="middle" className="wheel-text-inner text-dark">DÉCOR DESIGN</text>
                      </g>
                    </g>

                    {/* 3. HOSPITALITY (Burgundy, Bottom-Right) */}
                    <g className="wheel-seg-group" transform="rotate(120 300 300)">
                      <path className="wheel-seg burgundy-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135) rotate(-120)">
                         <g fill="none" stroke="var(--champagne-gold)" strokeWidth="1.5">
                            <path d="M-12,10 L12,10" />
                            <path d="M-10,10 A10,10 0 0,1 10,10" />
                            <circle r="1.5" cx="0" cy="-1.5" />
                         </g>
                         <text y="35" textAnchor="middle" className="wheel-text-inner text-white">HOSPITALITY</text>
                      </g>
                    </g>

                    {/* 4. F&B CURATION (Ivory, Bottom) */}
                    <g className="wheel-seg-group" transform="rotate(180 300 300)">
                      <path className="wheel-seg ivory-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135) rotate(-180)">
                         <g fill="none" stroke="var(--champagne-gold)" strokeWidth="1.5">
                            <circle r="10" cx="0" cy="0" />
                            <path d="M-14,-8 L-14,8 M14,-8 L14,8" />
                            <path d="M0,-5 L0,5 M-5,0 L5,0" opacity="0.3" />
                         </g>
                         <text y="35" textAnchor="middle" className="wheel-text-inner text-dark">F&B CURATION</text>
                      </g>
                    </g>

                    {/* 5. ENTERTAINMENT (Burgundy, Bottom-Left) */}
                    <g className="wheel-seg-group" transform="rotate(240 300 300)">
                      <path className="wheel-seg burgundy-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135) rotate(-240)">
                         <g fill="none" stroke="var(--champagne-gold)" strokeWidth="1.5">
                            <path d="M-4,8 L-4,-8 L8,-12 L8,4" />
                            <path d="M-4,-2 L8,-6" />
                            <circle r="3.5" cx="-7.5" cy="8" />
                            <circle r="3.5" cx="4.5" cy="4" />
                         </g>
                         <text y="35" textAnchor="middle" className="wheel-text-inner text-white">ENTERTAINMENT</text>
                      </g>
                    </g>

                    {/* 6. ORCHESTRATION (Ivory, Top-Left) */}
                    <g className="wheel-seg-group" transform="rotate(300 300 300)">
                      <path className="wheel-seg ivory-seg" d="M250,213.4 L165,66.2 A270,270 0 0,1 435,66.2 L350,213.4 A100,100 0 0,0 250,213.4 Z" />
                      <g transform="translate(300, 135) rotate(-300) translate(-10, 0)">
                         <g fill="none" stroke="var(--champagne-gold)" strokeWidth="1.5">
                            <circle r="3" cx="0" cy="0" fill="var(--champagne-gold)" />
                            <path d="M0,-12 L0,12 M-12,0 L12,0 M-8,-8 L8,8 M8,-8 L-8,8" opacity="0.6" />
                         </g>
                         <text y="35" textAnchor="middle" className="wheel-text-inner text-dark">ORCHESTRATION</text>
                      </g>
                    </g>
                  </g>

                  {/* Outer Circular Path Text */}
                  <text className="wheel-curved-text gold-text" style={{ fontSize: '14px', letterSpacing: '0.4em' }}>
                    <textPath href="#wheelTopPath" startOffset="50%" textAnchor="middle">
                      COMPLETE TURNKEY SOLUTIONS
                    </textPath>
                  </text>
                  <text className="wheel-curved-text gold-text" style={{ fontSize: '14px', letterSpacing: '0.4em' }}>
                    <textPath href="#wheelBottomPath" startOffset="50%" textAnchor="middle">
                      FROM VISION TO PERFECTION
                    </textPath>
                  </text>

                  {/* CENTER LOGO AREA (Inside SVG for perfect alignment) */}
                  <g className="wheel-center-group">
                    <circle cx="300" cy="300" r="95" fill="#fff" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                    <circle cx="300" cy="300" r="88" fill="none" stroke="var(--champagne-gold)" strokeWidth="1" strokeDasharray="1 3" />
                    <image 
                      href="/logo/BAQAA2.png" 
                      x="215" 
                      y="235" 
                      width="170" 
                      height="130" 
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    {/* Decorative wreath bits */}
                    <path d="M300,225 L305,235 L295,235 Z" fill="var(--champagne-gold)" />
                    <path d="M300,375 L305,365 L295,365 Z" fill="var(--champagne-gold)" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DESIGN & FLORALS */}
      <section className="section design-florals-section">
        <div className="editorial-container">
          <motion.div className="design-florals-left" {...fadeIn}>
             <div className="design-florals-header-area">
                <div className="vertical-divider-work"></div>
                <h2 className="design-florals-heading">
                   <span className="charcoal-text">Crafting Stories</span><br/>
                   <span className="charcoal-text">Through Design <br/>& Florals</span>
                </h2>
             </div>

             <div className="florals-narrative-list">
                {/* Row 1 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/1.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Floral design, under our founder’s vision, is never decorative - it is narrative-driven</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 2 */}
                <div className="narrative-item">
                    <div className="narrative-icon-card">
                       <img src="/handshake/2.png" alt="Floral Design" className="narrative-icon-img" />
                    </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Each floral composition has a story, a flow and a purpose of experience</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 3 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/3.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Colors evolve through the wedding journey, textures change with time of day, and spatial movement is carefully orchestrated</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 4 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/4.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Her florals are designed to guide emotion, not merely fill space</p>
                   </div>
                </div>
             </div>
          </motion.div>
          
          <motion.div className="design-florals-right" {...fadeIn} transition={{ delay: 0.3 }}>
             <div className="floral-image-frame-lux">
                <img src="/florals/floral4.png" alt="Exquisite Floral Design" className="floral-main-img" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL SECTION — CTA (SHARED WITH HOMEPAGE) */}
      <CTA 
        bgImage="/CTA/CTA2.png" 
        title="Plan Your Luxury Destination Wedding With BAQAA"
        description="Connect with BAQAA to design luxury destination weddings, bespoke celebrations, floral experiences, and unforgettable event journeys crafted with timeless elegance and precision."
      />
    </div>
  );
};

export default About;
