/* eslint-disable max-len */
import React from 'react';
import styles from './SkillsTechSkills.module.css';
import html from '../../../Assets/Skills/Html.svg';
import css from '../../../Assets/Skills/CSS.svg';
import js from '../../../Assets/Skills/Js.svg';
import reactjs from '../../../Assets/Skills/React.svg';
import python from '../../../Assets/Skills/Python.svg';

function SkillsTechSkills() {
  const skillsList = [
    {
      id: 'iconHtml',
      src: html,
      alt: 'icone HTML',
      name: 'HTML',
      description:
        'HTML (HiperText Markup Language) é uma linguagem de marcação usada para estruturar o conteúdo uma página web.',
    },
    {
      id: 'iconCss',
      src: css,
      CSS: 'icone CSS',
      name: 'CSS',
      description:
        'CSS (Cascading Style Sheets) é uma linguagem de folhas de estilos, usadas para estilizar o conteúdo de uma página escrita com uma linguagem de programação.',
    },
    {
      id: 'iconJs',
      src: js,
      alt: 'icone JavaScript',
      name: 'JavaScript',
      description:
        'JavaScript é uma linguagem de programação de alto nível, interpretada, com tipagem dinâmica fraca e multiparadígma. Ela permite manipular o comportamento de páginas web a fim de criar elementos dinâmicos e interativos. ',
    },
    {
      id: 'iconReactjs',
      src: reactjs,
      alt: 'icone HTML',
      name: 'React-JS',
      description:
        'React é uma biblioteca JavaScript criada para facilitar a conexão de vários elementos em uma página. Isso permite a divisão desses elementos em pequenas partes, conhecidas como componentes, o que facilita a reutilização e manutenção. ',
    },
    {
      id: 'iconPython',
      src: python,
      alt: 'icone Python',
      name: 'Python',
      description:
        'Python é uma linguagem de programação de alto nível, interpretada, com tipagem dinâmica forte e orientada a objetos. Essa linguagem é amplamente versátil, sendo usada em aplicações desktop, web, servidores e ciência de dados.',
    },
  ];

  const Icons = skillsList.map((s) => (
    <div className={ styles.singleIconContainer } key={ s.id } id={ s.id }>
      <img src={ s.src } alt={ s.alt } />
      <h4>{s.name}</h4>
    </div>
  ));

  return (
    <section id="techSkills">
      <h1>Conhecimentos</h1>
      <div className={ styles.container }>{Icons}</div>
    </section>
  );
}

export default SkillsTechSkills;
