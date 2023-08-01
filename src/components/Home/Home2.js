import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kp.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  let tiltEnable = screenSize.width > "830" ? true : false;

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <span className="blue">INTRODUCTION</span>
            </h1>

            <div className="home-about-body">
              Highly skilled Computer Engineer with over 3 years of hands-on
              experience as a Full Stack Developer, adept at problem-solving
              and troubleshooting. Proficient in Agile software development
              methodologies and collaborating with cross-functional teams to
              deliver high-quality products.
              <br />
              &nbsp;
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
                  <b className="blue"> Management/communication tools: </b>
                  Slack, Zoom, Trello, Jira, Replicon, Airtable, Gitlab, Github
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltEnable={tiltEnable}>
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
