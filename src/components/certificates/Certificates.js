import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCard from "./CertiCards";
import Tilt from "react-parallax-tilt";

import google from "../../Assets/certificates/google.png";
import pdfgoogle from "../../Assets/certificates/google.pdf";
import IBM from "../../Assets/certificates/IBM.png";
import pdfIBM from "../../Assets/certificates/IBM.pdf";
import microsoft from "../../Assets/certificates/microsoft.png";
import microsoftAi from "../../Assets/certificates/microsoft-ai.png";
import webdev from "../../Assets/certificates/web-dev.png";
import pdfwebdev from "../../Assets/certificates/web-dev.pdf";
import python from "../../Assets/certificates/Python.png";
import pdfpython from "../../Assets/certificates/Python.pdf";
import program from "../../Assets/certificates/program.png";
import pdfprogram from "../../Assets/certificates/program.pdf";
// import st from "../../Assets/certificates/ST.png";
// import pdfst from "../../Assets/certificates/ST.pdf";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Tilt>
          <h1 className="project-heading">
            The<strong className="blue"> Certificates </strong>
          </h1>
        </Tilt>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={microsoft}
              isBlog={false}
              title="Microsoft"
              description="Microsoft Azure AI fundamentals"
              link={microsoftAi}
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={IBM}
              isBlog={false}
              title="IBM"
              description="Developing Cloud Apps with Node.js and React"
              link={pdfIBM}
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={google}
              isBlog={false}
              title="Google"
              description="Google Cloud Fundamentals: Core Infrastructure
"
              link={pdfgoogle}
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={webdev}
              isBlog={false}
              title="Web Development"
              description="The Complete Web Development 2021 Bootcamp"
              link={pdfwebdev}
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={python}
              isBlog={false}
              title="Python"
              description="Learning Python"
              link={pdfpython}
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={program}
              isBlog={false}
              title="Programming"
              description="Programming Fundamentals"
              link={pdfprogram}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
