import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBuilding, FaAward, FaRocket } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p className="project-subtitle">
          Key roles and achievements from my 14+ years in enterprise technology
        </p>

        <Row className="experience-row">
          <Col md={10} className="project-card">
            <div className="experience-card">
              <h3 style={{ color: "#000000", marginBottom: "15px", fontWeight: "600" }}>
                <FaBuilding style={{ marginRight: "10px" }} />
                Emerging Technology Lead – IT Applications & Platforms
              </h3>
              <h4 style={{ color: "#000000", marginBottom: "10px" }}>
                Cintas Corporation | 2021–Present
              </h4>
              <ul className="experience-list">
                <li>Led emerging technology initiatives, converting internal ideas into production-grade web and cloud applications</li>
                <li>Owned end-to-end delivery from ideation and PoC development through secure production deployment</li>
                <li>Built hands-on PoCs using Python and Google Vertex AI, including agentic AI workflows</li>
                <li>Led cloud application modernization on GCP with CI/CD, observability, and reliability improvements</li>
                <li>Acted as technical lead for internal engineers and vendors, providing architecture guidance</li>
              </ul>
            </div>
          </Col>

          <Col md={10} className="project-card">
            <div className="experience-card">
              <h3 style={{ color: "#000000", marginBottom: "15px", fontWeight: "600" }}>
                <FaBuilding style={{ marginRight: "10px" }} />
                Application Engineer – Industrial Measurement & OT Systems
              </h3>
              <h4 style={{ color: "#000000", marginBottom: "10px" }}>
                Werth Messtechnik GmbH | 2018–2020
              </h4>
              <ul className="experience-list">
                <li>Developed and customized CMM (Coordinate Measuring Machine) software applications</li>
                <li>Integrated CMM applications with MES and SAP environments for quality traceability</li>
                <li>Bridged OT systems with enterprise IT platforms to support Industry 4.0 initiatives</li>
              </ul>
            </div>
          </Col>

          <Col md={10} className="project-card">
            <div className="experience-card">
              <h3 style={{ color: "#000000", marginBottom: "15px", fontWeight: "600" }}>
                <FaBuilding style={{ marginRight: "10px" }} />
                Instrumentation & Controls Engineer – OT / SCADA Systems
              </h3>
              <h4 style={{ color: "#000000", marginBottom: "10px" }}>
                Cypress Creek Renewables | 2016–2018
              </h4>
              <ul className="experience-list">
                <li>Integrated SCADA systems for utility-scale solar plants, connecting IoT and OT devices</li>
                <li>Implemented industrial communication protocols (Modbus TCP/IP, Modbus RTU, DNP3)</li>
                <li>Designed OT network architectures using industrial Ethernet, routers, switches, and firewalls</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          <Col md={10}>
            <h2 className="project-heading" style={{ fontSize: "1.8em", marginBottom: "20px" }}>
              <FaAward style={{ marginRight: "10px", color: "#000000" }} />
              <strong style={{ color: "#000000", fontWeight: "600" }}>Certifications</strong>
            </h2>
            <Row className="certifications-row">
              <Col xs={12} sm={6} className="certification-item">
                <div className="certification-content">
                  <AiFillCheckCircle className="certification-icon" />
                  <span>Google Cloud Generative AI Leader</span>
                </div>
              </Col>
              <Col xs={12} sm={6} className="certification-item">
                <div className="certification-content">
                  <AiFillCheckCircle className="certification-icon" />
                  <span>MIT Professional Education – DevOps Leadership</span>
                </div>
              </Col>
              <Col xs={12} sm={6} className="certification-item">
                <div className="certification-content">
                  <AiFillCheckCircle className="certification-icon" />
                  <span>Cisco CCNA</span>
                </div>
              </Col>
              <Col xs={12} sm={6} className="certification-item">
                <div className="certification-content">
                  <AiFillCheckCircle className="certification-icon" />
                  <span>Azure Fundamentals</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={10}>
            <h2 className="project-heading" style={{ fontSize: "1.8em", marginBottom: "20px" }}>
              <FaRocket style={{ marginRight: "10px", color: "#000000" }} />
              <strong style={{ color: "#000000", fontWeight: "600" }}>Core Expertise</strong>
            </h2>
            <Row className="skills-row">
              <Col xs={12} md={6} className="skills-col">
                <h4 className="skills-section-title">Hard Skills</h4>
                <div className="skills-content">
                  <p><strong>Frontend:</strong> JavaScript (ES6+), TypeScript, React, Angular, HTML5, CSS3, Redux, Material UI, Bootstrap</p>
                  <p><strong>Backend:</strong> Python (FastAPI, Flask, Django), Node.js, Go (Golang), REST APIs, Microservices, OAuth2, JWT, SSO</p>
                  <p><strong>Cloud & DevOps:</strong> GCP, Docker, Kubernetes, CI/CD (GitHub, GitLab, Jenkins), YAML, Observability, Monitoring</p>
                  <p><strong>AI & ML:</strong> Vertex AI, Generative AI, Agentic AI, SQL, Data Modeling, AI PoC to Production</p>
                  <p><strong>Enterprise:</strong> SAP, MES, SCADA, IoT, API Gateways, Event-Driven Architecture, IT/OT Integration</p>
                  <p><strong>Security:</strong> Secure Coding, Enterprise Authentication, Data Privacy, Risk Mitigation</p>
                  <p><strong>Tools:</strong> Jira, Confluence, Bitbucket, SDLC, Agile (Scrum, Kanban), Waterfall</p>
                </div>
              </Col>
              <Col xs={12} md={6} className="skills-col">
                <h4 className="skills-section-title">Soft Skills</h4>
                <div className="skills-content">
                  <p>• Technical Leadership (Player-Coach Model)</p>
                  <p>• End-to-End Ownership (Idea → PoC → Production)</p>
                  <p>• Architecture & Design Decision-Making</p>
                  <p>• Cross-Functional Collaboration (IT, OT, Security)</p>
                  <p>• Clear Technical Communication</p>
                  <p>• Mentoring & Knowledge Sharing</p>
                  <p>• Vendor & Partner Technical Oversight</p>
                  <p>• Prioritization, Tradeoff Analysis & Risk Mitigation</p>
                  <p>• Problem Solving & Systems Thinking</p>
                  <p>• Delivery Focus with Reliability Mindset</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
