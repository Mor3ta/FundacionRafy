// src/components/Banner.jsx
import React from 'react';
import './Banner.css'; // Importamos el archivo de estilos
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Desafío de Gigantes</h1>
        <p>Inscríbete en el torneo y demuestra tu grandeza.</p>
        <div>
          <Link to="/inscripcion-torneo" className="inscripcion-button">INSCRIBETE</Link>
        </div>
       
      </div>
    </section>
  );
};

export default Banner;