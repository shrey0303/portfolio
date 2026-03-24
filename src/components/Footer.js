import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Shrey Khakharia</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="home-about-social-links" style={{ marginBottom: 0 }}>
            <li>
              <a
                href="https://github.com/shrey0303"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shrey-khakharia-032953242/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/S_233/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
