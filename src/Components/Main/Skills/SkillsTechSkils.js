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
            description:
                "HTML (HiperText Markup Language) é uma linguagem de marcação usada para estruturar o conteúdo uma página web.",
        },
        {
            id: "css",
            src: css,
            CSS: "icone CSS",
            name: "CSS",
            description:
                "CSS (Cascading Style Sheets) é uma linguagem de folhas de estilos, usadas para estilizar o conteúdo de uma página escrita com uma linguagem de programação.",
        },
        {
            id: "js",
            src: js,
            alt: "icone JavaScript",
            name: "JavaScript",
            description:
                "JavaScript é uma linguagem de programação de alto nível, interpretada, com tipagem dinâmica fraca e multiparadígma. Ela permite manipular o comportamento de páginas web a fim de criar elementos dinâmicos e interativos. ",
        },
        {
            id: "reactjs",
            src: reactjs,
            alt: "icone HTML",
            name: "React-JS",
            description:
                "React é uma biblioteca JavaScript criada para facilitar a conexão de vários elementos em uma página. Isso permite a divisão desses elementos em pequenas partes, conhecidas como componentes, o que facilita a reutilização e manutenção. ",
        },
        {
            id: "python",
            src: python,
            alt: "icone Python",
            name: "Python",
            description:
                "Python é uma linguagem de programação de alto nível, interpretada, com tipagem dinâmica forte e orientada a objetos. Essa linguagem é amplamente versátil, sendo usada em aplicações desktop, web, servidores e ciência de dados.",
        },
    ];

    const showList = skillsList.map((s) => (
        <div key={s.id}>
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
