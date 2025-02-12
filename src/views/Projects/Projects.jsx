import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '@components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import PlayHaven from '../../assets/playhaven.png';
import HealthQuery from '../../assets/healthquery.png';
import SandCastle from '../../assets/sandcastle.png';

const Projects = () => {
  const projects = [
    {
      title: "PlayHaven",
      description: "A social media platform for connecting with fellow gamers and sharing your gaming journey.",
      technologies: ["React.js", "Flask", "WebSocket", "PostgreSQL", "Systems Design", "Amazon Web Services (AWS)"],
      image: PlayHaven,
      period: "Jan 2025 - Present", 
      link: "https://playhaven.app/"
    },
    {
      title: "HealthQuery AI",
      description: "A chatbot that uses natural language processing to answer questions about health and fitness.",
      technologies: ["React.js", "Flask", "PostgreSQL", "API Development", "Systems Design", "OpenAI"],
      image: HealthQuery,
      period: "Jan 2025 - Present",
      link: "https://healthquery.ai/"
    },
    {
      title: "Sand Castle Defense",
      description: "A Tower Defense emulation, where the game is set on a beach, and you play as a single character who is protecting his sand castle from incoming waves and angry crabs. To protect your sand castle, you must collect sea shells to buy and upgrade different tools.",
      technologies: ["C#", "Unity", "Game Design", "Graphic Design"],
      image: SandCastle,
      period: "Apr 2021 - May 2021",
      link: "https://ccarney1031.wixsite.com/sandcastle-defense"
    }
  ];

  return (
    <Container className={styles.projects}>
      <h1 className={styles.title}>My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects; 