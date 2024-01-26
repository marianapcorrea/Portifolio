import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function LinkList() {
  return (
    <ul>
      <li>
        <AnchorLink id="linkHome" href="#home">
          Home
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#about">Sobre Mim</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#services">Serviços</AnchorLink>
      </li>
      {/* <li>
        <AnchorLink href="#projects">Projetos</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#skills">Conhecimentos</AnchorLink>
      </li> */}
      <li>
        <AnchorLink href="#contact">Entre em Contato</AnchorLink>
      </li>
    </ul>
  );
}

export default LinkList;
