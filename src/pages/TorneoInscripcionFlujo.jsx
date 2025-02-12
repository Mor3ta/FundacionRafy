// src/pages/TorneoInscripcionFlujo.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/pages/TorneoInscripcionFlujo.css'
import Footer from '../components/Footer';
import FormularioComunitario from '../components/FormularioComunitario';
import FormularioEscolar from '../components/FormularioEscolar';



const TorneoInscripcionFlujo = () => {
  const [paso, setPaso] = useState(1);
  const [confirmacion, setConfirmacion] = useState(false);
  const [tipoEquipo, setTipoEquipo] = useState('');

  const handleConfirmacion = (e) => {
    setConfirmacion(e.target.checked);
  };

  const handleTipoEquipoChange = (e) => {
    setTipoEquipo(e.target.value);
  };

  return (
   
    <div className='torneo-inscripcion-page'>
    <div className="container" style={{ fontFamily: 'Poppins, sans-serif', minHeight: '80vh', marginTop:'30px', width:'80%' }}>
        {paso === 1 && (
        
        <div className="card shadow p-4  torneo-reglas-container">
          <h2 className="text-center torneo-reglas-titulo">Torneo "Desafio de Gigantes"</h2>
          <span className="text-center torneo-reglas-subtitulo" >Reglas del Torneo</span>
          <div className='torneo-reglas-container'>

              <p> 1.La inscripción es gratuita.</p>
              <p> 2.Cada equipo debe tener 20 jugadores.</p>
              <p> 3.El mánager inscribe y representa al equipo.</p>
              <p> 4.Cada miembro del equipo debe vender 50 boletas para aportar 50,000 pesos al equipo 
                y así cubrir los gastos de los uniformes oficiales de las olimpiadas.
                El resto del dinero debe depositarse en la cuenta de la Fundación para cubrir los gastos de premios y 
                montaje del evento a nivel nacional. Estas boletas servirán como entradas a los eventos deportivos.</p>
              <p> 5.El evento deportivo con los equipos escolares iniciará el tercer sábado de abril 
                y terminará el último domingo de mayo.</p>
              <p> 6.Se debe realizar una eliminatoria por distrito educativo. 
                Luego, competirán los distritos más cercanos hasta elegir un campeón nacional.</p>
              <p> 7. Se premiará a un campeón por distrito y, posteriormente, al campeón nacional.</p>
              <p> 8. Los equipos que avancen podrán reforzarse con jugadores eliminados, siempre que pertenezcan al mismo distrito educativo.</p>
              <p> 9. La primera eliminatoria de los equipos de cada distrito será por muerte súbita, 
                y la final entre los dos equipos restantes será al mejor de cinco partidos (3-2). 
                Lo mismo aplicará en la segunda ronda con los representantes de cada distrito.</p>
              <p> 10. Los equipos campeones de cada distrito recibirán un trofeo y 50,000 pesos, 
                mientras que los subcampeones recibirán un trofeo y 25,000 pesos.</p>
              <p>El campeón nacional recibirá un trofeo y un millón de pesos,
                 mientras que el subcampeón nacional recibirá un trofeo y medio millón de pesos.</p>
          </div>

            <div className="form-check-confirmacion">
              <input type="checkbox" className="form-check-input" id="confirmacion" checked={confirmacion} onChange={handleConfirmacion} />
              <label className="form-check-label" htmlFor="confirmacion">Confirmo que he leído las reglas y tengo 20 jugadores en mi equipo.</label>
            </div>
            <button onClick={() => confirmacion && setPaso(2)} disabled={!confirmacion} className="btn btn-dark mt-3 w-50">Continuar</button>
          </div>
        )}

        {paso === 2 && (
          <div className="card shadow  container-tipoEquipo">
           

            <div className="form-check ">
              <input className="form-check-input" type="radio" name="tipoEquipo" value="comunitario" id="comunitario" onChange={handleTipoEquipoChange} />
              <label className="form-check-label" htmlFor="comunitario">Equipo Comunitario</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="tipoEquipo" value="escolar" id="escolar" onChange={handleTipoEquipoChange} />
              <label className="form-check-label" htmlFor="escolar">Equipo Escolar</label>
            </div>
          </div>
        )}

        {tipoEquipo === "comunitario" && <FormularioComunitario />}
        {tipoEquipo === "escolar" && <FormularioEscolar />}
      </div>

   
      </div>  

  );


};

export default TorneoInscripcionFlujo;
