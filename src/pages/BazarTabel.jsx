import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BazarTabel.css';
import {
  CalendarDays,
  Leaf,
  MapPin,
  Truck
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg className="catalogue-brand-icon" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.04 3.2c-7.03 0-12.76 5.72-12.76 12.76 0 2.25.59 4.45 1.72 6.39L3.16 29l6.82-1.79a12.72 12.72 0 0 0 6.06 1.54h.01c7.03 0 12.76-5.72 12.76-12.76S23.08 3.2 16.04 3.2Zm0 23.39h-.01c-1.94 0-3.84-.52-5.5-1.51l-.39-.23-4.05 1.06 1.08-3.95-.25-.41a10.56 10.56 0 0 1-1.62-5.59c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.53c0 5.86-4.78 10.62-10.66 10.62Zm5.84-7.96c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="catalogue-brand-icon" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 5.4c3.45 0 3.86.01 5.22.08 1.26.06 1.94.27 2.39.44.6.23 1.03.51 1.48.96.45.45.73.88.96 1.48.17.45.38 1.13.44 2.39.06 1.36.08 1.77.08 5.22s-.01 3.86-.08 5.22c-.06 1.26-.27 1.94-.44 2.39-.23.6-.51 1.03-.96 1.48-.45.45-.88.73-1.48.96-.45.17-1.13.38-2.39.44-1.36.06-1.77.08-5.22.08s-3.86-.01-5.22-.08c-1.26-.06-1.94-.27-2.39-.44-.6-.23-1.03-.51-1.48-.96-.45-.45-.73-.88-.96-1.48-.17-.45-.38-1.13-.44-2.39-.06-1.36-.08-1.77-.08-5.22s.01-3.86.08-5.22c.06-1.26.27-1.94.44-2.39.23-.6.51-1.03.96-1.48.45-.45.88-.73 1.48-.96.45-.17 1.13-.38 2.39-.44 1.36-.06 1.77-.08 5.22-.08Zm0-2.33c-3.51 0-3.95.02-5.33.08-1.38.06-2.32.28-3.14.6-.85.33-1.57.77-2.29 1.49-.72.72-1.16 1.44-1.49 2.29-.32.82-.54 1.76-.6 3.14-.06 1.38-.08 1.82-.08 5.33s.02 3.95.08 5.33c.06 1.38.28 2.32.6 3.14.33.85.77 1.57 1.49 2.29.72.72 1.44 1.16 2.29 1.49.82.32 1.76.54 3.14.6 1.38.06 1.82.08 5.33.08s3.95-.02 5.33-.08c1.38-.06 2.32-.28 3.14-.6.85-.33 1.57-.77 2.29-1.49.72-.72 1.16-1.44 1.49-2.29.32-.82.54-1.76.6-3.14.06-1.38.08-1.82.08-5.33s-.02-3.95-.08-5.33c-.06-1.38-.28-2.32-.6-3.14-.33-.85-.77-1.57-1.49-2.29-.72-.72-1.44-1.16-2.29-1.49-.82-.32-1.76-.54-3.14-.6-1.38-.06-1.82-.08-5.33-.08Z" />
    <path d="M16 9.36A6.64 6.64 0 1 0 16 22.64 6.64 6.64 0 0 0 16 9.36Zm0 10.95A4.31 4.31 0 1 1 16 11.69a4.31 4.31 0 0 1 0 8.62Z" />
    <circle cx="22.9" cy="9.1" r="1.55" />
  </svg>
);

