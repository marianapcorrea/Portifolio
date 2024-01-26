import React, { useRef } from 'react';
import html from '../../../Assets/Skills/Html.svg';
import styles from './ProjectCard.module.css';

function ProjectCard() {
  const frontend = 'HTML, CSS, JavaScript';
  const ProjectList = [
    {
      name: 'Project 1',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 2',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 3',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 4',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 5',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 6',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
    {
      name: 'Project 7',
      tech: frontend,
      src: html,
      alt: 'imagem',
      link: '/',
    },
  ];

  const Icons = ProjectList.map((p, index) => (
    <div key={ index } className={ styles.projectCard }>
      <h2>{p.name}</h2>
      <img alt={ p.imagem } src={ p.src } />
      <div>
        <span className={ styles.techs }>{p.tech}</span>
        <div className={ styles.more }>
          <a href={ p.link }>Ir ao site</a>
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
    <section className={ styles.container }>
      <div className={ styles.projectsBox }>
        <button
          onClick={ HandleLeftClick }
          className={ styles.btnSlide }
          aria-label="Previous"
        >
          <div className={ `${styles.arrow} ${styles.arLeft}` } />
        </button>
        <div className={ styles.carousel } ref={ carousel }>
          {Icons}
        </div>

        <button
          onClick={ HandleRightClick }
          className={ styles.btnSlide }
          aria-label="Next"
        >
          <div className={ `${styles.arrow} ${styles.arRight}` } />
        </button>
      </div>
      <div className={ styles.btnsMobileContainer }>
        <button onClick={ HandleLeftClick } className={ styles.btnSlideMobile }>
          Anterior
        </button>
        <button onClick={ HandleRightClick } className={ styles.btnSlideMobile }>
          Próximo
        </button>
      </div>
    </section>
  );
}

export default ProjectCard;
