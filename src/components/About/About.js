import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img 
              src={laptopImg} 
              alt="about" 
              className="img-fluid about-main-img"
              style={{ width: '100%', maxWidth: 400, height: 'auto', paddingTop: 10, paddingBottom: 10 }} 
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Techstack <strong className="purple">I use</strong>
        </h1>
        <h2 className="project-heading" style={{ fontSize: '1.5em', marginTop: '30px' }}>
          <strong className="purple">Languages</strong>
        </h2>
        <Techstack />
        <h2 className="project-heading" style={{ fontSize: '1.5em', marginTop: '30px' }}>
          <strong className="purple">Tools</strong>
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
