// src/pages/TorneoInscripcionFlujo.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/pages/TorneoInscripcionFlujo.css'
const provinciasRD = [
  "Azua",
  "Bahoruco",
  "Barahona",
  "Dajabón",
  "Distrito Nacional",
  "Duarte",
  "El Seibo",
  "Elías Piña",
  "Espaillat",
  "Hato Mayor",
  "Hermanas Mirabal",
  "Independencia",
  "La Altagracia",
  "La Romana",
  "La Vega",
  "María Trinidad Sánchez",
  "Monseñor Nouel",
  "Monte Cristi",
  "Monte Plata",
  "Pedernales",
  "Peravia",
  "Puerto Plata",
  "Samaná",
  "San Cristóbal",
  "San José de Ocoa",
  "San Juan",
  "San Pedro de Macorís",
  "Sánchez Ramírez",
  "Santiago",
  "Santiago Rodríguez",
  "Santo Domingo",
  "Valverde"
];

const municipiosRD = [
  "Azua", "Las Charcas", "Las Yayas de Viajama", "Padre Las Casas", "Peralta", "Pueblo Viejo", "Sabana Yegua", "Tábara Arriba", "Estebanía", "Guayabal",
  "Neiba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua",
  "Barahona", "Cabral", "El Peñón", "Enriquillo", "Fundación", "Jaquimeyes", "La Ciénaga", "Las Salinas", "Paraíso", "Polo", "Vicente Noble",
  "Dajabón", "El Pino", "Loma de Cabrera", "Partido", "Restauración",
  "Distrito Nacional",
  "San Francisco de Macorís", "Arenoso", "Castillo", "Eugenio María de Hostos", "Las Guáranas", "Pimentel", "Villa Riva",
  "El Seibo", "Miches",
  "Comendador", "Bánica", "El Llano", "Hondo Valle", "Juan Santiago", "Pedro Santana",
  "Moca", "Cayetano Germosén", "Gaspar Hernández", "Jamao al Norte",
  "Hato Mayor del Rey", "El Valle", "Sabana de la Mar",
  "Salcedo", "Tenares", "Villa Tapia",
  "Jimaní", "Cristóbal", "Duvergé", "La Descubierta", "Mella", "Postrer Río",
  "Higüey", "San Rafael del Yuma",
  "La Romana", "Guaymate", "Villa Hermosa",
  "La Vega", "Constanza", "Jarabacoa", "Jima Abajo",
  "Nagua", "Cabrera", "El Factor", "Río San Juan",
  "Bonao", "Maimón", "Piedra Blanca",
  "Monte Cristi", "Castañuelas", "Guayubín", "Las Matas de Santa Cruz", "Pepillo Salcedo", "Villa Vásquez",
  "Monte Plata", "Bayaguana", "Peralvillo", "Sabana Grande de Boyá", "Yamasá",
  "Pedernales",
  "Baní", "Matanzas", "Nizao",
  "Puerto Plata", "Altamira", "Guananico", "Imbert", "Los Hidalgos", "Luperón", "Sosúa", "Villa Isabela", "Villa Montellano",
  "Samaná", "Las Terrenas", "Sánchez",
  "San Cristóbal", "Bajos de Haina", "Cambita Garabitos", "Los Cacaos", "Sabana Grande de Palenque", "San Gregorio de Nigua", "Villa Altagracia", "Yaguate",
  "San José de Ocoa", "Rancho Arriba", "Sabana Larga",
  "San Juan de la Maguana", "Bohechío", "El Cercado", "Juan de Herrera", "Las Matas de Farfán", "Vallejuelo",
  "San Pedro de Macorís", "Consuelo", "Guayacanes", "Quisqueya", "Ramón Santana", "San José de los Llanos",
  "Cotuí", "Cevicos", "Fantino", "La Mata",
  "Santiago", "Bisonó (Navarrete)", "Jánico", "Licey al Medio", "Puñal", "Sabana Iglesia", "San José de las Matas", "Tamboril", "Villa Bisonó", "Villa González",
  "San Ignacio de Sabaneta", "Los Almácigos", "Monción",
  "Santo Domingo Este", "Santo Domingo Oeste", "Santo Domingo Norte", "Boca Chica", "Los Alcarrizos", "Pedro Brand", "San Antonio de Guerra",
  "Mao", "Esperanza", "Laguna Salada"
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
      const response = await fetch("https://torneoapi1.azurewebsites.net/api/inscripciones", {
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
                  {provinciasRD.map((prov, index) => (
                    <option key={index} value={prov}>{prov}</option>
                  ))}
                </select>
              </div>
              <div className="m-3 col-md-12">
                <select className="form-select" name="municipio" value={formData.municipio} onChange={handleChange} required>
                  <option value="">Selecciona un municipio</option>
                  {municipiosRD.map((mun, index) => (
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
