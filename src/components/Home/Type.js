import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Lead IT Application Engineer",
          "Emerging Technology Lead",
          "Full Stack Web Developer",
          "Cloud-Native Architect",
          "AI/ML Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
