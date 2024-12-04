import React, { useState, useEffect } from 'react';
import ProjetCard from './projetCard';
import projetsData from './projet.json'; // Import direct du JSON

const Projets = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    // Simuler un chargement asynchrone (facultatif, pour suivre la logique existante)
    const fetchProjets = async () => {
      setProjets(projetsData);
    };

    fetchProjets();
  }, []);

  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="projets-list">
        {projets.length > 0 ? (
          projets.map((projet) => (
            <ProjetCard
              key={projet._id.$oid || projet._id} // Utiliser $oid si présent
              projet={projet} // Passer l'objet projet complet
            />
          ))
        ) : (
          <p>Aucun projet disponible pour le moment.</p>
        )}
      </div>
    </section>
  );
};

export default Projets;
