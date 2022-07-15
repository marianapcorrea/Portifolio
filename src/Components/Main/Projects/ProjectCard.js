import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = () => {
    return (
        <div className={styles.projectCard}>
            <h2>Projeto X</h2>
            <img alt="" src="" />
            <div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
                <div className={styles.more}>
                    <span>+</span>
                    <a href="/">Ir ao site</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
