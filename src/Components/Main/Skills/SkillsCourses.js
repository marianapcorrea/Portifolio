import React from "react";
import styles from "./SkillsCourses.module.css";

const SkillsCourses = () => {
    return (
        <section className={styles.courses}>
            <h1>Cursos e Formações</h1>
            <div className={styles.card}>
                <h3>Nome do Cursos</h3>
                <div className={styles.subcontainer}>
                    <div className={styles.info}>
                        <p>Escola</p>
                        <p>Carga Horária</p>
                    </div>
                    <p className={styles.year}>Ano</p>
                </div>
            </div>
        </section>
    );
};

export default SkillsCourses;
