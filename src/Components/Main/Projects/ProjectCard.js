import React from "react";
import html from "../../../Assets/Skills/Html.svg";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
    const ProjectList = [
        {
            name: "Project 1",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 2",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 3",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 4",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 5",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 6",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
        {
            name: "Project 7",
            tech: "HTML, CSS, JavaScript",
            src: html,
            alt: "imagem",
            link: "/",
        },
    ];
    const Icons = ProjectList.map((p) => (
        <div className={styles.projectCard}>
            <h2>{p.name}</h2>
            <img alt={p.imagem} src={p.src} />
            <div>
                <span className={styles.techs}>{p.tech}</span>
                <div className={styles.more}>
                    <a href={p.link}>Ir ao site</a>
                    <span>Descrição</span>
                </div>
            </div>
        </div>
    ));

    return <section className={styles.container}>{Icons}</section>;
};

export default ProjectCard;
