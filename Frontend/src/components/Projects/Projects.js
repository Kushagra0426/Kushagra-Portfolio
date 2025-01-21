import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import IntruderWatch from "../../Assets/Projects/IntruderWatch.jpg";
import People from "../../Assets/Projects/People.jpg";
import VideoChat from "../../Assets/Projects/VideoChat.jpg";
import SuperBook1 from "../../Assets/Projects/SuperBook1.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={VideoChat}
              isBlog={false}
              title="Let's VC"
              description="A real-time video chat platform built with Django and WebRTC, enabling seamless video/audio communication for over 100 users. Features include secure authentication for private video sessions and a responsive front-end design, ensuring cross-device compatibility and enhanced user engagement."
              ghLink="https://github.com/Kushagra0426/Lets-VC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperBook1}
              isBlog={false}
              title="SuperBook"
              description="An AI-powered platform built with MERN for personalized book creation and interactive notes integration. Leveraged LLM-based systems to generate customized content. Presented at Hackout'23, securing 2nd runner-up position for its innovative approach to AI-driven learning and content delivery."
              demoLink="https://superbook.prathamvaidya.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={People}
              isBlog={false}
              title="People"
              description="A social media platform built with Python, Django, and HTML/CSS, featuring real-time dynamic feeds and customizable user profiles for enhanced interaction. It includes a secure authentication system to ensure user privacy and a scalable database schema designed to manage large volumes of user-generated content efficiently."
              ghLink="https://github.com/Kushagra0426/People"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntruderWatch}
              isBlog={false}
              title="IntruderWatch"
              description="A canary token generator built with Python, Django, and React, designed to track unauthorized access to critical files. It features Razorpay integration for seamless subscription management and incorporates Google reCAPTCHA to enhance authentication and security against bots and unauthorized access."
              ghLink="https://github.com/Kushagra0426/IntruderWatch"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
