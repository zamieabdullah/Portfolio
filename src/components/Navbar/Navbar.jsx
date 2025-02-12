import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navigation = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          Zamie Abdullah
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={styles.navLink}>About</Nav.Link>
            <Nav.Link as={Link} to="/experience" className={styles.navLink}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={styles.navLink}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 