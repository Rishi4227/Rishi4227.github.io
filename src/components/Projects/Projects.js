import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import euroconnectGUi from "../../Assets/Projects/euroconnectGui .png";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import sentiment from "../../Assets/Projects/sentiment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CBT-Inspired Multimodal Emotion Recognition"
              description="A web app integrating real-time emotion recognition using Face-API.js and CBT techniques for mental health support."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="Implemented sentiment analysis on tweets using RoBERTa and visualized results in an interactive dashboard."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio Website"
              description="A responsive and dynamic personal portfolio built using React.js to showcase projects and achievements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={euroconnectGUi}
              isBlog={false}
              title="EuroConnect Telecom App"
              description="A Kotlin-based app for calculating the Minimum Spanning Tree (MST) to optimize cable connectivity across European capitals."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
