import "./styles.css";

interface ProjectsProps {
  onBack: () => void;
}

const Projects = ({ onBack }: ProjectsProps) => {
  return (
    <div className="content-view">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
