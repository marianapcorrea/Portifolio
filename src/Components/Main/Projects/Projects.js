import React from "react";
import ProjectCarrousel from "./ProjectCarousel";
import styles from "./Project.module.css";

const Projects = () => {
    return (
        <section id="projects" className={`pageContainer  ${styles.projects}`}>
            <h1>Projetos</h1>
            <ProjectCarrousel />
        </section>
    );
};

export default Projects;
