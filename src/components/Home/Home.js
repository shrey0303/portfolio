import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ paddingTop: 20, paddingBottom: 0 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10, paddingTop: 140 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"><b className="purple"> Shrey Khakharia</b> </strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left", paddingLeft: 42 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0, paddingTop: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxWidth: '100%', minWidth: 560, minHeight: 560, paddingRight: 50}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
