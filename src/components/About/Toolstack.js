import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiSublimetext, SiPytorch, SiTensorflow, SiScikitlearn, SiApachespark, SiReact, SiNodedotjs, SiSpringboot, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiGit, SiAmazonaws } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachespark /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNodedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGraphql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
    </Row>
  );
}

export default Toolstack;
