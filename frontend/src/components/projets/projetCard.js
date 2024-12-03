import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/projetCard.scss';

Modal.setAppElement('#root'); // Assurez-vous que c'est bien l'ID de votre élément racine

const ProjetCard = ({ projet }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { title, description, technologies, githubLink, imageUrls, genese, problematique, solution } = projet;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="projet-card" onClick={openModal}>
        {imageUrls && imageUrls.length > 0 && (
          <img src={imageUrls[0]} alt={title} className="projet-image" />
        )}
        <p>
          <strong>{title}</strong> 
        </p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détails du projet"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <h2>{title}</h2>
        <p><strong>Genèse :</strong> {genese}</p>
        <p><strong>Problématique :</strong> {problematique}</p>
        <p><strong>Solution :</strong> {solution}</p>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        )}
      </Modal>
    </>
  );
};

export default ProjetCard;
