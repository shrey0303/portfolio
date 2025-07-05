import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJava } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
         <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
   
    </Row>
  );
}

export default Techstack;
