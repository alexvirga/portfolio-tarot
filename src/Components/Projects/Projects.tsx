import { BackButton } from "../Shared/BackButton";
import "./Projects.css";

interface ProjectsProps {
  onBack: () => void;
}

const Projects = ({ onBack }: ProjectsProps) => {
  return (
    <div className="content-view">
      <BackButton onBack={onBack} />
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
