import React from 'react';
import Project from './Project';
import projects from './project-list';

const Projects = () => (
  <React.Fragment>
    {projects.map((project) => <Project key={project.name} {...project} />)}
  </React.Fragment>
);

export default Projects;
