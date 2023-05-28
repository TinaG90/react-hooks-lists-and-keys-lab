import React from "react";

function ProjectItem({ name, about, technologies }) {
  const allTech = technologies.map((tech) => <span key={tech}>{tech}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> {allTech} </div>
    </div>
  );
}
export default ProjectItem;
