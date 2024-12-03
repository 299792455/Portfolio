import React, { useState, useEffect } from 'react';
import '../../styles/_about.scss';
import bgAbout from '../../styles/images/bgAbout.jpeg';

const ProfileCard = () => {
  const titles = [
    'Développeur\nReact/Node',
    'Développeur\nFullStack',
    'Intégrateur\nWeb',
  ];
  const typingSpeed = 150; // Vitesse de frappe en ms
  const deletingSpeed = 75; // Vitesse de suppression en ms
  const delayBetweenTitles = 4000; // Délai avant de passer au prochain titre en ms

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimer;

    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        // Ajouter le prochain caractère
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        // Si le texte complet est affiché, attendre avant de supprimer
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenTitles);
        }
      } else {
        // Supprimer le dernier caractère
        setDisplayedText(fullText.substring(0, displayedText.length - 1));

        // Si tout le texte est supprimé, passer au prochain titre
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      }
    };

    typingTimer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Nettoyer le timeout
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, titles, currentTitleIndex, typingSpeed, deletingSpeed, delayBetweenTitles]);

  // Fonction pour rendre le texte avec des sauts de ligne
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div
      className="profile-card"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      <div className="profile-content">
        <h2>
          {renderTextWithLineBreaks(displayedText)}
          <span className="curseur"></span>
        </h2>
        <p>Christophe, Développeur FullStack React/Node basé à Paris.</p>
        <p>
          Passionné par la création d'applications web originales et performantes.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
