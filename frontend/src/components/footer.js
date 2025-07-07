import React from 'react';
import '../styles/_footer.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        © 2025 CPI. <Link to="/mentions">{t('allRightsReserved')}</Link>
      </p>
    </footer>
  );
};

export default Footer;