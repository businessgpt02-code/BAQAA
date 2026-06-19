import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Journal.css';

const testimonials = [
  {
    title: 'THE DREAM MAKER',
    description: 'Rachna was the dream maker behind our magical wedding! She was patient and professional, incorporating all the elements we asked for and delivering beautifully. The Baqaa team made sure everything ran smoothly.',
    author: 'Faryal Kohari',
    wedding: '4 reviews'
  },
  {
    title: 'COOL DUBAI VIBE',
    description: 'Cool vibe to watch local Dubai musicians share their talents. Awesome show! Highly recommend Baqaa events for creating such wonderful memories and hosting spectacular talent.',
    author: 'Luke',
    wedding: '3 reviews'
  },
  {
    title: 'AMAZING PARTIES',
    description: 'Wanna get married? This is the company you need. Amazing parties & musicians on the roster. Attentive staff and incredible attention to detail throughout the entire event planning process.',
    author: 'Jacopo Mangiapane',
    wedding: 'Local Guide · 42 reviews · 10 photos'
  },
  {
    title: 'MADE WEDDING A DREAM',
    description: 'Rachna and her team did an EXCELLENT job in making our wedding look like a dream! She is so fun to work with and her team works well to ensure you have a special event. She is my go-to for all my future events.',
    author: 'Siya Rajan',
    wedding: '12 reviews · 1 photo'
  },
  {
    title: 'HIGHLY RECOMMEND',
    description: 'Baqaa events really help create memories. Highly recommend. From start to finish, the entire event coordination was flawless and the execution was absolutely spectacular.',
    author: 'Akhil SR',
    wedding: '9 reviews'
  },
  {
    title: 'BEYOND GREATEST DREAMS',
    description: 'Words cannot do justice to the wedding that Rachna and her team pulled off. The final product was beyond our greatest dreams. I would not hesitate to recommend Baqaa to anyone searching for the best wedding designer.',
    author: 'Sagar',
    wedding: 'Local Guide · 20 reviews'
  },
  {
    title: 'EVENT WAS PERFECT',
    description: 'What a great experience with them. Everything in the event was perfect. The coordination, execution, and overall management were top-notch and left a lasting impression.',
    author: 'Pilot & car transport Service',
    wedding: '4 reviews · 3 photos'
  },
  {
    title: 'UNMATCHABLE GENEROSITY',
    description: "Great service and very attentive staff! The team's generosity and attention to detail is unmatchable. I definitely recommend them to anyone planning a luxury celebration.",
    author: 'A I (Alexandra IV)',
    wedding: '4 reviews'
  },
  {
    title: 'MANAGED AMAZINGLY',
    description: 'I highly recommend the Baqaa team for making my daughter’s wedding even more beautiful than I had expected. They delivered on time, took away all my stress, and managed everything amazingly.',
    author: 'Eliza Khan',
    wedding: '7 reviews · 1 photo'
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
          Read what our clients have to say about their bespoke luxury celebrations designed by BAQAA.
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

      <div className="testimonials-footer text-center">
        <motion.a 
          href="https://www.google.com/search?sca_esv=c46b224a6a68ee93&sxsrf=ANbL-n49a2kbKdI8qTDrRjv2zfbfcEXMRw:1781860693654&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVL93iv_XjqzZtPICLsDm8U60UF-M-LERr4XAAmDjit4zhkuMuopUjN2fzqe-qS8o9g1FJEVLUclw9Rl9zWqaJVTTBUmjXaKM599nKY_A1tywwIIGA%3D%3D&q=BAQAA+Glamour+Weddings+%26+Events+Reviews&sa=X&ved=2ahUKEwjZtbyt_JKVAxX348kDHdqQJ7sQ0bkNegQIFhAH&biw=1272&bih=668&dpr=1.5" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-more-reviews"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW MORE ON GOOGLE
        </motion.a>
      </div>
    </section>
  );
};

export default Journal;
