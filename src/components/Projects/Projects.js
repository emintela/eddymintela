import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Facebook Clone"
              description="Full-stack social media platform inspired by Facebook, built with Python, Django, and JavaScript, with AWS integration. Demonstrates backend development, web application architecture, and cloud integration."
              ghLink="https://github.com/emintela?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart DEX"
              description="Decentralized cryptocurrency exchange (DEX) leveraging blockchain technology, smart contracts, and Web3 integration. Explores decentralized token trading, wallet connectivity, and blockchain-based financial applications."
              ghLink="https://github.com/emintela?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="YouTube Clone"
              description="Responsive video discovery and streaming application built with React.js and the YouTube API, integrating external APIs to deliver an interactive, modern user experience."
              ghLink="https://github.com/emintela?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MayelAI"
              description="Full-stack AI-powered SaaS platform built with Next.js, LangChain, and multiple Large Language Models (LLMs). Integrates generative AI capabilities into a modern web app and explores LLM orchestration and scalable AI-powered services."
              ghLink="https://github.com/emintela?tab=repositories"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Onapl — Mobile Calling App"
              description="iOS and Android mobile calling application I developed and shipped to app stores."
              ghLink="https://github.com/emintela?tab=repositories"
              demoLink="https://apkcombo.com/onapl/com.onapl.dialer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
