import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LinkList = () => {
    return (
        <ul>
            <li>
                <AnchorLink href="#about">Sobre Mim</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#projects">Projetos</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#skills">Conhecimentos</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#contact">Entre em Contato</AnchorLink>
            </li>
        </ul>
    );
};

export default LinkList;
