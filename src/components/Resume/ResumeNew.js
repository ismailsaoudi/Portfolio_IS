import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../Resume/Ismail-devops-engineer-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";


function ResumeNew() {
  // const [width, setWidth] = useState(1200);
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPage);
    setPageNumber(1);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
        <Row className="resume">
          { <Document
            src="../Resume/Ismail-devops-engineer-resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center">
            <Page hight="600" pageNumber={pageNumber} />
          </Document>}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
