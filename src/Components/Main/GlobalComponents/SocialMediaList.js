import React from 'react';
import linkedin from '../../../Assets/linkedin.png';
import github from '../../../Assets/gitHub.png';
import styles from './SocialMediaList.module.css';

function HomeSocialMediaList() {
  return (
    <section className={ styles.socialMedia }>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/marianapcorrea/"
      >
        <img alt="Likedin" src={ linkedin } />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/marianapcorrea">
        <img alt="GitHub" src={ github } />
      </a>
    </section>
  );
}

export default HomeSocialMediaList;
