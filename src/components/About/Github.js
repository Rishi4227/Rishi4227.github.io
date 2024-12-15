import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <iframe
        src="https://github-readme-stats.vercel.app/api?username=Rishi4227&show_icons=true&locale=en"
        frameBorder="0"
        scrolling="0"
        width="100%"
        height="250"
        title="GitHub Stats"
      ></iframe>
    </Row>
  );
}

export default Github;
