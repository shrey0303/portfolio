import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgExplosion from "../../Assets/bg-explosion.png";
import ParticlesContainer from "../ParticlesContainer";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Hero content */}
        <Container className="home-content" style={{ paddingTop: 20, paddingBottom: 0 }}>
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10, paddingTop: 140 }} className="heading">
                Shrey Khakharia
              </h1>

              <h1 className="heading-name">
                Building Systems
                <br />
                That <strong className="main-name">Scale</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left", paddingLeft: 6 }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Explosion background */}
        <div style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <img
            src={bgExplosion}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right',
              mixBlendMode: 'color-dodge',
              opacity: 0.6
            }}
          />
        </div>

        {/* Interactive particles */}
        <ParticlesContainer />
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
