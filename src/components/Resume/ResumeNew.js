import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Row style={{ justifyContent: "center", paddingTop: "100px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.3em" }}>
              My <span className="purple">Resume</span>
            </h1>
            <p style={{ color: "white", paddingTop: "20px", fontSize: "1.1em" }}>
              My resume is available on request — reach out and I'll be happy
              to share it.
            </p>

            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              <Col xs="auto">
                <Button
                  variant="primary"
                  href="mailto:ewmintela@gmail.com"
                  style={{ margin: "10px" }}
                >
                  <AiOutlineMail /> &nbsp;Email Me
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/eddy-mintela-5965347/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "10px" }}
                >
                  <FaLinkedinIn /> &nbsp;Connect on LinkedIn
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
