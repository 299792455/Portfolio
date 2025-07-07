import React from 'react';
import '../../styles/_focus.scss';
import extensionImage from '../../styles/images/dealScoutFocus.png';
import githubLogo from '../../styles/images/Git.png';
import { useTranslation } from 'react-i18next';
import RainDiscount from './rainDiscount';

const Focus = () => {
  const { t } = useTranslation();

  return (
    <div className="focus-container">
     <p className="section-title">{t('focusOnDealScout')}</p>
      <div className="focus-content">
      
        <div className="focus-text">
          <p>{t('focusIntro')}</p>
          <ul>
            <li>{t('focusPointCode')}</li>
            <li>{t('focusPointDiscount')}</li>
            <li>{t('focusPointLink')}</li>
          </ul>
          <p>{t('focusPrivacy')}</p>
        </div>

        <div className="focus-image">
          <RainDiscount />
          <img src={extensionImage} alt="Extension DealScout" />
        </div>
      </div>

      <div className="focus-button-wrapper">
        <a
          href="https://github.com/299792455/deal-scout"
          className="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" className="github-icon" />
          <span className="button-text">{t('seeProject')}</span>
        </a>
      </div>
    </div>
  );
};

export default Focus;
