import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="intro">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Site Reliability Engineer (SRE), DevOps, Platform, and
              Cloud Engineer with a strong background in cloud
              infrastructure, distributed systems, automation, and
              production reliability. My experience includes working at{" "}
              <i>
                <b className="purple">Amazon Web Services (AWS)</b>
              </i>
              , where I've focused on incident response, cloud monitoring,
              infrastructure operations, and building scalable solutions
              using
              <i>
                <b className="purple"> AWS, Linux, Python, Go (Golang), </b>
              </i>
              and modern DevOps technologies.
              <br />
              <br />
              I'm also an{" "}
              <i>
                <b className="purple">AI Software Engineer</b>
              </i>{" "}
              through Mercor, contributing to AI development, coding, and
              engineering projects that help advance modern AI systems.
              <br />
              <br />
              Beyond my professional work, I'm passionate about building
              technology that solves real-world problems — from{" "}
              <i>
                <b className="purple">
                  cloud infrastructure and full-stack development{" "}
                </b>
              </i>
              to
              <i>
                <b className="purple"> blockchain and automation</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-photo"
                alt="Eddy W Mintela"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
