import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <b className="purple">Shrey Khakharia </b>
            from <b className="purple"> Gujarat, India.</b>
            <br />
             I work as a Software Engineer at MAQ Software.
            <br />
            I completed my <b className="purple">B.Tech</b> in <b className="purple">Information and Communication Technology, with Minor in Computational Science</b>, from <b className="purple">DA-IICT</b>, Gandhinagar.
            <br />
          </p>
          <h2 style={{ textAlign: "center", marginTop: 20, marginBottom: 16 }} className="purple">Technical Electives</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div>Data Structure and Algorithms</div>
            <div>Machine Learning</div>
            <div>Natural Language Processing</div>
            <div>Big Data Processing</div>
            <div>Linear Algebra</div>
            <div>Probability and Statistics</div>
            <div>Design and Analysis of Algorithm</div>
            <div>Database Management System</div>
            <div>Deep learning</div>
            <div>Computer Networks</div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
