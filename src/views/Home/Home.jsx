import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from '@assets/me.JPG';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col md={8} className={styles.heroContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.profileImageWrapper}>
                <img 
                  src={profileImage} 
                  alt="Zamie Abdullah" 
                  className={styles.profileImage}
                />
              </div>
              <h1 className={styles.title}>
                Hi, I'm <span className={styles.highlight}>Zamie Abdullah</span>
              </h1>
              <h2 className={styles.subtitle}>
                Full Stack Developer & Data Engineer
              </h2>
              <p className={styles.description}>
                Specializing in building innovative solutions with React, Python, and modern data technologies.
                Currently working at Client Harbor and HomeScore AI.
              </p>
              <div className={styles.cta}>
                <Button 
                  as={Link} 
                  to="/projects" 
                  variant="primary" 
                  size="lg" 
                  className={styles.primaryBtn}
                >
                  View My Work
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-primary" 
                  size="lg" 
                  className={styles.secondaryBtn}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home; 