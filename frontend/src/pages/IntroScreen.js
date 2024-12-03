import React, { useState, useEffect } from 'react';
import '../styles/IntroScreen.scss';

const lignesTerminal = [
  "[Démarrage du système...]",
  "[Initialisation des modules de gravité quantique...OK!]",
  "[Vérification des fondamentaux musculaires...OK USA!]",
  "[Chargement des pilotes...OK!]",
  "[Vérification de la fréquence BOVIS...FAILURE!]",
  "[Connexion aux serveurs...OK!]",
  "[PNCs aux portes...OK!]",
  "[Démarrage des services...OK!]",
  "[Vérification du système terminée.]",
  "[3x + 1 = izipizi...OK!]",
  "[Chargement du minitel des internets...OK!]",
  "[Initialisation ERROR CIG 30k...OK!]",
  "[Chargement du backend...OK!]",
  "[Stabilisation des electrolytes...FAILURE!]",
  "[Chargement du frontend...OK!]",
  "[IntroScreen limité à 4 Refresh...OK!]",
  "[Lancement de l'application...]",
  "...Success! The Yes needs the No to win against the No.",
];

const IntroScreen = ({ onFinish }) => {
  const [textePrecedent, setTextePrecedent] = useState('');
  const [texteEnCours, setTexteEnCours] = useState('');
  const [indexLigneCourante, setIndexLigneCourante] = useState(0);
  const [indexChar, setIndexChar] = useState(0);

  useEffect(() => {
    let intervalSaisie;

    if (indexLigneCourante < lignesTerminal.length) {
      if (indexLigneCourante === lignesTerminal.length - 1 && indexChar === 0) {
        // Délai de 3 secondes après "[Lancement de l'application...]"
        setTimeout(() => {
          commencerSaisie();
        }, 3000);
      } else {
        commencerSaisie();
      }
    } else {
      // Toutes les lignes sont terminées
      setTimeout(onFinish, 3000);
    }

    function commencerSaisie() {
      const ligneCourante = lignesTerminal[indexLigneCourante];
      intervalSaisie = setInterval(() => {
        setTexteEnCours((prev) => prev + ligneCourante[indexChar]);
        setIndexChar((prev) => prev + 1);

        if (indexChar >= ligneCourante.length - 1) {
          clearInterval(intervalSaisie);
          if (indexLigneCourante < lignesTerminal.length - 1) {
            // Pas la dernière ligne
            setTextePrecedent((prev) => prev + ligneCourante + '\n');
            setTexteEnCours('');
            setIndexChar(0);
            setIndexLigneCourante((prev) => prev + 1);
          } else {
            // Dernière ligne
            setIndexLigneCourante((prev) => prev + 1);
            setIndexChar(0);
          }
        }
      }, 10); // Vitesse de saisie
    }

    return () => clearInterval(intervalSaisie);
  }, [indexChar, indexLigneCourante, onFinish]);

  return (
    <div className="intro-screen">
      {indexLigneCourante < lignesTerminal.length - 1 ? (
        <div className="terminal">
          <pre>{textePrecedent}</pre>
          <pre>
            {texteEnCours}
            <span className="curseur"></span>
          </pre>
        </div>
      ) : (
        <div className="terminal">
          <pre>{textePrecedent}</pre>
          <div className="ligne-centree">
            <pre>
              {texteEnCours}
              <span className="curseur"></span>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroScreen;