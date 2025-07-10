import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/projetCard.scss';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

const ProjetCard = ({ projet }) => {
  const { t } = useTranslation();
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
  <div className="card-inner">
    <div className="card-front">
      {imageUrls && imageUrls.length > 0 && (
        <img src={imageUrls[0]} alt={title} />
      )}
      <p className="project-title">{title}</p>

    </div>
    <div className="card-back">
      <p>{description ? description.slice(0, 80) + '...' : t('noDescription')}</p>
      <p>{technologies ? technologies.join(', ') : ''}</p>
    </div>
  </div>
</div>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={t('projectDetails')}
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <h2>{t('projectDetails')}</h2>
        <p><strong>{t('genesis')} :</strong> {genese}</p>
        <p><strong>{t('problem')} :</strong> {problematique}</p>
        <p><strong>{t('solution')} :</strong> {solution}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {t('seeProject')}
        </a>
      </Modal>
    </>
  );
};

export default ProjetCard;