import React from "react";
import styles from "./SkillsTechSkills.module.css";
import html from "../../../Assets/Skills/Html.svg";
import css from "../../../Assets/Skills/CSS.svg";
import js from "../../../Assets/Skills/Js.svg";
import reactjs from "../../../Assets/Skills/React.svg";
import python from "../../../Assets/Skills/Python.svg";

const SkillsTechSkills = () => {
    const skillsList = [
        {
            id: "html",
            src: html,
            alt: "icone HTML",
            name: "HTML",
            description: "description",
        },
        {
            id: "css",
            src: css,
            CSS: "icone CSS",
            name: "CSS",
            description: "description",
        },
        {
            id: "js",
            src: js,
            alt: "icone JavaScript",
            name: "JavaScript",
            description: "description",
        },
        {
            id: "reactjs",
            src: reactjs,
            alt: "icone HTML",
            name: "React-JS",
            description: "description",
        },
        {
            id: "python",
            src: python,
            alt: "icone Python",
            name: "Python",
            description: "description",
        },
    ];

    const showList = skillsList.map((s, i) => (
        <div key={i}>
            <p>{s.name}</p>
            <p>{s.description}</p>
        </div>
    ));

    const icons = skillsList.map((s) => (
        <div key={s.id} id={s.id} className={styles.icon}>
            <img src={s.src} alt={s.alt} />
        </div>
    ));

    return (
        <section id={styles.techSkills}>
            <h1>Conhecimentos</h1>
            <div className={styles.container}>
                <div className={styles.containerIcons}>{icons}</div>
                <div className={styles.containerText}>{showList}</div>
            </div>
        </section>
    );
};

export default SkillsTechSkills;

/* <section id={styles.techSkills}>
            <h1>Conhecimentos</h1>
            <div className={styles.container}>
                
                <div className={styles.containerText}>
                    <div></div>
                    <p>Tech Name</p>
                    <p>Tech description</p>
                </div>
            </div>
        </section> */
