import React from 'react';
import styles from './ContactSocialMediaList.module.css';

function ContactSocialMediaList() {
  return (
    <ul className={ styles.socialMedia }>
      <li className={ styles.linkedin }>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/marianapcorrea/"
        >
          LinkedIn
        </a>
      </li>
      <li className={ styles.gitHub }>
        <a target="_blank" rel="noreferrer" href="https://github.com/marianapcorrea">
          GitHub
        </a>
      </li>
    </ul>
  );
}

export default ContactSocialMediaList;
