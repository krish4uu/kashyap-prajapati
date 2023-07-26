import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import Tilt from "react-parallax-tilt";

import pdf from "../../Assets/Kashyap.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { resumeDetail } from "../../resume-detail";

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
            {resumeDetail.map((item) => {
              return (
                <ResumeContent
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              );
            })}
          </Col>
          <Col md={6} className="resume-right">
            <Tilt>
              <h3 className="resume-title">Education</h3>
            </Tilt>
            <ResumeContent
              title="Master's of Electrical and Computer Engineering [University Of Windsor, Canada] "
              date="2020 - 2022"
              content={["GPA: 3.5/4"]}
            />
            <ResumeContent
              title="Bachelor's of Computer Engineering [Gujarat Technological University, India] "
              date="2014 - 2018"
              content={["CGPA: 3.4/4 "]}
            />
            <ResumeContent
              title="12TH BOARD [Gujarat Higher Education Board]"
              date="2012 - 2014"
              content={["Percentage: 86%"]}
            />
            <ResumeContent
              title="10TH BOARD [Gujarat Secondary Higher Education Board] "
              date="2002 - 2012"
              content={["Percentage: 88%"]}
            />

            <Tilt>
              <h3 className="resume-title">Extracurricular Activities</h3>
            </Tilt>
            <ResumeContent
              title="COORDINATOR [ TechnoSonic-2017, GEC-Patan ]"
              content={[
                "Worked on creating the technical event where participants used their preferred programming language to solve the problem.",
              ]}
            />
            <ResumeContent
              title="Cricket Team Captain [ Gujarat Technological University ]"
              content={[
                "Represented the college team at the state level championship tournament.",
                "Took some tough decisions in pressure situations, and that lead the team into the semifinals of the tournament. ",
              ]}
            />

            <Tilt>
              <h3 className="resume-title">Non-tech Skills</h3>
            </Tilt>
            <ResumeContent
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
