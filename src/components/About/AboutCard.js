import React from "react";
import Card from "react-bootstrap/Card";
import { GiThreePointedShuriken } from "react-icons/gi";
import Typewriter from "typewriter-effect";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue"> Kashyap Prajapati </span>
            from <span className="blue"> Patan, India.</span>
            <br />I am pursuing master's in computer major at the University of Windsor, ON, Canada.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiThreePointedShuriken /> Playing Online Games
            </li>
            <li className="about-activity">
              <GiThreePointedShuriken /> Playing Guitar
            </li>
            <li className="about-activity">
              <GiThreePointedShuriken /> Watching Movies/Series
            </li>
          </ul>

  
          <div style={{ fontSize:"0.6em", padding: 35, textAlign: "left" }}>
          <Typewriter options={{
        strings: [
         "Stay hungry for learning!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
          <footer className="blockquote-footer">Kashyap Prajapati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
