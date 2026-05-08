import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './BrandMilestones.css';

const StatItem = ({ label, number, index }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (number === '∞') return;
    const controls = animate(count, parseInt(number), { 
      duration: 2.5, 
      delay: index * 0.2,
      ease: "easeOut"
    });
    return controls.stop;
  }, [number, index]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="stat-item"
    >
      <div className="stat-content">
        <span className="stat-label">
          {label.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}<br />
            </React.Fragment>
          ))}
        </span>
        <span className="stat-number">
          {number === '∞' ? '∞' : <motion.span>{rounded}</motion.span>}
        </span>
      </div>
    </motion.div>
  );
};

const BrandMilestones = () => {
  const stats = [
    { label: "LUXURY\nWEDDINGS", number: "75" },
    { label: "HAPPY\nCOUPLES", number: "43" },
    { label: "DREAMY\nEVENTS", number: "190" },
    { label: "AWARDS\nAND\nACCOLADES", number: "5" },
    { label: "TIMELESS\nHAPPY\nMEMORIES", number: "∞" }
  ];

  return (
    <section className="milestones-section">
      <div className="milestones-container">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            index={index}
            label={stat.label} 
            number={stat.number} 
          />
        ))}
      </div>
    </section>
  );
};

export default BrandMilestones;
