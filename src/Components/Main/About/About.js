import React from "react";
import styles from "./About.module.css";
import photo from "../../../Assets/photo.png";

const About = () => {
    return (
        <section id="about" className={`pageContainer ${styles.about}`}>
            <section className={styles.aboutText}>
                <h1>Sobre Mim</h1>
                <p>
                    Quisque ac dolor eros. Cras pretium ac est quis condimentum.
                    Cras non ante sed justo volutpat viverra vel eget ex. Duis
                    sed lacus elementum, faucibus metus quis, rhoncus tortor.
                    Mauris vitae nunc mollis, tincidunt felis eget, interdum
                    libero. Duis accumsan, lacus vitae fermentum bibendum, enim
                    felis tincidunt ante, eu posuere augue arcu at sem.{" "}
                </p>
                <p>
                    Maecenas nisl est, euismod et erat non, volutpat faucibus
                    risus. Sed tristique, purus in vehicula convallis, mi enim
                    rhoncus justo, a venenatis nulla arcu nec dui. Mauris id
                    odio ornare, tincidunt massa in, bibendum velit. Aliquam
                    molestie aliquet ligula, eget sodales ex elementum vel.
                    Integer in nisl ac dui scelerisque faucibus. Nulla feugiat
                    nisi vel augue volutpat pretium.
                </p>
            </section>
            <section className={styles.imgContainer}>
                <img src={photo} alt="Foto frontal de Mariana Corrêa" />
            </section>
        </section>
    );
};

export default About;
