import React from "react";
import styles from "./Contact.module.css";
import photo from "../../../Assets/photo.png";

const Contact = () => {
    return (
        <section id="contact" className={`pageContainer ${styles.contact}`}>
            <div className={styles.imgContainer}>
                <img src={photo} alt="Foto frontal de Mariana Corrêa" />
            </div>
            <div className={styles.email}>
                <p>Fale comigo!</p>
                <h3>mpcs270391@gmail.com</h3>
            </div>
            <div className={styles.socialMedia}>
                <h3>Redes Sociais</h3>
                <ul>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
