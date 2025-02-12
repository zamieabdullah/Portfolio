import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './ExperienceCard.module.scss';

const ExperienceCard = ({ company, role, period, location, achievements, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={styles.card}>
        <Card.Body>
          <div className={styles.header}>
            <div>
              <h3 className={styles.company}>{company}</h3>
              <h4 className={styles.role}>{role}</h4>
            </div>
            <div className={styles.meta}>
              <span className={styles.period}>{period}</span>
              <span className={styles.location}>{location}</span>
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.viewButton}
                >
                  View Page
                </a>
              )}
            </div>
          </div>
          <ul className={styles.achievements}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard; 