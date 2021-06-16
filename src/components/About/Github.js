import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#3282b8",
    grade3: "#3282b8",
    grade2: "#3282b8",
    grade1: "#3282b8",
    grade0: "#b9d7ea",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
     
      
      <GitHubCalendar
        username="krish4uu"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
      </Row>
      );
}

export default Github;
