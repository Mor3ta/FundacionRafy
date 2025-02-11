// src/pages/TorneoInscripcionFlujo.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/pages/TorneoInscripcionFlujo.css'
const provincias = [
  "Distrito Nacional", "Santo Domingo Este", "Santo Domingo Norte", "Santo Domingo Oeste",
  "Boca Chica", "Pedro Brand", "San Antonio de Guerra", "Los Alcarrizos"
];

const TorneoInscripcionFlujo = () => {
  const [paso, setPaso] = useState(1);
  const [confirmacion, setConfirmacion] = useState(false);
  const [formData, setFormData] = useState({
    disciplina: '',
    manager: '',
    telefono: '',
    email: '',
    equipo: '',
    provincia: '',
    municipio: ''
  });

  const handleConfirmacion = (e) => {
    setConfirmacion(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/inscripciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Inscripción enviada con éxito");
        setFormData({
          disciplina: "",
          manager: "",
          telefono: "",
          email: "",
          equipo: "",
          provincia: "",
          municipio: ""
        });
      } else {
        alert("Error al enviar la inscripción");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error en la conexión con el servidor");
    }
  };
  

  return (
<div className='torneo-inscripcion-page'>
 <div className="container mt-5 test">
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
         
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="confirmacion" checked={confirmacion} onChange={handleConfirmacion} />
            <label className="form-check-label" htmlFor="confirmacion">Confirmo que he leído las reglas y tengo 20 jugadores en mi equipo.</label>
          </div>
          <button onClick={() => confirmacion && setPaso(2)} disabled={!confirmacion} className=" torneo-reglas-btnContinuar">Continuar</button>
        </div>
      )}

      {paso === 2 && (
        <div className="card shadow p-4 ">
          <h2 className="text-center"> Torneo Deportivo  "Desafio de Gigantes"</h2>
          <span className='text-center torneo-reglas-subtitulo'>Formulario de Inscripcion </span>
          <form className='form-inscripcion-container' onSubmit={handleSubmit}>
          <div className="m-3 col-12">
             
              <select  className="form-select" name="disciplina" value={formData.disciplina} onChange={handleChange} required>
                <option value="">Selecciona una disciplina</option>
                <option value="Atletismo">Atletismo</option>
                <option value="Aljedrez">Aljedrez</option>
                <option value="Beisbol">Beisbol</option>
                <option value="Baloncesto">Baloncesto</option>
                <option value="Ciclismo">Ciclismo</option>
                <option value="Domino">Domino</option>
                <option value="Voleibol">Voleibol</option>
                <option value="Futbol">Futbol</option>
              </select>
          </div>
            <h4 className='torneo-form-seccionTitulos'> Datos del Manger </h4>
            <div>
              <div className="m-3 col-md-12 ">
                <input placeholder='Nombre Completo' type="text" className="form-control" name="manager" value={formData.manager} onChange={handleChange} required />
              </div>
              <div className="m-3 col-md-12">
                <input type="tel"  placeholder="Telefono" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="m-3 col-md-12" >
              <input type="email" placeholder='Correo Electronico' className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <h4 className='torneo-form-seccionTitulos'> Datos del Equipo </h4>
            <div className="m-3 col-md-12">
              <input type="text" placeholder='Nombre del Equipo' className="form-control" name="equipo" value={formData.equipo} onChange={handleChange} required />
            </div>

            <div >
              <div className="m-3 col-md-12">
                <select className="form-select" name="provincia" value={formData.provincia} onChange={handleChange} required>
                  <option value="">Selecciona una provincia</option>
                  {provincias.map((prov, index) => (
                    <option key={index} value={prov}>{prov}</option>
                  ))}
                </select>
              </div>
              <div className="m-3 col-md-12">
                <select className="form-select" name="municipio" value={formData.municipio} onChange={handleChange} required>
                  <option value="">Selecciona un municipio</option>
                  {provincias.map((mun, index) => (
                    <option key={index} value={mun}>{mun}</option>
                  ))}
                </select>
              </div>
            </div>
           
           <div className='torneo-form-btnEnviar'>
              <button type="submit" className="btn btn-dark w-50">Enviar</button>
           </div>
          </form>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default TorneoInscripcionFlujo;
