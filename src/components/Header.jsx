import React, { useState } from 'react';
import './Header.css'; // Importamos el archivo de estilos
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Sección del logo */}
      <div className="logo">
        <img src="./logo.png" alt="Logo de la Fundación Rafy" />
        <h3>FUNDACION RAFY BUENO </h3>
      </div>

    </header>
  );
};

export default Header;