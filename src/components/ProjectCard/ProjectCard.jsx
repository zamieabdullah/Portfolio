import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ title, description, technologies, image, period, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Card.Img variant="top" src={image} className={styles.image} />
          <div className={styles.overlay}>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
                View Project
              </a>
            )}
          </div>
        </div>
        <Card.Body>
          <div className={styles.header}>
            <Card.Title className={styles.title}>{title}</Card.Title>
            {period && <span className={styles.period}>{period}</span>}
          </div>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard; 