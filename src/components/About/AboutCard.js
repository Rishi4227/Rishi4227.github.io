import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishi Patel </span>
            Student in <span className="purple"> United Kingdom.</span>
            <br />I am a Computer Science student passionate about building
            innovative technology solutions.
            <br />
            Currently exploring Machine Learning and AI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              🌟 Playing Cricket and Volleyball
            </li>
            <li className="about-activity">
              🌟 Learning Hacking.
            </li>
            <li className="about-activity">
              🌟 Exploring Open-Source Contributions
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
