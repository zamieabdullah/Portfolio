import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '@components/ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <h1 className={styles.title}>Get In Touch</h1>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:zamieabdullah0@gmail.com">zamieabdullah0@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:9174459012">(917) 445-9012</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/zamieabdullah" target="_blank" rel="noopener noreferrer">
                github.com/zamieabdullah
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 