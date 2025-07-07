// src/components/projets/projets.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjetCard from './projetCard';
import apiService from '../../services/apiService';
import '../../styles/_projects.scss';
import Focus from '../projets/focus';

const Projets = () => {
  const { t } = useTranslation();
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await apiService.get('/projets');

        const ordre = [
          'EquiX',
          'DealScout',
          'DJ Sergio Telmo',
          'The WorkShop',
          'Mon vieux grimoire',
          'KASA APP',
        ];

        const sortedProjets = [...response.data].sort(
          (a, b) => ordre.indexOf(a.title) - ordre.indexOf(b.title)
        );

        setProjets(sortedProjets);
      } catch (err) {
        setError(t('projectsError'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjets();
  }, []);

  if (loading) {
    return <p>{t('loadingProjects')}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="projects">
      <h2>
  {t('projects')}
</h2>
  
      <div className="projets-list">
        {projets.slice(0, 3).map((projet) => (
          <ProjetCard key={projet._id} projet={projet} />
        ))}
        <div className="projet-card special-card" onClick={() => window.open('https://github.com/ton-github', '_blank')}>
  <div className="card-inner">
    <div className="card-front">
      <p><strong>Voir plus de projets</strong></p>
      <img src="lien-de-une-image-github-ou-autre" alt="Voir plus" />
    </div>
    <div className="card-back">
      <p>Découvrez d'autres projets sur mon GitHub !</p>
    </div>
  </div>
</div>
      </div>
  
      {/* 
      <div className="voir-tous-global">
        <a href="#projects" onClick={() => alert('Rediriger vers tous les projets')}>
          ... voir tous mes projets ici
        </a>
      </div>
      */}
  
      <div className="focus">
        <Focus />
      </div>
    </section>
  );
};

export default Projets;