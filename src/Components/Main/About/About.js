import React from 'react';
import styles from './About.module.css';
import photo from '../../../Assets/photo.png';

function About() {
  return (
    <section id="about" className={ `pageContainer ${styles.about}` }>
      <section className={ styles.aboutText }>
        <h1>Um pouco sobre mim...</h1>
        <p>
          Olá, eu sou a Mariana, desenvolvedora full-stack, e é um prazer ter você em meu
          portifólio!
        </p>
        <p>
          Atualmente, vivo em Belo Horizonte, Minas Gerais com minha parceira e nossos
          seis gatinhos.
        </p>
        <p>
          Me formei como Restauradora de Bens Culturais Móveis pela Universidade Federal
          de Minas Gerais, mas migrei para a área de desenvolvimento web em 2023.
        </p>
        <p>
          {' '}
          Hoje atuo como desenvolvedora Full Stack, criando aplicações com React,
          TypeScript e Node.js.
          {' '}
        </p>
      </section>
      <section className={ styles.imgContainer }>
        <img src={ photo } alt="Foto frontal de Mariana Corrêa" />
      </section>
    </section>
  );
}

export default About;
