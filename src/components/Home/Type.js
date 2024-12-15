import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Enthusiast",
          "Machine Learning Developer",
          "Web Developer",
          "Python Developer",
          "Open Source Contributor",
          "Final Year Computer Science Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
