import React from "react";
import SkillsTechSkils from "./SkillsTechSkils";
import SkillsCourses from "./SkillsCourses";
import styles from "./Skills.module.css";

const Skils = () => {
    return (
        <section id="skills" className={`pageContainer ${styles.skills}`}>
            <SkillsTechSkils />
            <SkillsCourses />
        </section>
    );
};

export default Skils;
