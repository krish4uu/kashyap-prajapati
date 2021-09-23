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
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Spacegram"
              description="Fetch data from one of NASA’s APIs.
              Display the resulting images and descriptive data for each retrieved image. Compatible with collected videos as well. Custom CSS for responsive layout.
              React hooks for button component. Modern date-picker calendar used. Loading component while NASA’s API return data"
              link="https://github.com/krish4uu/Nasa-Api-ReactApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper-app"
              description="The Keeper-app is basically a early version of adding notes to yourself. The app uses react as a front-end framework. The material-ui is also used in the app.
              Icon of header and buttons are taken form material-ui-icons.
              The app does not contain any back-end yet."
              link="https://github.com/krish4uu/Keeper-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webauth}
              isBlog={false}
              title="Secrets"
              description="The app is all about the web application where you submit your secrets and you can also see other secrets without knowing their names. 
              App is focused on getting the user data and storing them into the database with hashing functionality.
                          Node.js and express.js are used for back-end. It stores the user info using mongoose schema. Passport.js is used for hashing and adding the salt hash to the password for the sake of the security. It supports the google-OAuth."
              link="https://github.com/krish4uu/web-authFile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drums}
              isBlog={false}
              title="Drum-kit"
              description="Drumkit website renders the sounds of various components. It triggers the event listener when mouse is clicked on the given picture. Typing the mentioned keys also trigger the event listener and give same output as clicking the picture."
              link="https://github.com/krish4uu/drumkit"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
