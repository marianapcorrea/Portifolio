import React from "react";
import styles from "./About.module.css";
import photo from "../../../Assets/photo.png";

const About = () => {
    return (
        <section id="about" className={`pageContainer ${styles.about}`}>
            <section className={styles.aboutText}>
                <h1>Um pouco sobre mim...</h1>
                <p>
                    Olá, eu sou a Mariana, desenvolvedora front-end, e é um prazer ter você em meu
                    portifólio.
                </p>
                <p>
                    Atualmente, vivo em Belo Horizonte, Minas Gerais com minha parceira e nossos
                    seis gatinhos.
                </p>
                <p>
                    Foi a minha parceira quem me apresentou o incrível mundo da tecnologia, onde me
                    apaixonei pela arte de fazer códigos e resolvi mudar da minha carreira em
                    Conservação e Restauração de Bens Culturais para me tornar desenvolvedora web.
                </p>
                <p>Hoje, atuo como freelancer, desenvolvendo a interface gráfica de páginas web.</p>
                <h2>O que posso fazer por você:</h2>
                <ul>
                    <li>
                        Execução de projetos, usando{" "}
                        <strong>HTML semântico, CSS, JavaScript, frameworks e bibliotecas</strong>;
                    </li>
                    <li>
                        Implementação de <strong>designs responsivos</strong> para sites e
                        interfaces;
                    </li>
                    <li>
                        Criação de ferramentas e códigos para <strong>consumo de API's</strong>;
                    </li>
                    <li>
                        <strong>Refatoração de páginas HTML</strong> para implementar semântica e
                        melhorar o suporte ao <strong>SEO</strong> (Search Engine Optimization) e{" "}
                        <strong>acessibilidade</strong> do site;
                    </li>
                    <li>Manutenção de sites;</li>
                    <li>
                        Priorização e suporte à <strong>experiência do usuário</strong>.
                    </li>
                </ul>
            </section>
            <section className={styles.imgContainer}>
                <img src={photo} alt="Foto frontal de Mariana Corrêa" />
            </section>
        </section>
    );
};

export default About;
