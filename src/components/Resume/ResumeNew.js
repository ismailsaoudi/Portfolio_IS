import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Resume/Ismail2027Resume.pdf";
import { AiOutlineDownload, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";

function ResumeNew() {
  const [scale, setScale] = useState(1.0);

  function zoomIn() {
    setScale(prev => Math.min(prev + 0.1, 2.0));
  }

  function zoomOut() {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  }

  return (
    <div className="resume-wrapper">
      <Container fluid className="resume-section">
        <Container>
          <Row>
            <Col>
              <div className="resume-header">
                <h1 className="resume-title">Resume</h1>
                <p className="resume-subtitle">View or download my professional resume</p>
              </div>
            </Col>
          </Row>

          <Row className="resume-controls-row">
            <Col className="text-center">
              <div className="resume-controls">
                <Button
                  variant="outline-dark"
                  onClick={zoomOut}
                  disabled={scale <= 0.5}
                  className="resume-zoom-btn"
                  title="Zoom Out"
                >
                  <AiOutlineZoomOut />
                </Button>
                <span className="resume-zoom-info">
                  {Math.round(scale * 100)}%
                </span>
                <Button
                  variant="outline-dark"
                  onClick={zoomIn}
                  disabled={scale >= 2.0}
                  className="resume-zoom-btn"
                  title="Zoom In"
                >
                  <AiOutlineZoomIn />
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="resume-viewer-row">
            <Col>
              <div className="resume-viewer-container">
                <object
                  data={`${pdf}#zoom=${scale * 100}&toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  className="resume-pdf-viewer"
                  title="Resume PDF"
                >
                  <p className="resume-fallback">
                    Your browser does not support PDFs. 
                    <a href={pdf} download="Ismail_Saoudi_Resume.pdf" className="resume-fallback-link">
                      Click here to download the PDF
                    </a>
                  </p>
                </object>
              </div>
            </Col>
          </Row>

          <Row className="resume-actions-row">
            <Col className="text-center">
              <Button
                variant="primary"
                href={pdf}
                download="Ismail_Saoudi_Resume.pdf"
                className="resume-download-btn"
              >
                <AiOutlineDownload />
                &nbsp;Download Resume PDF
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
