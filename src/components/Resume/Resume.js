import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import Tilt from "react-parallax-tilt";

import pdf from "../../Assets/Kashyap.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative", margin: 30 }}
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <Tilt>
              <h3 className="resume-title">Experience</h3>
            </Tilt>
            <Resumecontent
              title="Full-Stack Developer at Akar Enterprise"
              date="October 2019 - April 2020"
              content={[
                "Increased the sell/traffic by about 30% after implementing updated content.",
                "Designed and developed dynamic E-commerce website using HTML/ CSS/ Bootstrap/ JavaScript/ React/ Node.js to buy and sell Hardware and Home appliance.",
                "Involved in the complete Development Life Cycle including Requirement Analysis, Design, Implementation, and Testing.",
                "Implemented customer oriented functionalities like responsive filters for product types, prices and manufacturers, Wishlist, shopping and search history-based product recommendations, products inventory.",
              ]}
            />

            <Resumecontent
              title="Full-Stack Developer Intern at Simulas"
              date="January 2019 - August 2019"
              content={[
                "Worked on multiple full stack E-commerce projects in React/ Node.js.",
                "Collaborated with UI/UX team to implement improved design.",
                "Enhanced several modules such as User Profile, Payment Gateway implementation and User Feedbacks.",
                "Generated unit test cases and performed the integration testing after the modules were integrated.",
                "Participated in code reviews, resolved bugs & issues, and ship code on a daily basis.",
              ]}
            />

            <Resumecontent
              title="Web Developer Intern at Innvoni"
              date="May 2018 - December 2018"
              content={[
                "Elevated website performance by 20% after updating existing websites using HTML/ CSS/ JavaScript.",
                "Developed site content and graphics by coordinating with other teams.",
                "Revised and edited web content. Performed code reviews, testing, and continuous integration",
              ]}
            />

            <Resumecontent
              title="Volunteer Web Developer at YUVA NGO"
              date="January 2019 -  May 2020"
              content={[
                "Designed and developed dynamic website for an NGO using HTML, CSS, JavaScript, EJS6, Node.js, Bootstrap.",
                "It had features like new events notifications, members and volunteers profile, donation portal. Also added the social work done in the past with photos and a little description in carousel using Bootstrap and added grid.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <Tilt>
              <h3 className="resume-title">Education</h3>
            </Tilt>
            <Resumecontent
              title="Master's of Electrical and Computer Engineering [University Of Windsor, Canada] "
              date="2020 - 2022"
              content={["GPA: 3.5/4"]}
            />
            <Resumecontent
              title="Bachelor's of Computer Engineering [Gujarat Technological University, India] "
              date="2014 - 2018"
              content={["CGPA: 3.4/4 "]}
            />
            <Resumecontent
              title="12TH BOARD [Gujarat Higher Education Board]"
              date="2012 - 2014"
              content={["Precentage: 86%"]}
            />
            <Resumecontent
              title="10TH BOARD [Gujarat Seconary Higher Education Board] "
              date="2002 - 2012"
              content={["Precentage: 88%"]}
            />

            <Tilt>
              <h3 className="resume-title">Extracurricular Activities</h3>
            </Tilt>
            <Resumecontent
              title="COORDINATOR [ Technosonic-2017, GEC-Patan ]"
              content={[
                "Worked on creating the techinal event where participants used their prefered programming language to solve the problem.",
              ]}
            />
            <Resumecontent
              title="Cricket Team Captain [ Gujarat Technological University ]"
              content={[
                "Represented the college team at the state level championship tournament.",
                "Took some tough decisions in pressure situations, and that lead the team into the semifinals of the tournament. ",
              ]}
            />

            <Tilt>
              <h3 className="resume-title">Non-tech Skills</h3>
            </Tilt>
            <Resumecontent
              title=""
              content={[
                "Guitarist 🎸 ",
                "Singer 🎶 ",
                "Cricketer 🏏 ",
                "Gamer 🎮 ",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
