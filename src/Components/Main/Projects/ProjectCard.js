import React from "react";
import { useRef } from "react";
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

    const Icons = ProjectList.map((p, index) => (
        <div key={index} className={styles.projectCard}>
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
    const carousel = useRef(null);

    const HandleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const HandleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <section className={styles.container}>
            <div className={styles.projectsBox}>
                <button onClick={HandleLeftClick} className={styles.btnSlide}>
                    <div className={`${styles.arrow} ${styles.arLeft}`}></div>
                </button>
                <div className={styles.carousel} ref={carousel}>
                    {Icons}
                </div>
                <button onClick={HandleRightClick} className={`${styles.btnSlide} ${styles.right}`}>
                    <div className={`${styles.arrow} ${styles.arRight}`}></div>
                </button>
            </div>
            <div className={styles.btnsMobileContainer}>
                <button onClick={HandleLeftClick} className={styles.btnSlideMobile}>
                    Anterior
                </button>
                <button onClick={HandleRightClick} className={styles.btnSlideMobile}>
                    Próximo
                </button>
            </div>
        </section>
    );
};

export default ProjectCard;
