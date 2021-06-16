import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
// import Github from "./Github";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <Tilt>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="blue">I'M !</strong>
            </h1>
            </Tilt>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Tilt>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>
        </Tilt>
        <Techstack />

        <Tilt>
        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        </Tilt>
        <Toolstack />
       {/* <Github /> */}
        
      </Container>

    
    </Container>
  );
}

export default About;
