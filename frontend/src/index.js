import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal'; // Import de react-modal
import './index.css';
import App from './App';
import './i18n';

// Définit l'élément racine pour react-modal
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
