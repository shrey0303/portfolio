import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroCartoon from "../../Assets/hero-cartoon.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import circlesImg from "../../Assets/circles.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container style={{ position: 'relative' }}>
        {/* Circles decoration */}
        <img src={circlesImg} alt="" className="circles-decoration" aria-hidden="true" />

        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em", paddingBottom: 30 }}>
              A bit about <span className="purple">me</span><span style={{ color: '#F13024' }}>.</span>
            </h1>
            <p className="home-about-body">
              I'm Shrey. I work as a <span style={{ color: '#fff' }}>Software Engineer</span> where
              I spend most of my time making things faster than they need to be. Our inventory
              dashboard used to take six seconds to load. Now it takes three. That kind of thing.
              <br /><br />
              Before that, I was at <span style={{ color: '#fff' }}>DA-IICT</span> studying
              ICT with a minor in computational science. Later got fascinated in the realms of Machine
              Learning and AI. I started building recommendation systems that fuse graph neural networks with LLM embeddings.
              <br /><br />
              Most of my side projects come from wanting to understand how something works
              under the hood. The matching engine does <span style={{ color: '#fff' }}>1.69 million
                operations per second</span> because I wanted to see if the LMAX Disruptor pattern
              actually lives up to the hype. (It does.) The activation steering tool exists because
              I got curious about what happens when you poke at transformer internals.
              <br /><br />
              I also contribute to open source when I can. My patches to <span style={{ color: '#fff' }}>LibreOffice</span> ship
              in the next release,  and I did Hacktoberfest mostly because I find reviewing
              other people's code weirdly satisfying.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ paddingBottom: 40 }}>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#F13024"
              glarePosition="all"
              glareBorderRadius="16px"
              scale={1.03}
            >
              <img src={heroCartoon} className="img-fluid home2-avatar-img" alt="Developer workspace" style={{ width: '100%', maxWidth: 500, height: 'auto', paddingTop: 30 }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me <span className="purple">elsewhere</span></h1>
            <ul className="home-about-social-links">
              <li>
                <a href="https://github.com/shrey0303" target="_blank" rel="noreferrer" className="home-social-icons" aria-label="GitHub">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shrey-khakharia-032953242/" target="_blank" rel="noreferrer" className="home-social-icons" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/S_233/" target="_blank" rel="noreferrer" className="home-social-icons" aria-label="LeetCode">
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
