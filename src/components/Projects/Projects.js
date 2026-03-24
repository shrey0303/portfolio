import React from "react";
import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const allProjects = [
  {
    number: "01",
    title: "LMAX Disruptor Crypto Exchange",
    description:
      "A sub-microsecond latency cryptocurrency matching engine built on the LMAX Disruptor pattern. Features a 4-stage lock-free ring buffer pipeline, GC-free order book with Agrona, price-time priority matching, and real-time WebSocket market data streaming with Grafana dashboards.",
    techTags: ["Java", "Spring Boot", "LMAX Disruptor", "Kafka", "gRPC", "Prometheus", "Grafana", "HdrHistogram"],
    metrics: [
      { value: "1.69M", label: "ops/sec" },
      { value: "< 1μs", label: "latency" },
      { value: "0", label: "GC pauses" },
    ],
    ghLink: "https://github.com/shrey0303/Lmax-disruptor-crypto-exchange",
  },
  {
    number: "02",
    title: "Hybrid GNN-LLM Recommender",
    description:
      "A production-grade multimodal recommendation engine fusing Graph Neural Networks (GraphSAGE), LLM text embeddings (TinyLlama/Mistral), and CLIP vision features through learned attention. Implements DPO preference alignment, real-time FastAPI serving, Kafka streaming, and full MLOps with experiment tracking.",
    techTags: ["PyTorch", "PyTorch Geometric", "Transformers", "CLIP", "FastAPI", "Kafka", "MLflow", "DPO/LoRA"],
    metrics: [
      { value: "3", label: "modalities" },
      { value: "195", label: "tests" },
      { value: "DPO", label: "alignment" },
    ],
    ghLink: "https://github.com/shrey0303/hybrid-graph-recommender",
  },
  {
    number: "03",
    title: "SteerOps — LLM Activation Steering",
    description:
      "An activation-level debugger and steering tool for transformer models. Performs mathematical layer scanning (SVD, CKA, entropy), extracts PCA-based steering directions, and applies real-time activation interventions via PyTorch hooks with orthogonal projection and L₂ norm preservation — all without retraining.",
    techTags: ["PyTorch", "FastAPI", "React", "Transformers", "PCA/SVD", "WebSocket", "Docker", "LEACE"],
    metrics: [
      { value: "O(1)", label: "runtime" },
      { value: "5", label: "phases" },
      { value: "CAA", label: "method" },
    ],
    ghLink: "https://github.com/shrey0303/activation_Steering",
  },
  {
    number: "04",
    title: "HomeQuest",
    description:
      "Real-estate SaaS platform with RBAC authentication, Cloudinary media storage, AI chatbot integration, custom NPM navigation package, and advanced property filters. Full-stack application built with Node.js, React, MongoDB, and GraphQL.",
    techTags: ["React", "Node.js", "MongoDB", "GraphQL", "Cloudinary", "JWT", "NPM Package"],
    metrics: [
      { value: "RBAC", label: "auth" },
      { value: "AI", label: "chatbot" },
      { value: "SaaS", label: "platform" },
    ],
    ghLink: "https://github.com/shrey0303/Project_HomeQuest",
    demoLink: "https://home-quest-mu.vercel.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
          <span style={{ color: '#F13024' }}>.</span>
        </h1>
        <p className="project-subtitle">
          Production systems, research tools, and open-source contributions.
        </p>

        {/* All Projects — same featured card style */}
        <div className="featured-projects">
          <div className="featured-label">
            <span>Projects</span>
          </div>

          {allProjects.map((project, index) => (
            <div className="featured-card" key={index}>
              <div className="featured-card-number">{project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="featured-metrics">
                {project.metrics.map((metric, i) => (
                  <div className="metric-item" key={i}>
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="tech-tags">
                {project.techTags.map((tag, i) => (
                  <span className="tech-tag" key={i}>{tag}</span>
                ))}
              </div>

              <div className="featured-card-links">
                <a href={project.ghLink} target="_blank" rel="noreferrer" className="card-link-github">
                  <BsGithub /> GitHub
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="card-link-demo">
                    <CgWebsite /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
