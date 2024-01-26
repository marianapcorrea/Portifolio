import React from 'react';
import styles from './Contact.module.css';
import photo from '../../../Assets/photo.png';
import ContactForm from './ContactForm';
import SocialMediaList from '../GlobalComponents/SocialMediaList';

function Contact() {
  return (
    <section id="contact" className={ `pageContainer ${styles.contact}` }>
      <section className={ styles.info }>
        <div className={ styles.imgContainer }>
          <img src={ photo } alt="Foto frontal de Mariana Corrêa" />
        </div>
        <div className={ styles.email }>
          <p>Fale comigo!</p>
          <h3>
            <a href="mailto: mpcs270391@gmail.com">mpcs270391@gmail.com</a>
          </h3>
        </div>
        <div className={ styles.socialMedia }>
          <SocialMediaList />
        </div>
      </section>

      <ContactForm />
    </section>
  );
}

export default Contact;
