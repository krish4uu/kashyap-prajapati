import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kp.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Tilt>
              {" "}
              <h1 style={{ fontSize: "2.6em" }}>
                A LITTLE <span className="blue">INTRODUCTION</span>
              </h1>
            </Tilt>
            <div className="home-about-body">
              Computer Engineer with 3+ years of hands-on experience as a Full
              Stack Developer with excellent problem-solving and troubleshooting
              skills. Worked within Agile software development lifecycle and
              cross-functional teams aiming at delivering quality products
              <br />&nbsp;
              <ul>
                <li>
                  <b className="blue"> Web Technologies: </b>
                  HTML, CSS, JavaScript(ES6+), Typescript, Bootstrap, REST API,
                  GraphQL
                </li>
                <li>
                  <b className="blue"> Frameworks/Tools: </b>
                  React, NextJS, Angular, Redux, Node.js, Express.js, NPM, Yarn,
                  Git, Jest, Tailwind
                </li>
                <li>
                  <b className="blue">Programming Languages: </b>
                  C++, Python, Java
                </li>
                <li>
                  <b className="blue">Cloud/tools: </b>
                  AWS, GCP, Docker
                </li>
                <li>
                  <b className="blue"> Database/Tools: </b>
                  MongoDB, Mongoose, SQL, Postgres
                </li>
                <li>
                  <b className="blue">
                    {" "}
                    Team Management/communication tools:{" "}
                  </b>
                  Slack, Zoom, Trello, Jira, Replicon, Airtable, Gitlab, Github
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ borderRadius: 50 }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/krish4uu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prajapatikashyap"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto: prajapatikashyap97@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
