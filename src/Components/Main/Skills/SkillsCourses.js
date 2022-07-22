import React from "react";
import styles from "./SkillsCourses.module.css";

const SkillsCourses = () => {
    const coursesList = [
        {
            course: "Curso",
            institute: "Escola",
            workload: "XXX",
            conclusion: "2022",
        },
        {
            course: "Curso",
            institute: "Escola",
            workload: "XXX",
            conclusion: "2022",
        },
        {
            course: "Curso",
            institute: "Escola",
            workload: "XXX",
            conclusion: "2022",
        },
        {
            course: "Curso",
            institute: "Escola",
            workload: "XXX",
            conclusion: "2022",
        },
    ];

    const mapCourses = coursesList.map((c, i) => (
        <div key={c.i} className={styles.card}>
            <h3>{c.course}</h3>
            <div className={styles.subcontainer}>
                <div className={styles.info}>
                    <p>{c.institute}</p>
                    <p>{c.workload} horas</p>
                </div>
                <p className={styles.conclusion}>{c.conclusion}</p>
            </div>
        </div>
    ));

    return (
        <section className={styles.courses}>
            <h1>Cursos e Formações</h1>
            <div className={styles.cardContainer}>{mapCourses}</div>
        </section>
    );
};

export default SkillsCourses;
