import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Journal.css';

const testimonials = [
  {
    title: 'A BREATHTAKING EXPERIENCE',
    description: 'BAQAA transformed our vision into a masterpiece. Every detail was impeccably designed with absolute grace and luxury.',
    author: 'Sofia & Arjun',
    wedding: 'Rajasthan Heritage Wedding'
  },
  {
    title: 'BEYOND OUR EXPECTATIONS',
    description: 'The creativity and elegance brought to our celebration left our guests in absolute awe. An extraordinary team of dreamers.',
    author: 'Maya & Kabir',
    wedding: 'Scenic Bosphorus Celebration'
  },
  {
    title: 'TRULY UNFORGETTABLE',
    description: 'A magical journey from start to finish. The floral arrangements and bespoke artistry were simply out of this world.',
    author: 'Leila & Omar',
    wedding: 'Fujairah Coastal Romance'
  },
  {
    title: 'BESPOKE ARTISTRY & LOVE',
    description: 'We had the absolute best experience planning our wedding. They understood our style and elevated it beyond belief.',
    author: 'Nina & Dev',
    wedding: 'Dubai Ritz-Carlton Gala'
  }
];

// Double the array to ensure the infinite scroll has no gaps
const duplicatedTestimonials = [...testimonials, ...testimonials];

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
          CLIENT TESTIMONIALS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="journal-subtitle"
        >
          Read what our couples have to say about their bespoke luxury celebrations designed by BAQAA.
        </motion.p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedTestimonials.map((post, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-top">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="star-icon" fill="var(--champagne-gold, #D4AF37)" stroke="none" />
                  ))}
                </div>
                <div className="quote-mark">“</div>
              </div>

              <div className="card-body">
                <h3 className="testimonial-card-title">{post.title}</h3>
                <p className="testimonial-card-desc">{post.description}</p>
              </div>

              <div className="card-footer">
                <div className="author-info">
                  <h4 className="author-name">{post.author}</h4>
                  <p className="wedding-detail">{post.wedding}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
