import React from 'react';
import '../styles/_footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation() ;
  return (
    <footer>
      <p>© 2025 CPI. {t('allRightsReserved')}</p>
    </footer>
  );
};

export default Footer;
