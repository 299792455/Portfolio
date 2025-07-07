// src/components/contact/socialLinks.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Git from '../../styles/images/Git.png';
import X from '../../styles/images/X_logo_2023_(white).png';
import LinkedIn from '../../styles/images/linkedin.png';
import '../../styles/_contact.scss'

const SocialLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="social-links">
      <h3>{t('socialLinks')}</h3>
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
  );
};

export default SocialLinks;
