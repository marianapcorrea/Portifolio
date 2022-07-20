import React from "react";
import styles from "./SkillsTechSkills.module.css";
import html from "../../../Assets/Skills/Html.svg";
import css from "../../../Assets/Skills/CSS.svg";
import js from "../../../Assets/Skills/Js.svg";
import react from "../../../Assets/Skills/React.svg";
import python from "../../../Assets/Skills/Python.svg";

const SkillsTechSkills = () => {
    const skillsList = [
        { name: "HTML", description: "description" },
        { name: "CSS", description: "description" },
        { name: "JavaScript", description: "description" },
        { name: "React-JS", description: "description" },
        { name: "Python", description: "description" },
    ];

    const showList = skillsList.map((s, i) => (
        <div key={i}>
            <p>{s.name}</p>
            <p>{s.description}</p>
        </div>
    ));

    return (
        <section id={styles.techSkills}>
            <h1>Conhecimentos</h1>
            <div className={styles.container}>
                <div className={styles.containerIcons}>
                    <div id={styles.html} className={styles.icon}>
                        <img src={html} alt="Icone HTML" />
                    </div>
                    <div id={styles.css} className={styles.icon}>
                        <img src={css} alt="Icone CSS" />
                    </div>
                    <div id={styles.js} className={styles.icon}>
                        <img src={js} alt="Icone JavaScript" />
                    </div>
                    <div id={styles.react} className={styles.icon}>
                        <img src={react} alt="Icone React" />
                    </div>
                    <div id={styles.python} className={styles.icon}>
                        <img src={python} alt="Icone Python" />
                    </div>
                </div>
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
