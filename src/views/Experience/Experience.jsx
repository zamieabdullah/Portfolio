import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Experience.module.scss';
import ExperienceCard from '@components/ExperienceCard/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      company: "Client Harbor",
      role: "Data Engineer",
      period: "May 2024 - Present",
      location: "Houston, TX",
      achievements: [
        "Developed data metric system using Python, Node, and PostgreSQL",
        "Created predictive models and dashboards using Python ecosystem",
        "Reduced operational costs by 55.13% through n8n automations",
        "Automated data retrieval for 25,000 home appraisals",
        "Saved 10 hours/week through batch workflows"
      ],
      link: "https://clientharbor.com"
    },
    {
      company: "HomeScore AI",
      role: "Full Stack Software Developer",
      period: "Dec. 2023 - Present",
      location: "Boston, MA",
      achievements: [
        "Monitoring user conversion, clicks, and engagement data using Vercel and Google Analytics, leading to 20% increase in conversion rates",
        "Integration of Stripe and one-time payments for customers, creating secure payment process",
        "Utilizing Figma and React to redesign the HomeScore app, boosting user interaction by 50%",
        "Leading the team in creating a responsive app using BootStrap framework",
        "Communicating with back end team to implement API endpoints with Django server",
        "Implemented pyramid testing flow for proper component testing"
      ],
      link: "https://homescore.co"
    },
    {
      company: "S2N Health",
      role: "Full Stack Software Developer Intern",
      period: "June 2022 - Aug. 2022",
      location: "Boston, MA",
      achievements: [
        "Utilized Vue.js to build new components and provide content, leading to a better user experience for clients",
        "Developed client-side API and Flask backend methods to get and post data from SQL database",
        "Optimized former Vue.js components and Flask methods, increasing speeds of data by 30%"
      ],
      link: "https://s2nhealth.com"
    }
  ];

  return (
    <div className={styles.experience}>
      <Container fluid="lg">
        <h1 className={styles.title}>Professional Experience</h1>
        <div className={styles.experienceContainer}>
          <Row>
            {experiences.map((exp, index) => (
              <Col key={index} xs={12} className="mb-3">
                <ExperienceCard {...exp} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Experience; 