import React from 'react';
import ProjectCarrousel from './ProjectCarousel';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={ `pageContainer  ${styles.projects}` }>
      <h1>Projetos</h1>
      <ProjectCarrousel />
    </section>
  );
}

export default Projects;
