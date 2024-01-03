import React from "react";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am Kashyap Prajapati, completed my Master in Computer Engineering
            in Canada. I have completed the Bachelor's in the same field and to
            learn/explore more I choose to fly from my home county to Canada. It
            suggests that I am passionate about learning new technologies and I
            love to keep improving myself. The excitement for working with
            modern design and modern workflow is something that I look for and
            making a simple but beautiful user-centric platform motivates me to
            keep improving my skills to leverage modern techs.
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
            style={{
              margin: 10,
              padding: 20,
              fontSize: "0.8em",
              textAlign: "right",
            }}
          >
            Kashyap Prajapati
          </span>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
