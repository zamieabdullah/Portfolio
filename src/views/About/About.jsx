import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillBadge from '@components/SkillBadge/SkillBadge';
import styles from './About.module.scss';

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "C++", "C", "C#", "Java", "HTML", "CSS", "SQL"],
    "Databases": ["PostgreSQL", "MongoDB", "SQLite3"],
    "Data Analysis": ["Pandas", "Matplotlib", "Plotly", "Excel"],
    "Frameworks": ["React.js", "Vue.js", "Flask", "Django", "Bootstrap", "Node.js", "Express.js", "Docker"],
    "Testing": ["Jest", "React-Testing-Library", "Cypress", "API Documentation", "Workflow Design"],
    "Tools": ["Git", "Vercel", "Render", "Stripe", "Google Analytics", "n8n", "SQLAlchemy"]
  };

  return (
    <Container className={styles.about}>
      <Row>
        <Col lg={12}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.introduction}>
            <p>
              I'm a Full Stack Developer and Data Engineer with a BS in Computer Science from Tufts University.
              I specialize in building innovative solutions that combine modern web technologies with data-driven insights.
            </p>
          </div>
        </Col>
      </Row>
      
      <Row className={styles.education}>
        <Col lg={12}>
          <h2>Education</h2>
          <div className={styles.educationCard}>
            <h3>Tufts University</h3>
            <p>Bachelor of Science (BS) in Computer Science</p>
            <p>2019 - 2023</p>
          </div>
          <div style={{ margin: '2rem 0' }}></div> {/* Gap between education cards */}
          <div className={styles.educationCard}>
            <h3>Columbia Grammar and Preparatory School</h3>
            <p>High School Diploma</p>
            <p>2015 - 2019</p>
          </div>
        </Col>
      </Row>

      <Row className={styles.skills}>
        <Col lg={12}>
          <h2>Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className={styles.skillCategory}>
              <h3>{category}</h3>
              <div className={styles.skillGrid}>
                {skillList.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About; 