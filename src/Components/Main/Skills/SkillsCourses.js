import React from 'react';
import styles from './SkillsCourses.module.css';

function SkillsCourses() {
  const igti = 'FACULDADE XP EDUCAÇÃO-IGTI';
  const origamid = 'ORIGAMID';
  const coursesList = [
    {
      course: 'REACT COMPLETO',
      institute: origamid,
      workload: '36 Horas',
      conclusion: '2022',
    },
    {
      course: 'DESENVOLVEDOR(A) REACT',
      institute: igti,
      workload: '148 Horas',
      conclusion: '2022',
    },
    {
      course: 'DESENVOLVEDOR(A) FRONT-END',
      institute: igti,
      workload: '148 Horas',
      conclusion: '2022',
    },
    {
      course: 'DESENVOLVEDOR(A) PYTHON',
      institute: igti,
      workload: '148 Horas',
      conclusion: '2021',
    },
    {
      course: 'FLEXBOX',
      institute: origamid,
      workload: '6 Horas',
      conclusion: '2022',
    },
    {
      course: 'CAPACITA MDT - CHATBOT ',
      institute: 'LET\'SBOT',
      workload: '50 Horas',
      conclusion: '2022',
    },
  ];

  const mapCourses = coursesList.map((c) => (
    <div key={ c.i } className={ styles.card }>
      <h3>{c.course}</h3>
      <div className={ styles.subcontainer }>
        <div className={ styles.info }>
          <p>{c.institute}</p>
          <p>
            {c.workload}
            {' '}
            horas
          </p>
        </div>
        <p className={ styles.conclusion }>{c.conclusion}</p>
      </div>
    </div>
  ));

  return (
    <section className={ styles.courses }>
      <h1>Cursos e Formações</h1>
      <div className={ styles.cardContainer }>{mapCourses}</div>
    </section>
  );
}

export default SkillsCourses;
