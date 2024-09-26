import React from "react";
import "./Projects.css";
import projectsImage from "../../assets/projects.jpg";
import { BackButton } from "../Shared/BackButton";
interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  return (
    <div className="projects-container">
      <div className="projects-left">
        <BackButton onBack={onBack} />
        <img src={projectsImage} alt="projects Card" />
      </div>

      <div className="projects-right">
        <div className="projects-content">
          <h1> Under Construction </h1>
          <p>Check back soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
