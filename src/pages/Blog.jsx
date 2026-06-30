import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

// Premium golden leaf emblem SVG
const LeafEmblem = () => (
  <div className="leaf-emblem-container">
    <svg className="leaf-emblem-svg" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 5 C55 12, 45 15, 30 15 H 10 M60 5 C65 12, 75 15, 90 15 H 110" stroke="var(--champagne-gold)" strokeWidth="0.75" strokeOpacity="0.5" />
      <path d="M60 2 C61.5 5, 63 9, 60 14 C57 9, 58.5 5, 60 2 Z" fill="var(--champagne-gold)" opacity="0.8" />
      <path d="M48 11 C51 11, 54 13, 55 16 C51 16, 49 14, 48 11 Z" fill="var(--champagne-gold)" opacity="0.6" />
      <path d="M72 11 C69 11, 66 13, 65 16 C69 16, 71 14, 72 11 Z" fill="var(--champagne-gold)" opacity="0.6" />
      <circle cx="60" cy="22" r="1.5" fill="var(--champagne-gold)" />
    </svg>
  </div>
);

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dubai Luxury Wedding Planner & Destination Wedding Journal | BAQAA";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <div className="blog-page">

      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="blog-hero-bg" style={{ backgroundImage: "url('/blogs/1.jpg')" }}>
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="blog-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="hero-title blog-hero-title"
          >
            <span>Dreamweaver & Storyteller</span>
            <span>Rachna Chadha</span>
            <span>From the Founder&apos;s Heart & Desk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="hero-description"
          >
            Read inspiring blogs on destination weddings, luxury wedding planning, wedding décor, beach weddings in Dubai, and exclusive behind-the-scenes blogs by our Dreamweaver and Storyteller Rachna Chadha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="https://wa.me/971554968810" target="_blank" rel="noopener noreferrer" className="btn-hero">Discover Our Stories</a>
            <a href="/#destinations" className="btn-hero">Explore Our Work</a>
          </motion.div>
        </div>
      </section>

      {/* Journal Folio (Book Spreads Layout) */}
      <section id="journal-folio" className="journal-folio-container">

        <div className="folio-header">
          <span className="folio-subtitle">BAQAA PUBLISHING</span>
          <h2 className="folio-main-title">THE WEDDING JOURNAL</h2>
          <div className="folio-header-divider"></div>
        </div>

        {/* SPREAD 1: Blog 1 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Decorative Corner Ornaments */}
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>

          {/* Spine Fold Shadow */}
          <div className="spread-gutter"></div>

          {/* Left Page: Cover & Introduction */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 01</span>
              <span>BAQAA ARCHIVES</span>
            </div>

            <span className="page-story-num">I</span>

            <h1 className="spread-story-title">A WEDDING DOCTOR ON CALL 24/7</h1>

            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                As the founder and designer of BAQAA with a journey of 35 years plus, my career began in the wonderful city of Dubai and kept growing with the exponential growth of this emirate. I am grateful to have stood tall and sturdy through all the challenging times of recessions and the pandemic. I tirelessly worked with dedication and passion to build my vast portfolio as seen on the website and our social media pages.
              </p>

              <p className="blog-paragraph">
                I work on a host of details for each project to deliver an exclusive and all immersive, memorable celebration / wedding for each client irrespective of budgets.
              </p>

              <p className="blog-paragraph">
                From the first meeting to identify their needs, followed by detailed discussions and coordination with the couple and sometimes their parents, the endeavour is to achieve a dream wedding / celebration for them.
              </p>

              <p className="blog-paragraph">
                I bring trust, expertise and years of strong portfolio to the table as a pioneer of the events and destination weddings industry in UAE with ground infrastructure at all the popular destinations of the world - India, Thailand, Europe, Turkey, Bali, Muscat, Doha & Baku.
              </p>

              <p className="blog-paragraph">
                I named my company BAQAA because its literal Sufi meaning is so apt for the company ethos I follow. BAQAA (Arabic: بقاء baqāʾ), with literal meaning of subsistence or permanency.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 01</span>
              </div>
            </div>
          </div>

          {/* Right Page: Checklist & Vision */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">THE EXECUTION MATRIX</h4>
              <p className="spread-section-subtitle">A glimpse of the details looked into while executing a signature wedding:</p>

              <ul className="spread-checklist">
                <li>Preparation of the budget</li>
                <li>Design and style of the event</li>
                <li>Scouting locations</li>
                <li>Photoshoots</li>
                <li>Planning a detailed checklist</li>
                <li>Identification and contracting of additional service providers</li>
                <li>Coordination of deliveries / services on the wedding day</li>
                <li>Have a back-up plan in the event of a disaster</li>
                <li>Help and prepare legal documentation and translations</li>
                <li>Event planning indicating the location of all important elements</li>
                <li>Event briefing for all the suppliers and the hotel or the venue</li>
                <li>Prepare a detailed customized presentation (sometimes up to 250 pages or more)</li>
                <li>Coordinating and executing the final days of the celebrations</li>
                <li>Always striving to give each couple their wedding its signature vision and experience.</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <blockquote className="spread-pull-quote">
                "I try to make BAQAA a safe, happy permanent abode for all our clients!"
              </blockquote>
            </div>

            <div className="spread-page-footer">
              <span className="newsletter-callout">JOIN US EVERY WEEK FOR MORE BEHIND THE SCENES STORIES</span>
              <div className="footer-links-row">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 02</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 2: Blog 2 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Essay */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 02</span>
              <span>VETERAN REFLECTIONS</span>
            </div>

            <span className="page-story-num">II</span>
            <h1 className="spread-story-title">LIFE AS A VETERAN WEDDING PLANNER</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                I am a veteran wedding planner & designer in the region. I personally don't believe in participating in the new age award events, as I believe the biggest stamp of appreciation is the testimonials of my clients.
              </p>
              <p className="blog-paragraph">
                I have worked with a creative vision to launch many firsts in most of the high-end prestigious world class hotels and wedding destinations. I have personally established the business of big fat destination weddings at these properties or destinations - in UAE since 2010, Turkey since 2012 & Portugal since 2017.
              </p>
              <p className="blog-paragraph">
                The goal of a memorable wedding is to provide an experience that makes guests feel special and celebrated with deep impressions of glamour, elegance and style!
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 03</span>
              </div>
            </div>
          </div>

          {/* Right Page: Learnings & Pillars */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">VETERAN LEARNINGS & STRENGTHS</h4>
              <p className="spread-section-subtitle">
                I have always strived to raise the bar, set milestones and leave memorable imprints. I feel extremely grateful that I can continue to do so. As a senior veteran, I am sharing some important aspects which have become my strengths and learnings over the years:
              </p>

              <ul className="scrollable-bullet-list">
                <li>Listen attentively to the client – couple/ parents / families</li>
                <li>Understand the style and personality of the couple</li>
                <li>Understand the emotions and expectations of the parents</li>
                <li>Create a harmonious balance between the families giving valuable inputs and advice at every step</li>
                <li>Stay mindful of the religious sanctity, sentiments and traditions</li>
                <li>Keep the cultural elements centric to the design and planning for some of the events</li>
                <li>Patience, availability, honest guidance and hard work with no shortcuts</li>
                <li>Give creative and unique ideas to add to the regular format of the weddings</li>
                <li>Ensure each wedding has its signature decor and design</li>
                <li>Try my best to ensure each wedding or celebration is noted for its decor and the experience</li>
                <li>Ensure my presence at every event</li>
                <li>Ensure my designs and details are followed by the execution team</li>
                <li>Ensure all the teams working on the project - hotel management, hotel staff, suppliers, artists, vendors, various teams are abreast with the requirements and details of all the events</li>
                <li>Guide the clients to hire very good, talented photography and videography company, as these are once in a lifetime captures</li>
                <li>Guide the clients on curated F&B experiences with every event</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <p className="blog-paragraph italic-highlight-box">
                "I work hours, weeks, days and months to create an experience extraordinary for every single client!"
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 04</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 3: Blog 3 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Cover & Introduction */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 03</span>
              <span>DESTINATION DOSSIER</span>
            </div>

            <span className="page-story-num">III</span>
            <h1 className="spread-story-title">DUBAI<br />A PREMIUM DESTINATION FOR WEDDINGS</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph font-serif-paragraph">
                Located on the Arabian Peninsula, the UAE is made up of seven Sheikhdoms (Emirates), with Dubai being the flagship and leading the way in hosting a large number of destination weddings in this glamourous city.
              </p>

              <p className="blog-paragraph">
                Beside the number of world known attractions, exciting range of shopping and luxurious hotels, Dubai is conveniently located between Europe, Africa and Asia, making it easily accessible from around the world. This vibrant city offers perfect weather from November to March.
              </p>

              <p className="blog-paragraph">
                If you've fallen in love with Dubai and have decided to get married under the charming Arabian sky, your options for having a wedding in this emirate are limitless. The different landscapes which are offered by various hotels make the destination wedding in Dubai an unforgettable experience.
              </p>

              <p className="blog-paragraph">
                Every hotel and location has its own charm. BAQAA's destination weddings in Dubai are part of the marketing brochure of many hotel brands. BAQAA has maintained new designs, new ideas and flawless execution for all the destination weddings in Dubai.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 05</span>
              </div>
            </div>
          </div>

          {/* Right Page: Advantages Checklist */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">
                DESTINATION WEDDINGS IN DUBAI HAVE THE FOLLOWING ADVANTAGES:
              </h4>

              <ul className="spread-checklist">
                <li>Unique, luxury weddings are created here</li>
                <li>Sunny and comfortable weather between November to March</li>
                <li>Excellent service standards</li>
                <li>Melting pot of many cultures and nationalities</li>
                <li>Cuisines of the world easily available</li>
                <li>Easy access to everything required for a destination Wedding in Dubai of any cultural or religious background</li>
                <li>Great infrastructure</li>
                <li>High safety standards</li>
                <li>High hygiene standards</li>
                <li>World class entertainment options</li>
                <li>Regional cuisines are easily available</li>
                <li>Dubai allows weddings of any religion</li>
                <li>Best globally recognized hotel brands</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <blockquote className="spread-pull-quote">
                "We transform emotions, heritage, and personal stories into timeless celebrations."
              </blockquote>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 06</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 4: Blog 4 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Intro & Story */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 04</span>
              <span>COASTAL CELEBRATIONS</span>
            </div>

            <span className="page-story-num">IV</span>
            <h1 className="spread-story-title">HOSTING A BEACH WEDDING IN DUBAI</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                A Beach wedding in Dubai has its own charm and magic! Dubai has now, more than ever, become a top destination for weddings and honeymoons as many couples fly from around the world to celebrate their wedding in Dubai.
              </p>

              <p className="blog-paragraph">
                For those living in the city and planning a wedding in this spectacular emirate, beach wedding is an available option for good 6 months of the year. They are some of the most beautiful wedding venues in the Middle East and in the entire world.
              </p>

              <p className="blog-paragraph">
                The beach wedding venues in Dubai are unparalleled in the beauty they add to any wedding experience.
              </p>

              <p className="blog-paragraph">
                Beach wedding venues are among the most popular choices for wedding venues. Dubai has beautiful beaches with stunning backdrops, which are an inspiration for the pioneering designer Rachna Chadha, the founder of BAQAA. For all the dream weddings created by her!
              </p>

              <p className="blog-paragraph">
                The first few beach weddings in Dubai for destination celebrations were conceptualised by the designer and founder Rachna Chadha in UAE.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 07</span>
              </div>
            </div>
          </div>

          {/* Right Page: Checklist & Highlight */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">BEACH WEDDING BLUEPRINTS</h4>
              <p className="spread-section-subtitle">Crucial elements to consider for absolute success:</p>

              <ul className="numbered-checklist">
                <li>
                  <span className="number-index">I</span>
                  <p>The beach venue should have good accessibility for setting up the decor, F&B, executing the wedding ceremony rituals etc.</p>
                </li>
                <li>
                  <span className="number-index">II</span>
                  <p>The sound set up and music should not be overpowered by the sound of waves.</p>
                </li>
                <li>
                  <span className="number-index">III</span>
                  <p>Make your decor windproof.</p>
                </li>
                <li>
                  <span className="number-index">IV</span>
                  <p>Make sure there's some shade if it's a day ceremony.</p>
                </li>
                <li>
                  <span className="number-index">V</span>
                  <p>Select the appropriate attire as per the ceremony theme and rituals.</p>
                </li>
                <li>
                  <span className="number-index">VI</span>
                  <p>Ensure the food set up is protected from the sun and the sand.</p>
                </li>
                <li>
                  <span className="number-index">VII</span>
                  <p>Arrange comfortable and safe seating.</p>
                </li>
                <li>
                  <span className="number-index">VIII</span>
                  <p>Accentuate the natural beauty of the venue.</p>
                </li>
                <li>
                  <span className="number-index">IX</span>
                  <p>Keep spray for bug bites and keep a first aid kit on site.</p>
                </li>
                <li>
                  <span className="number-index">X</span>
                  <p>Keep a plan B ready in case of strong winds or rain.</p>
                </li>
                <li>
                  <span className="number-index">XI</span>
                  <p>Plan a sunset wedding on the beach as it's the most magical experience.</p>
                </li>
              </ul>
            </div>

            {/* Case Study Block */}
            <div className="case-study-folio-box">
              <h5 className="case-study-title">TANYA & SAGAR'S BEACH WEDDING</h5>
              <p className="blog-paragraph size-small">
                It takes a lot of hard work of weeks and months to plan and execute perfect beach weddings. BAQAA ensures the process is stress free for the client and goes that extra mile to add ideas to enhance the decor and elevate the experience.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <a href="https://pin.it/5MWJJ34WG" target="_blank" rel="noopener noreferrer" className="spread-action-link">PINTEREST</a>
                <span className="page-number-footer">PAGE 08</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 5: Blog 5 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 05</span>
              <span>INTIMATE CELEBRATIONS</span>
            </div>

            <span className="page-story-num">V</span>
            <h1 className="spread-story-title">Fuschia Flow</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                During the times of social distancing, celebrations are still a part of human interaction. Engagements with 15 people can turn into an event beyond the expectations of the family right in their homes!
              </p>

              <p className="blog-paragraph">
                Occasions can still be celebrated as exciting life experiences with skillful planning and smart thinking to create magic with budgets. From the right color scheme for the flowers to enhance the Bride's attire to figuring out which way the curtains are going to fall to enhance the lighting while creating a warm, intimate space for dining right in the grand lobby of the house, each detail has to be thought through meticulously.
              </p>

            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 09</span>
              </div>
            </div>
          </div>

          <div className="spread-page page-right">
            <div className="page-intro-text">
              <p className="blog-paragraph">
                500 flowers were used where each had its own purpose, whether as a part of the floral wave around the Bridal sofa or on the candelabras, the coffee tables with hundreds of candlelights! The Fuschia Flow theme of flowers for this event was further accentuated against the ivory decorative furniture and a carpet which was all designed by our Founder and Designer, Rachna Chadha, in one day & executed in two days!
              </p>

              <p className="blog-paragraph">
                To view more of such unforgettable moments created by BAQAA please visit our website www.baqaawdc.com
              </p>
            </div>

            <div className="spread-philosophical-block">
              <blockquote className="spread-pull-quote">
                "Occasions can still be celebrated as exciting life experiences with skillful planning and smart thinking to create magic with budgets."
              </blockquote>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 10</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 6: Blog 6 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 06</span>
              <span>COVID WEDDINGS</span>
            </div>

            <span className="page-story-num">VI</span>
            <h1 className="spread-story-title covid-wedding-title">
              A Covid Wedding
              <span>Aug <span className="covid-year">2021</span></span>
            </h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                Mehek and Mueen’s wedding was successfully celebrated with a morning Nikah at their beautiful family home and an evening Mehndi/Sangeet on 7th August at the Palace Downtown.
              </p>

              <p className="blog-paragraph">
                This was followed by the wedding reception on 8th August 2021 at the Waldorf Astoria, Palm.
              </p>

              <p className="blog-paragraph">
                BAQAA has a heartwarming story to share about this wedding. Mehak Wani, an accomplished, capable, independent young cybercrime engineer for Deloitte, is a Kashmiri working and residing in Belgium. Mueen Haka, a senior finance engineer for Nokia, resides and works in Canada. Mehak approached the founder and designer of BAQAA, Rachna Chadha in April through Google, having checked the portfolio of the company. Their large traditional wedding with a large community of friends and family was scheduled for May in Kashmir. However, Covid changed it all!
              </p>

              <p className="blog-paragraph">
                With constant guidance and positive support from Rachna Chadha, Mehak started planning the wedding in Dubai.
              </p>

              <p className="blog-paragraph">
                Dubai was the best option with safe covid guidelines for weddings. Dubai was a convenient destination for all to congregate from India, Europe, and Canada. Even with this decision taken, every few days the problems of travel restrictions kept hindering all the plans.
              </p>

            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 11</span>
              </div>
            </div>
          </div>

          <div className="spread-page page-right">
            <div className="page-intro-text">
              <p className="blog-paragraph">
                The main concern was about the travel plans of Mehak's parents from Kashmir to Dubai. Finally, they were sent to Doha to quarantine in a hotel for two weeks. With no friends or family there, Mehak took two trips up and down to ensure they were comfortable and cheerful. However, the day they had to take their flight to Dubai they were not allowed to board! They were asked to quarantine for another day making it a chaotic 48 hours of finding solutions once again. The Covid mayhem continued!
              </p>

              <p className="blog-paragraph">
                In the meantime, other wedding designs and planning companies were recommended to the couple closer to the final dates, who were pushing hard for the business. In Mueen's words "Mehak's heart was set on Mrs. Chadha and BAQAA. She had deep faith in her and the company in spite of meeting other companies upon the insistence of some family members who reside in Dubai.
              </p>

              <p className="blog-paragraph">
                After all was clear about the arrival of the parents, literally 3 days before the celebrations, the contract was signed and sealed with BAQAA. BAQAA ensured that the décor, styling, technical production of sound, décor/ambience lighting, and the complete overall experience was like a dream for the couple. BAQAA added a lot of beautiful surprises for the couple at all the events, not limiting the creativity to any budgets! Mrs. Rachna Chadha has always ensured every event/wedding delivered leaves a deep imprint of her passion!
              </p>

              <p className="blog-paragraph">
                The human spirit and love can conquer all. Covid has taught us that we must be grateful for each moment of happiness in hand and pray for the best in the future.
              </p>

              <p className="blog-paragraph">
                BAQAA has created some great lifetime memories for many clients during Covid, budgets being no criteria to deliver the best at all times!
              </p>

              <p className="blog-paragraph">
                To view more of such unforgettable moments created by BAQAA please visit our website www.baqaawdc.com
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 12</span>
              </div>
            </div>
          </div>
        </motion.article>

      </section>
    </div>
  );
};

export default Blog;
