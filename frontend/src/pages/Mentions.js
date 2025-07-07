import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/_mentions.scss';

const Mentions = () => {
  const { t } = useTranslation();
  console.log('FR:', t('legalEditor'));

  return (
    <div className="mentions-container">
      <h1>{t('legalTitle')}</h1>
      <p>{t('legalEditor')}</p>
      <p>{t('legalHosting')}</p>
      <p>{t('legalResponsibility')}</p>
      <p>{t('legalContact')}</p>
    </div>
  );
};


export default Mentions;

