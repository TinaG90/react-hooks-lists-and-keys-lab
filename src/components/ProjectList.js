import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const newProjects = projects.map((obj) => {
    return (
      <div id="projects" key={obj.id}>
        <h2>My Projects</h2>
        <div id="project-list">
          <ProjectItem
            id={obj.id}
            name={obj.name}
            about={obj.about}
            technologies={obj.technologies}
          />
        </div>
      </div>
    );
  });
  return newProjects;
}

export default ProjectList;
