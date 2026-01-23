import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-text">
            Hi Everyone, I am <span className="purple">Ismail Saoudi</span> from <span className="purple">United States</span>. I am a Lead IT Application Engineer and Emerging Technology Lead with 14+ years of experience delivering enterprise-grade, full-stack web applications. Specialized in taking ideas from concept through proof of concept (PoC) into secure, scalable, production-ready systems.
          </p>
          <p className="about-card-text">
            Apart from coding and technology, some other activities that I love to do!
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

          <p style={{ color: "#666666", fontStyle: "italic" }}>
            "DREAM... ACHIEVE!"{" "}
          </p>
          <footer className="blockquote-footer">IsmailS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
