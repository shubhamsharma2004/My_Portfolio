import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images
import pic1 from "../../Assets/Projects/pic1.jpg";
import pic2 from "../../Assets/Projects/pic2.png";

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
              imgPath={pic1}
              isBlog={false}
              title="Patient Management System"
              description="Developed a user-friendly system for healthcare operations with secure authentication and role-based access. Built using React.js, Node.js, and MySQL."
              ghLink="https://github.com/shubhamsharma2004/patient-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic2}
              isBlog={false}
              title="E-Learning Platform"
              description="An interactive learning platform with courses, quizzes, and user tracking. Backend built with Django and features secure payments and subscriptions."
              ghLink="https://github.com/shubhamsharma2004/e-learning-platform"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn-icons-png.flaticon.com/512/1046/1046849.png"
              isBlog={false}
              title="Foodverse - Recipe Website"
              description="Dynamic recipe platform with search and filter features. Built using React.js and MongoDB, enabling easy discovery and fast data queries."
              ghLink="https://github.com/shubhamsharma2004/foodverse"
              demoLink="https://your-demo-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
