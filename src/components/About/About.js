import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import aboutCartoon from "../../Assets/about-cartoon.png";
import circlesImg from "../../Assets/circles.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Container style={{ position: 'relative' }}>
        {/* Circles decoration */}
        <img src={circlesImg} alt="" className="circles-decoration" aria-hidden="true" />

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
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#F13024"
              glarePosition="all"
              glareBorderRadius="16px"
            >
              <img
                src={aboutCartoon}
                alt="Developer workspace illustration"
                className="img-fluid about-main-img"
                style={{ width: '100%', maxWidth: 400, height: 'auto' }}
              />
            </Tilt>
          </Col>
        </Row>

        <h1 className="project-heading">
          Technical <strong className="purple">Skills</strong>
          <span style={{ color: '#F13024' }}>.</span>
        </h1>

        <h2 className="project-heading" style={{ fontSize: '1.2em', marginTop: '30px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: "'Sora', sans-serif" }}>
          <strong className="purple">Languages</strong>
        </h2>
        <Techstack />

        <h2 className="project-heading" style={{ fontSize: '1.2em', marginTop: '30px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: "'Sora', sans-serif" }}>
          <strong className="purple">Frameworks & Tools</strong>
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
