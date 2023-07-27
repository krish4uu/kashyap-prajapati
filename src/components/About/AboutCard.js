import React from "react";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I'm a Full Stack Software Engineer with knowledge of modern techs,
            having a strong background in computer science fundamentals. The
            excitement for working with modern design and modern workflow is
            something that I look for in projects.
          </p>

          <div style={{ fontSize: "0.6em", padding: 15, textAlign: "left" }}>
            <Typewriter
              options={{
                strings: ["Stay hungry for learning!"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <span
            className="blockquote-footer"
            style={{ margin: 10, padding: 20, fontSize: "0.8em", textAlign: "right"}}
          >
            Kashyap Prajapati
          </span>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
