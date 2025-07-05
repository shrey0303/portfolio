import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi there! I’m <b className="purple">Shrey Khakharia</b>—a passionate Engineer who loves bringing order to chaos.  I get a kick out of turning messy data into clear, actionable insights. Over the years, I’ve:
              <br />
              <br />
              
              <span className="purple">•</span> Written <span className="purple">gRPC microservices</span> that seamlessly enforce multi‑level quotas<br />
              <span className="purple">•</span> Designed <span className="purple">graph‑powered image classifiers</span> that learn in minutes<br />
              <span className="purple">•</span> Implemented <span className="purple">RAG based Document Search Engine </span> with vector database<br />
          
              <br />
              
              I dove into the open‑source world by completing<b className="purple"> Hacktoberfest</b>, contributing across several projects.
              <br />
              Since then, I’ve also contributed to organization like <b className="purple"> LibreOffice</b>,<b className="purple"> AboutCode</b> —two of my LibreOffice patches will ship in the next release.
              <br />
              <br />Let’s dive in—whether you’re here to explore my code, collaborate on a new project, or just geek out over data, I’m excited to connect!
              
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ marginTop: '-40px', paddingBottom: '40px' }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: '100%', minWidth: 400, minHeight: 400 , paddingTop: 69}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b className = "purple">FIND</b> ME ON</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shrey0303"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shrey-khakharia-032953242/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/S_233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
