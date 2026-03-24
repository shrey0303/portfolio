import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJava } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiTypescript, SiJavascript } from "react-icons/si";

function Techstack() {
  const langs = [
    { icon: <DiJava />, label: "Java" },
    { icon: <DiPython />, label: "Python" },
    { icon: <CgCPlusPlus />, label: "C++" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {langs.map((lang, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          {lang.icon}
          <span className="tech-icon-label">{lang.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
