import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/_header.scss';
import logo from '../styles/images/logo_CPI.webp';
import Flag from 'react-world-flags';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false); 
  const [selectedLang, setSelectedLang] = useState('fr');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLangMenuOpen(false); // ✅ ferme le menu langue si ouvert
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
    setMenuOpen(false); // ✅ ferme le menu nav si ouvert
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setLangMenuOpen(false); // ✅ referme le menu
  };

  const getFlagCode = (lang) => {
    switch (lang) {
      case 'en': return 'GB';
      case 'fr': return 'FR';
      case 'es': return 'ES';
      default: return 'FR';
    }
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Web Dev" />
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        ☰
      </div>

      <div className="header-right">
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#about">{t('aboutMe')}</a></li>
            <li><a href="#skills">{t('skills')}</a></li>
            <li><a href="#projets">{t('projects')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
          </ul>
        </nav>

        <div className="language-selector">
          <div className="language-dropdown" onClick={toggleLangMenu}>
            <button className="language-button">
              <Flag code={getFlagCode(selectedLang)} style={{ width: '30px', height: '20px' }} />
              {selectedLang.toUpperCase()}
            </button>
            <div className={`language-menu ${langMenuOpen ? 'open' : ''}`}>
              <button onClick={() => changeLanguage('fr')} className="language-option">
                <Flag code="FR" style={{ width: '30px', height: '20px' }} /> fr
              </button>
              <button onClick={() => changeLanguage('en')} className="language-option">
                <Flag code="GB" style={{ width: '30px', height: '20px' }} /> en
              </button>
              <button onClick={() => changeLanguage('es')} className="language-option">
                <Flag code="ES" style={{ width: '30px', height: '20px' }} /> es
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
