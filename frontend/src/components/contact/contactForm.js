import React, { useState } from 'react';
import '../../styles/_contact.scss';
import apiService from '../../services/apiService';
import { useTranslation } from 'react-i18next';
import Photo from '../../styles/images/CPI.jpg';

// Import des logos
import Git from '../../styles/images/Git.png';
import X from '../../styles/images/X_logo_2023_(white).png';
import LinkedIn from '../../styles/images/linkedin.png';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.post('/contact/send-email', {
        to: '75017pi@gmail.com',
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
    <>
      <h2>{t('contactFormTitle')}</h2>
      <p className="contact-desc">{t('contactDescription')}</p>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder={t('yourName')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('yourEmail')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t('yourMessage')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">
            <span>{t('send')}</span>
          </button>
        </form>

        {/* SOCIAL LINKS MODIFIÉS */}
        <div className="social-links">
            <div className="contact-photo">
              <img src={Photo} alt="Ma photo" />
            </div>
          <ul>
            <li>
              <a href="https://github.com/299792455" target="_blank" rel="noopener noreferrer">
                <img src={Git} alt="GitHub" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/christophe-p-260725332/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://x.com/ZeOutrun" target="_blank" rel="noopener noreferrer">
                <img src={X} alt="X" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
