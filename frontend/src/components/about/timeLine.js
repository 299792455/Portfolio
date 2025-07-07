import React from 'react';
import '../../styles/timeline.scss';
import aboutImage from '../../styles/images/aboutImage.png';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();

  const events = [
    { year: '2025', text: t('launchDevCareer') },
    { year: '2023/24', text: `${t('careerChange')}\n${t('rncpCertification')}` },
    { year: '2016-2018', text: t('metroWebCoFounder') },
    { year: 'Avant 2016', text: 'Carrière commerciale\nAscendeur Script Kiddo' }
  ];

  return (
    <div className="about-container">
      <div className="timeline-container">
        <div className="timeline-photo">
          <img src={aboutImage} alt="Avatar" />
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-events">
          {events.map((event, index) => (
            <div className="timeline-event" key={index}>
              <div className="timeline-date">{event.year}</div>
              <div className="timeline-text">
                {event.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-content-dev">
        <div className="about-content">
          <h3>{t('developerTitle')}</h3>
          <p>{t('aboutMeText')}</p>
          <h4>{t('howIWork')}</h4>
          <p>{t('howIWorkDesc')}</p>
          <h4>{t('preferredStacks')}</h4>
          <p>{t('stacksDesc')}</p>
          <h4>{t('aiTitle')}</h4>
          <p>{t('aiDesc')}</p>
        </div>
        <div className="about-CV">
          <h4>{t('wantToKnowMore')}</h4>
          <a href={`${process.env.PUBLIC_URL}/CV CPI.pdf`} download="CV CPI.pdf" className="download-button">
            <button>{t('downloadCV')}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
