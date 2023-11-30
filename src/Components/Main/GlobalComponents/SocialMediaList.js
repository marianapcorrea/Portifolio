import React from 'react';
import linkedin from '../../../Assets/linkedin.png';
import github from '../../../Assets/gitHub.png';

function HomeSocialMediaList() {
  return (
    <>
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
    </>
  );
}

export default HomeSocialMediaList;
