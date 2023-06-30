import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnDemo from "../components/btnDemo/BtnDemo";
import { projects } from "./../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>
              <p style={{ color: "#ff0336" }}>Skills:</p> {project.skills}
            </p>
          </div>

          <div className="project-buttons">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.demoLink && <BtnDemo link={project.demoLink} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
