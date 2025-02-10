import React, { useState } from 'react';
import './Header.css'; // Importamos el archivo de estilos
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
    {/* Botón de menú para móviles */}
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>


      {/* Sección del logo */}
      <div className="logo">
        <img src="./logo.png" alt="Logo de la Fundación Rafy" />
        <h3>FUNDACION RAFY</h3>
      </div>

    

      {/* Sección del menú */}
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
        </ul>
      </nav>

      {/* Botón de inscripción al torneo */}
      <div className="inscripcion">
        <Link to="/inscripcion-torneo" className="inscripcion-button">Inscripción Torneo</Link>
      </div>
    </header>
  );
};

export default Header;