import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import webauth from "../../Assets/Projects/web-auth.png";
import drums from "../../Assets/Projects/drums.png";
import keeper from "../../Assets/Projects/keeper.png";
import nasa from "../../Assets/Projects/nasa-api.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Tilt>
          <h1 className="project-heading">
            The<strong className="blue"> Projects </strong>
          </h1>
        </Tilt>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Spacegram"
              description="HTML5/CSS3/Javascript/NASA-API/ React/React-hooks/NPM/Git/ Github-pages/ Responsive-layout."
              link="https://github.com/krish4uu/Nasa-Api-ReactApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webauth}
              isBlog={false}
              title="Secrets"
              description="HTML5/CSS3/Bootstrap/Javascript/Node.js/Express.js/MongoDB/ Mongoose-schema/Google-OAuth/ passport.js/Responsive-layout"
              link="https://github.com/krish4uu/web-authFile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper-app"
              description="HTML5/CSS3/Javascript/React/ Responsive-layout/NPM/Git/ material-ui/material-ui-icons."
              link="https://github.com/krish4uu/Keeper-app"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drums}
              isBlog={false}
              title="Drum-kit"
              description="HTML5/CSS3/Bootstrap/Javascript/Responsive-layout"
              link="https://github.com/krish4uu/drumkit"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
