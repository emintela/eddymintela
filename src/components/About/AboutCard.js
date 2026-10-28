import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Eddy Wini Mintela</span> — also
            known as <span className="purple">Eddy Mintela</span>. I'm a
            {" "}
            <span className="purple">
              Site Reliability Engineer (SRE), DevOps, Platform, and Cloud
              Engineer
            </span>{" "}
            with a strong background in cloud infrastructure, distributed
            systems, automation, and production reliability. My experience
            includes working at <span className="purple">
              Amazon Web Services (AWS)
            </span>, where I've focused on incident response, cloud
            monitoring, infrastructure operations, and building scalable
            solutions using <span className="purple">
              AWS, Linux, Python,
            </span>{" "}
            and modern DevOps technologies.
            <br />
            <br />
            I'm also an <span className="purple">AI Software Engineer</span>{" "}
            through <span className="purple">Mercor</span>, contributing to
            AI development, coding, and engineering projects that help
            advance modern AI systems.
            <br />
            <br />
            Beyond my professional work, I'm passionate about building
            technology that solves real-world problems. I developed{" "}
            <span className="purple">Onapl</span>, an iOS and Android mobile
            calling application, and have worked on projects spanning cloud
            infrastructure, full-stack development, blockchain, and
            automation.
            <br />
            <br />I also had the opportunity to visit the{" "}
            <span className="purple">
              Massachusetts Institute of Technology (MIT)
            </span>{" "}
            as an exchange student, participating in the{" "}
            <span className="purple">
              International Development Design Summit (IDDS)
            </span>{" "}
            initiative, which focuses on collaborative innovation and
            designing solutions for global development challenges.
            <br />
            <br />
            I'm continuously exploring the intersection of Cloud
            Engineering, Platform Engineering, DevOps, and Artificial
            Intelligence, with a focus on building reliable, scalable, and
            impactful technology.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building & shipping side projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cloud, DevOps & AI engineering 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborative innovation & global design
              challenges 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(126 180 172)" }}>
            "Building reliable, scalable, and impactful technology."{" "}
          </p>
          <footer className="blockquote-footer">Eddy Wini Mintela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
