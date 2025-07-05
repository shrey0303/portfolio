import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shrey Khakharia</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Shrey</h3>
        </Col>
        <Col md="4" className="footer-body">
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
  );
}

export default Footer;
