// ContactForm.jsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      nome: '',
      telefone: '',
      email: '',
      mensagem: '',
    });
  };

  return (
    <form
      className={ styles.formContainer }
      onSubmit={ handleSubmit }
      action="https://formsubmit.co/mpcs270391@gmail.com"
      method="POST"
    >
      <TextField
        className={ styles.textfield }
        label="Nome"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
        name="nome"
        value={ formData.nome }
        onChange={ handleChange }
      />
      <TextField
        className={ styles.textfield }
        label="Telefone"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
        name="telefone"
        value={ formData.telefone }
        onChange={ handleChange }
      />
      <TextField
        className={ styles.textfield }
        label="Email"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
        type="email"
        name="email"
        value={ formData.email }
        onChange={ handleChange }
      />
      <TextField
        className={ styles.textfield }
        label="Mensagem"
        variant="outlined"
        color="success"
        fullWidth
        multiline
        rows={ 4 }
        margin="normal"
        name="mensagem"
        value={ formData.mensagem }
        onChange={ handleChange }
      />
      <button className={ styles.button } type="submit">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
