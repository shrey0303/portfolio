import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            As a software engineer, my day-to-day work involves backend services, mostly Java and Python, the kind of work where the win is that nothing breaks and everything gets a little faster.
            <br /><br />
            Some numbers from the past year: API throughput went up <span style={{ color: '#F13024' }}>40%</span> after
            I rewrote the async request pipeline, query times dropped by <span style={{ color: '#F13024' }}>60%</span> once
            I added the right indexes (they were missing, which is embarrassing but common),
            and our main dashboard loads in half the time it used to thanks to Redis caching
            and materialized views.
            <br /><br />
            I graduated from DA-IICT, Gandhinagar with a B.Tech in ICT and a minor in
            computational science. The program leaned hard into ML and data. I liked the
            math parts more than I expected.
            <br /><br />
            Outside of work, I tend to gravitate toward projects where I can go deep on
            something specific: how lock-free data structures behave at scale, how you get
            a GNN and an LLM to agree on a recommendation, how activation steering changes
            what a model actually says. I learn best by building the thing.
          </p>

          <h2 style={{ textAlign: "center", marginTop: 28, marginBottom: 16, fontSize: '1.2em', color: '#F13024', fontFamily: "'Sora', sans-serif" }}>
            What I studied
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {[
              "Data structures & algorithms",
              "Machine learning",
              "Deep learning",
              "Natural language processing",
              "Big data processing",
              "Linear algebra",
              "Probability & statistics",
              "Algorithm design & analysis",
              "Database systems",
              "Computer networks",
            ].map((course, i) => (
              <span className="tech-tag" key={i}>{course}</span>
            ))}
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
