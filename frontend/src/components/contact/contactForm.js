import React, { useState } from 'react';
import '../../styles/_contact.scss';
import apiService from '../../services/apiService'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.post('/contact/send-email', {
        to: '75017pi@gmail.com', // Ajoute une adresse email valide ici
        subject: `Message de ${formData.name}`,
        message: formData.message,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Une idée de projet à développer ? </h2>
      <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required></textarea>
      <button type="submit"><span>Envoyer</span></button>
    </form>
  );
};

export default ContactForm;
