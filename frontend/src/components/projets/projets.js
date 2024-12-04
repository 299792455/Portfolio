import React, { useEffect, useState } from 'react';
import ProjetCard from './projetCard';
import apiService from '../../services/apiService';

const Projets = () => {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await apiService.get('/projets');
        setProjets(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des projets.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjets();
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="projets-list">
        {projets.length > 0 ? (
          projets.map((projet) => (
            <ProjetCard
              key={projet._id}
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
