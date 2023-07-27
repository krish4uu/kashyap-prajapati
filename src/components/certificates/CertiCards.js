import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function CertiCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: "300px" }}
      />
      <Card.Body>
        <Card.Title>
          {props.title}: {props.description}
        </Card.Title>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp; View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CertiCards;
