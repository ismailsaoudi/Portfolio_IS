import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import homepage from "../../Assets/Projects/homepage.png";
import noteTaker from "../../Assets/Projects/noteTaker.png";
import  WritingBlog from "../../Assets/Projects/WritingBlog.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homepage}
              isBlog={false}
              title="Quiz Game"
              description="Quiz Game using Trivia API to sort questions Randomly."
              ghLink="https://github.com/ismailsaoudi/Quiz_game"
              demoLink="https://ismailsaoudi.github.io/Quiz_game/home.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note Taker"
              description="On the fly note Taker helps you take notes and modify them."
              ghLink="https://github.com/ismailsaoudi/NoteTaker/Bits-0f-C0de"
              demoLink="https://notetakerisma.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WritingBlog}
              isBlog={false}
              title="Writing Blog"
              description="A platform to publish your writings, and the community will have the ability to edit them appropriately to ensure that they’re prepared for publication."
              ghLink="https://github.com/ismailsaoudi/writers_block"
              demoLink="https://writers-block-jh.herokuapp.com/login/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
