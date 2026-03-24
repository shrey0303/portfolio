import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPytorch, SiTensorflow, SiScikitlearn, SiApachespark, SiReact,
  SiNodedotjs, SiSpringboot, SiGraphql, SiMongodb, SiPostgresql,
  SiMysql, SiGit, SiAmazonaws, SiDocker, SiRedis, SiApachekafka, SiFastapi
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiPytorch />, label: "PyTorch" },
    { icon: <SiFastapi />, label: "FastAPI" },
    { icon: <SiSpringboot />, label: "Spring Boot" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiApachekafka />, label: "Kafka" },
    { icon: <SiRedis />, label: "Redis" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiAmazonaws />, label: "AWS" },
    { icon: <SiGit />, label: "Git" },
    { icon: <SiApachespark />, label: "Spark" },
    { icon: <SiGraphql />, label: "GraphQL" },
    { icon: <SiTensorflow />, label: "TensorFlow" },
    { icon: <SiScikitlearn />, label: "Scikit-learn" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          {tool.icon}
          <span className="tech-icon-label">{tool.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
