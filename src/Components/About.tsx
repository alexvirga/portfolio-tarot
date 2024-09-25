import React from "react";
import "./styles.css";

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="content-view">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h1>About Me</h1>
      <p>Hi! I'm Alex Virga</p>
    </div>
  );
};

export default About;
