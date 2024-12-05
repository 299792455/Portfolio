import React from 'react';
import '../../styles/timeline.scss';
import aboutImage from '../../styles/images/aboutImage.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-dev">
      <div className="about-Img">
      <img src={aboutImage} alt="Chris, Dev Web" className="about-image" />
      </div>
      <div className="about-content">
        <h3>Christophe, développeur Web</h3>
        <p>
          Après plusieurs années dans le développement commercial et dans le secteur du luxe,
          j’ai choisi de me consacrer pleinement à ma véritable passion : le développement
          d'applications web. Autodidacte et curieux de nature, j’adore explorer tous les aspects
          de la création numérique, de la conception d’applications aux interfaces innovantes.
        </p>
        <p>
          Ce que je cherche ? Des défis stimulants, des collaborations enrichissantes, et
          surtout, des opportunités de continuer à grandir dans ce domaine passionnant.
        </p>
        <h4>Comment je travaille ?</h4>
        <p>Organisé et méthodique, je privilégie une approche itérative et collaborative. J’aime décomposer les problématiques complexes en solutions simples et efficaces, tout en restant attentif aux détails pour livrer des produits de qualité.</p>
        <h4>Des stacks de prédilection ?</h4>
        <p>Je suis à l’aise avec des stacks modernes comme React pour le front-end et Node.js avec MongoDB pour le back-end (pile MERN). J’apprécie aussi d’explorer des outils comme PHP, Firebase ou TypeScript pour optimiser mes projets.</p>
        <h4>Avec l'IA : Dev is dead ? </h4>
        <p>Loin de remplacer les développeurs, l’IA est un levier pour gagner en productivité et en créativité. En automatisant les tâches répétitives, elle me permet de me concentrer sur les aspects humains et stratégiques du développement.</p>
      </div>
      </div>
      <div className="about-parcours">
      <div className="about-parcours-content">
        <h3>Mon parcours</h3>
        <ul>
          <li>2016: Co-fondateur de MetroWeb SAS</li>
          <li>2023: Reconversion professionnelle en développement web</li>
          <li>2024: Intégration au parcours diplomant d'OpenClassrooms : Développeur Web</li>
          <li>Création de projets MERN</li>
          <li>Obtention du titre RNCP38145 Développeur Informatique</li>
          <li>Début 2025: Lancement de ma carrière en tant que développeur React-Node</li>
        </ul>
        </div>
        <div className="about-CV">
  <h4>Envie d'en savoir plus ?</h4>
  <a href={`${process.env.PUBLIC_URL}/CV CPI.pdf`} download="CV CPI.pdf" className="download-button">
    <button>Télécharger mon CV</button>
  </a>
</div>
      </div>
      </div>
    
  );
};

export default About;
