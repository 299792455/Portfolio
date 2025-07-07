import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../../styles/PortfolioSlider.css';

const slides = [
  {
    image: "https://i.postimg.cc/qRxQ15SW/Extension-deal-Scout-OS.png",
    title: "DealScout",
    link: "#",
    description: "Extension d'extraction des offres commerciales Youtube.",
    objectif: "Scanner la page, identifiez les patterns de vente, extraire les offres, affichage des infos pertinentes.",
    stack: ["JavaScript", "Chrome API", "Regex", "AI lite"],
  },
  {
    image: "https://i.postimg.cc/yYdnTnPr/Online-Dreams-Makers-Agency.png",
    title: "Agence OnlineDreamsMakers",
    link: "https://www.onlinedreamsmakers.es/",
    description: "Création d'une vitrine moderne pour une agence de communication en ligne.",
    objectif: "Présenter Entreprise & Services, transmettre un branding pro & exclusif, formulaire de contact",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "VPS + Docker"],
  },
  {
    image: "https://i.postimg.cc/63cLrGGX/DJ-Sergio-Telmo.png",
    title: "DJ Sergio Telmo",
    link: "https://djsergiotelmo.com/",
    description: "Site vitrine/Portfolio pour un jeune DJ galicien prometteur.",
    objectif: "Version Mobile optimisée, style visuel impactant, agenda, player audio, formulaire de contact.",
    stack: ["Next.js", "Tailwind CSS", "Swiper.js", "Framer Motion"],
  },
  {
    image: "https://i.postimg.cc/BQk5B3tX/Application-Equi-X.png",
    title: "Application EquiX (En Développement)",
    link: "#",
    description: "Plateforme de gestion pour centres équestres.",
    objectif: "Calendrier, réservations, gestion users/Admin/Chevaux, statistiques, notifications, etc.",
    stack: ["React", "Next.js", "MongoDB", "Big Calendar"],
  },
];

function PortfolioSlider() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="portfolio-slider">
      <div className="slider-header">
       
        <h2>Réalisations</h2>
        <p>Découvrez mes derniers cas clients et les solutions développées pour eux</p>
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
        <h3>{slides[index].title}</h3>
        <a href={slides[index].link} target="_blank" rel="noopener noreferrer">
          View Case
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

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            <h3>{slides[index].title}</h3>
            <p>{slides[index].description}</p>
            <strong>Objectif :</strong>
            <p>{slides[index].objectif}</p>
            <strong>Stack utilisée :</strong>
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