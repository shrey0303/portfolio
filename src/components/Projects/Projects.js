import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import homequest from "../../Assets/Projects/homequest.jfif";
import ratelimiter from "../../Assets/Projects/Ratelimiter.png";
import docReader from "../../Assets/Projects/DocReader.png";
import finance from "../../Assets/Projects/finance.png";
import npm from "../../Assets/Projects/npm.jpg";
import graph from "../../Assets/Projects/graph.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="project-subtitle">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docReader}
              isBlog={false}
              title="DocReader_RAG"
              description={`A full-stack Retrieval-Augmented Generation (RAG) system for document Q&A and analysis. Supports PDF, PPTX, and CSV ingestion, chunking, vector search, reranking, and LLM-powered answers using Together AI. Built with Streamlit for a modern, interactive UI.\n\nFeatures: Multi-file upload, automatic chunking, top-k context, prompt transparency, LLM answers, dark mode, concurrent/multi-user safe, .env support, and robust evaluation tools.`}
              ghLink="https://github.com/shrey0303/DocReader_RAG"
              demoLink="https://docreader-rag.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ratelimiter}
              isBlog={false}
              title="RateLimiter"
              description={`A production-ready gRPC microservice template built with Spring Boot and Bucket4j, providing hierarchical rate limiting (global, tenant, user levels) using Redis and JCache.\n\nFeatures: gRPC service, hierarchical rate limiting, distributed limits via Redis, Prometheus metrics, JWT-based authentication, circuit breaker, and graceful degradation.`}
              ghLink="https://github.com/shrey0303/Ratelimiter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homequest}
              isBlog={false}
              title="HomeQuest"
              description={`A secure, modular real-estate SaaS platform with RBAC authentication, cloudinary storage, dark/light mode, user favorites/bookmark, and advanced filters (price, location, type, sale/rent).\n\nBuilt with Node, React, MongoDB, and GraphQL. Features an AI Chatbot, custom NPM navigation package, and productivity-boosting utilities.`}
              ghLink="https://github.com/shrey0303/Project_HomeQuest"
              demoLink="https://home-quest-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npm}
              isBlog={false}
              title="NPM"
              description={`A lightweight custom React hook for iterating through a list of options without boilerplate.\n\nFeatures: Easy navigation, customizable starting index, forward/backward handlers, and current option tracking.`}
              ghLink="https://github.com/shrey0303/NPM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="GraphVision"
              description={`Graph-based semi-supervised image classification via label propagation over similarity graphs, boosting accuracy with minimal labeled data.\n\nIncludes robust baseline comparisons, comprehensive EDA notebooks, modular code, and test-ready setup for reproducible results.`}
              ghLink="https://github.com/shrey0303/ImageData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Finance_Tracker"
              description={`A predictive financial framework using non-linear techniques and data modeling for improved outcome predictions.\n\nProcesses large bank datasets, optimizes data segmentation, and outperforms traditional linear regression for more precise financial forecasting.`}
              ghLink="https://github.com/shrey0303/Expense-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
