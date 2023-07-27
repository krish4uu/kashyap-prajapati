import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResumeContent from "./ResumeContent";
import pdf from "../../Assets/Kashyap.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { resumeDetail } from "../../resume-detail";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <div style={{ marginTop: 30, paddingTop: 20 }}>
          <Button variant="primary" href={pdf} target="_blank" size="sm">
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </div>

        <Row className="resume">
          <Col md={6} className="resume-left">
 
              <h3 className="resume-title">Experience</h3>

            {resumeDetail.map((item) => {
              return (
                <ResumeContent
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              );
            })}
          </Col>
          <Col md={6} className="resume-right">

              <h3 className="resume-title">Education</h3>

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


              <h3 className="resume-title">Extracurricular Activities</h3>

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


              <h3 className="resume-title">Non-tech Skills</h3>

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

        <Button variant="primary" href={pdf} target="_blank" size="sm">
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Container>
    </Container>
  );
}

export default Resume;
