import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into programming has been both challenging and rewarding, and I believe I've gained some truly meaningful skills along the way.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Python, React.js, and TensorFlow. </b>
              </i>
              <br />
              <br />
              My field of interest is in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and AI Products</b>
              </i>
              &nbsp;and exploring advanced concepts in{" "}
              <i>
                <b className="purple">Machine Learning and Deep Learning.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">Python and Java</b> and modern{" "}
              <i>
                <b className="purple">JavaScript Libraries and Frameworks</b>
              </i>
              &nbsp;like
              <i>
                <b className="purple"> React.js and Next.js</b>.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rishi4227"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayyo.its_rishi_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rishipatel6147@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  📧
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
