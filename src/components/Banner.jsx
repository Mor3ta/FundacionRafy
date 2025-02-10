// src/components/Banner.jsx
import React from 'react';
import './Banner.css'; // Importamos el archivo de estilos

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Desafío de Gigantes</h1>
        <p>Inscríbete en el torneo y demuestra tu grandeza.</p>
        <button className="cta-button">Inscribirse</button>
      </div>
    </section>
  );
};

export default Banner;