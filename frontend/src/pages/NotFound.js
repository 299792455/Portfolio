import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/_notfound.scss';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>{t('notFound')}</p>
      <Link to="/" className="back-home">{t('backHome')}</Link>
    </div>
  );
};

export default NotFound;
