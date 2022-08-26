import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ismail Saoudi </span>
            from <span className="purple"> Cincinnati, Ohio.</span>
            <br />I am a junior Devops And Full Stack web Developer, and A senior Network Engineer. 
            <br />
            <br />
            Apart from coding and computer Science, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> watching/Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "DREAM... ACHIEVE!"{" "}
          </p>
          <footer className="blockquote-footer">IsmailS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
