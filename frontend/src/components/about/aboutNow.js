import React, { useEffect, useRef } from 'react';
import '../../styles/_aboutNow.scss';
import SkillBoxes from '../../components/skills/skillBoxes';
import { useTranslation } from 'react-i18next';

const AboutNow = () => {
  const { t } = useTranslation();
  const titlesRef = useRef([]);

  useEffect(() => {
    let current = 0;

    const showNextTitle = () => {
      const el = titlesRef.current[current];
      if (!el) return;

      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            el.classList.add('visible');
            observer.disconnect();
            current++;
            if (current < titlesRef.current.length) {
              setTimeout(showNextTitle, 800);
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
    };

    showNextTitle();
  }, []);

  return (
    <section className="hero-intro">
      
      <div className="hero-top">
        <h1 className="intro-title" ref={el => (titlesRef.current[1] = el)}>
          {t('heroTitle2')}
        </h1>
        <h1 className="intro-title outline" ref={el => (titlesRef.current[0] = el)}>
          {t('heroTitle1')}
        </h1>
        
        <SkillBoxes />
        <p className="section-title">{t('aboutMeTitle')}</p>
      <p className="about-text">{t('aboutMeText')}</p>

      <p className="section-title">{t('aboutYouTitle')}</p>
      <p className="about-text">{t('aboutYouText')}</p>
      <p className="about-text">{t('goNext')}</p>
      </div>
    </section>
  );
};

export default AboutNow;
