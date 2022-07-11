import React from "react";
import styles from "./Contact.module.css";
import photo from "../../../Assets/photo.png";
import ContactSocialMediaList from "./ContactSocialMediaList";

const Contact = () => {
    return (
        <section id="contact" className={`pageContainer ${styles.contact}`}>
            <div className={styles.imgContainer}>
                <img src={photo} alt="Foto frontal de Mariana Corrêa" />
            </div>
            <div className={styles.email}>
                <p>Fale comigo!</p>
                <h3>
                    <a href="mailto: mpcs270391@gmail.com">
                        mpcs270391@gmail.com
                    </a>
                </h3>
            </div>
            <div className={styles.socialMedia}>
                <h3>Redes Sociais</h3>
                <ContactSocialMediaList />
            </div>
        </section>
    );
};

export default Contact;
