import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../../styles/PortfolioSlider.scss';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    image: "https://i.postimg.cc/mDMPPvsY/Capture-d-cran-2025-07-10-180908.png",
    titleKey: "sliderTitles.project1",
    link: "https://dealscout.deals/",
    descriptionKey: "project1_description",
    objectifKey: "project1_objective",
    stack: ["JavaScript", "Chrome API", "Regex", "AI lite"],
  },
  {
    image: "https://i.postimg.cc/yYdnTnPr/Online-Dreams-Makers-Agency.png",
    titleKey: "sliderTitles.project2",
    link: "https://www.onlinedreamsmakers.es/",
    descriptionKey: "project2_description",
    objectifKey: "project2_objective",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "VPS + Docker"],
  },
  {
    image: "https://i.postimg.cc/63cLrGGX/DJ-Sergio-Telmo.png",
    titleKey: "sliderTitles.project3",
    link: "https://djsergiotelmo.com/",
    descriptionKey: "project3_description",
    objectifKey: "project3_objective",
    stack: ["Next.js", "Tailwind CSS", "Swiper.js", "Framer Motion"],
  },
  {
    image: "https://i.postimg.cc/BQk5B3tX/Application-Equi-X.png",
    titleKey: "sliderTitles.project4",
    link: "#",
    descriptionKey: "project4_description",
    objectifKey: "project4_objective",
    stack: ["React", "Next.js", "MongoDB", "Big Calendar"],
  },
];

function PortfolioSlider() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="portfolio-slider">
      <div className="wrapper">
        <div className="slider-header">
          <h2>{t('portfolioTitle')}</h2>
          <p>{t('portfolioSubtitle')}</p>
        </div>

        <div className="slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="slide"
              style={{ backgroundImage: `url(${slides[index].image})` }}
              onClick={() => setShowModal(true)}
            />
          </AnimatePresence>
        </div>

        <div className="slider-info">
            
            
          <a href={slides[index].link} target="_blank" rel="noopener noreferrer">
            {t('viewCase')}
          </a>
        </div>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`dot ${index === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            <h3>{slides[index].titleKey}</h3>
            <p>{t(slides[index].descriptionKey)}</p>
            <strong>{t('modalObjective')}</strong>
            <p>{t(slides[index].objectifKey)}</p>
            <strong>{t('modalStack')}</strong>
            <div className="stack-list">
              {slides[index].stack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSlider;
