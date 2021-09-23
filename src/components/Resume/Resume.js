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
              title="WEB DEVELOPER [ AKAR ENTERPRISE ]"
              date="June 2019 - DECEMBER 2019"
              content={[
                " Increased the sell/traffic about 30% after implementing updated content.",
                " Designed and developed dynamic e-commerce website using HTML/ CSS/ JavaScript/ Node.js/ Bootstrap to buy and sell Hardware and Home appliance",
                "Implemented customer oriented functionalities like responsive filters for product types, prices and manufacturers, Wishlist, shopping and search based product recommendations, products inventory",
              ]}
            />

            <Resumecontent
              title="Web Developer Intern [ INNVONI ]"
              date="January 2019 - june 2019"
              content={[
                " Elevated website performance by 20% after updating existing websites using HTML/ CSS/ JavaScript",
                "Developed site content and graphics by coordinating with other teams",
                "Designed images, icons, banners, audio enhancements, etc.",
                "Revise, edit and optimize web content",
                "Perform code reviews, testing, and continuous integration",
              ]}
            />

            <Resumecontent
              title="VOLUNTEER WEB DEVELOPER [ YUVA NGO ]"
              date="JANUARY 2019 -  MAY 2020"
              content={[
                "Designed and developed dynamic website for an NGO using HTML, CSS, JavaScript, EJS6, Node.js, Bootstrap.",
                "It had features like new events notifications, members and volunteers profile, donation portal. Also added the social work done in the past with photos and a little description in carousel using Bootstrap and added grid.",
              ]}
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
          </Col>
          <Col md={6} className="resume-right">
            <Tilt>
              <h3 className="resume-title">Education</h3>
            </Tilt>
            <Resumecontent
              title="Master's of Electrical and Computer Engineering [University Of Windsor, Canada] "
              date="2020 - Present"
              content={["GPA: 3.4/4"]}
            />
            <Resumecontent
              title="Bachelor's of Computer Engineering [Gujarat Technological University, India] "
              date="2014 - 2018"
              content={["CGPA: 7.7/10 "]}
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
