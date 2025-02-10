// src/components/Noticias.jsx
import React from 'react';
import './Noticias.css'; // Importamos el archivo de estilos

const noticias = [
  { id: 1, titulo: "Apoyoa la los Artezanos con Discapacidad", descripcion: "Entregamos un certificado como simbolo de nuestro compromiso a seguir trabajando por una sociedad mas justa y llena de posibilidades para todos.", imagen: "/public/noticia1.jpeg" }
];

const Noticias = () => {
  return (
    <section className="noticias">
      <h2>Últimas Noticias</h2>
      <div className="noticias-container">
        {noticias.map(noticia => (
          <div key={noticia.id} className="noticia">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Noticias;