const themes = [
  {
    id: 'summer-citrus',
    name: 'Summer Citrus',
    mood: 'Tangy . Cool . Bright',
    desc: 'Vibrant and refreshing arrangements bursting with the energy of summer sunshine.',
    img: '/BAQAA BAZAR/1.png',
    catalogueDesc: 'Inspired from the colors of summer fruits. These special floral arrangements & tablescapes exude a vibrant energy. Gift it or celebrate intimate occasions with your family at home.'
  },
  {
    id: 'country-summer',
    name: 'Country Summer',
    mood: 'Nature . Lush Green . Free-Spirited',
    desc: 'Wild, unstructured beauty that brings the meadow to your celebration.',
    img: '/BAQAA BAZAR/2.png',
    catalogueDesc: 'Inspired from the lush greenery & intoxicating wild foliage of a country home. These special floral arrangements & tablescapes are a blend of the free spirit of nature’s bounty. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'the-verandah',
    name: 'The Verandah',
    mood: 'Vintage . Outdoor . Fresh',
    desc: 'Nostalgic elegance with a mix of classic blooms and fresh greens.',
    img: '/BAQAA BAZAR/3.png',
    catalogueDesc: 'Inspired from the outdoor comfort of entertaining on one’s terrace or verandah. These colonial blue pottery vases with fresh flowers in colors that complement the theme exude happiness. These special floral arrangements and tablescapes represent the charm of vintage hospitality.'
  },
  {
    id: 'spring-soiree',
    name: 'Spring Soireé',
    mood: 'Cheery . Colourful . Bountiful',
    desc: 'A joyous celebration of seasonal abundance and pastel dreams.',
    img: '/BAQAA BAZAR/4.png',
    catalogueDesc: 'Inspired from the joy of spring colors which bloom every season. These special floral arrangements and tablescapes signify the feeling of rebirth of goodness of nature. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'lavender-lush',
    name: 'Lavender Lush',
    mood: 'Feminine . Strong . Sweet',
    desc: 'Romantic and fragrant, balancing delicate petals with bold silhouettes.',
    img: '/BAQAA BAZAR/5.png',
    catalogueDesc: 'Inspired from the femininity of a woman with many nuances of her love & strength. These special floral arrangements and tablescapes create that energy which makes every home and family complete. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'strawberry-romance',
    name: 'Strawberry Romance',
    mood: 'Memorable . Deep . Romantic',
    desc: 'Rich reds and soft pinks intermingling for a deeply romantic aesthetic.',
    img: '/BAQAA BAZAR/6.png',
    catalogueDesc: 'Inspired from the romance which makes every moment memorable. These special floral arrangements and tablescapes celebrate the bond of a relationship. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'blush-sage-dreams',
    name: 'Blush & Sage Dreams',
    mood: 'SOFT . SUBTLE . SERENE',
    desc: 'A muted, sophisticated palette that whispers of timeless elegance.',
    img: '/BAQAA BAZAR/7.png',
    catalogueDesc: 'Inspired from the thoughts which bring serenity and happiness. These special floral arrangements and tablescapes inspire us to dream. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'jewel-love',
    name: 'Jewel Love',
    mood: 'Deep . Mystical . Sparkling',
    desc: 'Opulent, saturated tones that create a dramatic, luxurious ambiance.',
    img: '/BAQAA BAZAR/8.png',
    catalogueDesc: 'Inspired from jewels which are everlasting. These special floral arrangements and tablescapes paint the mystique of these gems. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'boho-autumn',
    name: 'Boho Autumn',
    mood: 'Cosy . Breathy . Earthy',
    desc: 'Warm textures, dried elements, and earthy tones for a free-spirited feel.',
    img: '/BAQAA BAZAR/9.png',
    catalogueDesc: 'Inspired from the change which autumn brings as the year unfolds. These special floral arrangements and tablescapes bring forth the earth’s ability to change. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'rustic-winter',
    name: 'Rustic Winter',
    mood: 'Festive . Warm . Rustic',
    desc: 'Cozy and inviting, incorporating seasonal greens, deep reds, and woodland charm.',
    img: '/BAQAA BAZAR/11.png',
    catalogueDesc: 'Inspired from the warm fireplaces, wholesome food, and family love. These special floral arrangements and tablescapes beckon the New Year with hope. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  }
];

const BazarTabel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "+971554968810";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const formattedWhatsappNumber = "+971 55 496 8810";
  const catalogueInfo = [
    { icon: CalendarDays, text: 'Minimum 5 Days Pre-Order' },
    { icon: Leaf, text: 'Bespoke Floral Styling' },
    { icon: MapPin, text: 'Dubai Orders Only' },
    { icon: Truck, text: 'Other Emirates By Arrangement' }
  ];
  const bouquetOptions = ['PRETTY', 'GLORIOUS', 'DAZZLE'];

  return (
    <div className="bazar-page">
      {/* 1. HERO SECTION */}
      <section className="bazar-hero">
        <div className="bazar-hero-bg" style={{ backgroundImage: "url('/BAQAA BAZAR/hero.png')" }}>
          <div className="bazar-hero-overlay"></div>
        </div>

        <div className="bazar-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="hero-title bazar-hero-title"
          >
            BAQAA Bāzār & Tābel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="hero-description"
          >
            Born in 2020 from resilience, creativity, and heart, BAQAA Bāzār & Tābel curates soulful floral arrangements, intimate setups, and elegant tablescapes designed by Rachna Chadha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="#themes" className="btn-hero">Explore Themes</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-hero">Order via WhatsApp</a>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="bazar-story section">
        <div className="story-ambient-line story-ambient-line-top"></div>
        <div className="story-ambient-line story-ambient-line-bottom"></div>
        <div className="bazar-story-container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="story-content-frame">
              <div className="story-kicker-mark" aria-hidden="true">
                <span></span>
                <Leaf size={18} strokeWidth={1.2} />
                <span></span>
              </div>
              <h2 className="heading-md mb-6">A Story of Resilience & Artistry</h2>
              <div className="story-text">
                <p>
                  Born in a moment when the world stood still in 2020, within the warmth of our founder’s home, this is a story of resilience, creativity and heart. A thoughtful vertical created to support florists and skilled artisans, it was built with a purpose, to sustain livelihoods and uplift daily wage workers through challenging times.
                </p>
                <p>
                  Today, as the world once again navigates uncertainty, that purpose feels just as powerful, just as necessary. Each creation reflects artistry and emotion - curated, original themes brought to life through exquisite floral arrangements and soulful tablescapes, envisioned and handcrafted by Rachna Chadha, Founder, Designer & Dreamweaver of BAQAA Glamour Weddings & Events, with over 35 years of pioneering legacy and an iconic portfolio.
                </p>
                <p>
                  A beautiful gift. A thoughtful token. From intimate celebrations to elegant gatherings, BAQAA Bazar & Tabel transforms small moments into unforgettable experiences - where every detail whispers luxury, warmth, and meaning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CATALOGUE SECTION */}
      <section id="themes" className="bazar-catalogue">
        <div className="catalogue-inner">
          <header className="catalogue-header">
            <img className="catalogue-emblem" src="/logo/BAQAA3.png" alt="BAQAA emblem" />
            <h2>BAQAA BĀZĀR & TĀBEL</h2>
            <p>FLORAL ARRANGEMENTS, INTIMATE SET UPS & TABLESCAPES</p>
            <div className="catalogue-title-divider" aria-hidden="true">
              <span></span>
              <i></i>
              <span></span>
            </div>
          </header>

          <div className="catalogue-info-strip">
            {catalogueInfo.map(({ icon: Icon, text }) => (
              <div className="catalogue-info-item" key={text}>
                <Icon size={17} strokeWidth={1.35} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="catalogue-grid">
            {themes.map((theme, index) => (
              <motion.article
                className="catalogue-card"
                key={theme.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.22), ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="catalogue-card-intro">
                  <div className="catalogue-image-wrap">
                    <img src={theme.img} alt={theme.name} loading="lazy" />
                  </div>
                  <div className="catalogue-copy">
                    <h3 className={`catalogue-product-title title-tone-${index % 5}`}>{theme.name}</h3>
                    <p className="catalogue-mood">{theme.mood}</p>
                    <p className="catalogue-description">{theme.catalogueDesc}</p>
                  </div>
                </div>

                <div className="catalogue-rule-title">
                  <span></span>
                  <strong>FLOWER BOUQUET</strong>
                  <span></span>
                </div>
                <div className="catalogue-price-columns">
                  {bouquetOptions.map((label) => (
                    <div className="catalogue-price-cell" key={label}>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="catalogue-rule-title">
                  <span></span>
                  <strong>ADD A VASE</strong>
                  <span></span>
                </div>
                <div className="catalogue-vase-row">
                  <span>Vase pairing available on request</span>
                </div>

                <div className="catalogue-rule-title">
                  <span></span>
                  <strong>TABLESCAPE (FOR 6 PEOPLE)</strong>
                  <span></span>
                </div>
                <div className="catalogue-table-details">
                  <p>On rental basis. Flowers & colors can be tweaked as per client's choice.</p>
                  <p>Furniture and flowers may vary depending on availability.</p>
                  <ul>
                    <li>6 Tiffany chairs</li>
                    <li>1 rectangular table</li>
                    <li>6 placemats</li>
                    <li>6 dining plates</li>
                    <li>6 spoons, forks & knives</li>
                    <li>Table decor</li>
                    <li>Transport, labor, set up & removal</li>
                  </ul>
                </div>

                <a
                  href={`${whatsappLink}?text=I'm interested in the ${theme.name} catalogue options`}
                  target="_blank"
                  rel="noreferrer"
                  className="catalogue-options-btn"
                >
                  View Options
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <footer className="catalogue-footer-bar">
          <div className="catalogue-footer-cell catalogue-whatsapp-cell">
            <WhatsAppIcon />
            <div>
              <span>TO ORDER WHATSAPP</span>
              <a href={whatsappLink} target="_blank" rel="noreferrer">{formattedWhatsappNumber}</a>
            </div>
          </div>

          <div className="catalogue-footer-cell catalogue-instagram-cell">
            <InstagramIcon />
            <div>
              <span>Follow Us</span>
              <p>
                <a href="https://instagram.com/baqaabazar" target="_blank" rel="noreferrer">@baqaabazar</a>
                <i>|</i>
                <a href="https://instagram.com/baqaa_wedding_events" target="_blank" rel="noreferrer">@baqaa_wedding_events</a>
              </p>
            </div>
          </div>

          <div className="catalogue-footer-cell catalogue-legal-cell">
            <img src="/logo/BAQAA3.png" alt="BAQAA emblem" />
            <p>Designs, ideas and concepts are the legal intellectual property of Rachna Chadha & BAQAA.</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default BazarTabel;
