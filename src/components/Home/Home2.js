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
            <p className="home-about-body">
              I got interest in programming after 10th, and then got admission
              in the bachalor's in computer major. I didn't stop there and took
              admission for masters in Canada for the same feild. So, I know
              something about web dev I think... 🤷‍♂️
              <br />
              <br />I have knowledge about
              <i>
                <b className="blue"> C (C++), Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Applications</b>
              </i>
              &nbsp; and also in areas related to{" "}
              <i>
                <b className="blue">Software Engineering.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="blue"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> Node.js and React.js</b>
              </i>
            </p>
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
                  href="https://www.linkedin.com/in/prajapatikashyap/"
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
