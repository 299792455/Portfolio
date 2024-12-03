import React, { useState } from 'react'; 
import '../styles/_header.scss';
import logo from '../styles/images/logo_CPI.webp';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Web Dev" />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        ☰ 
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#about">Présentation</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
