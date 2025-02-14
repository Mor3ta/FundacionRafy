import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



// Lista de provincias
const provinciasRD = [
  "Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", 
  "El Seibo", "Elías Piña", "Espaillat", "Hato Mayor", "Hermanas Mirabal", 
  "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez",
  "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia",
  "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan",
  "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez",
  "Santo Domingo", "Valverde"
];

const municipiosRD = {
  "Azua": ["Azua", "Estebanía", "Guayabal", "Las Charcas", "Las Yayas de Viajama", "Padre Las Casas", "Peralta", "Pueblo Viejo", "Sabana Yegua", "Tábara Arriba"],
  "Bahoruco": ["Neiba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua"],
  "Barahona": ["Barahona", "Cabral", "El Peñón", "Enriquillo", "Fundación", "Jaquimeyes", "La Ciénaga", "Las Salinas", "Paraíso", "Polo", "Vicente Noble"],
  "Dajabón": ["Dajabón", "El Pino", "Loma de Cabrera", "Partido", "Restauración"],
  "Distrito Nacional": ["Distrito Nacional"],
  "Duarte": ["San Francisco de Macorís", "Arenoso", "Castillo", "Eugenio María de Hostos", "Las Guáranas", "Pimentel", "Villa Riva"],
  "El Seibo": ["El Seibo", "Miches"],
  "Elías Piña": ["Comendador", "Bánica", "El Llano", "Hondo Valle", "Juan Santiago", "Pedro Santana"],
  "Espaillat": ["Moca", "Cayetano Germosén", "Gaspar Hernández", "Jamao al Norte"],
  "Hato Mayor": ["Hato Mayor del Rey", "El Valle", "Sabana de la Mar"],
  "Hermanas Mirabal": ["Salcedo", "Tenares", "Villa Tapia"],
  "Independencia": ["Jimaní", "Cristóbal", "Duvergé", "La Descubierta", "Mella", "Postrer Río"],
  "La Altagracia": ["Higüey", "San Rafael del Yuma"],
  "La Romana": ["La Romana", "Guaymate", "Villa Hermosa"],
  "La Vega": ["La Vega", "Constanza", "Jarabacoa", "Jima Abajo"],
  "María Trinidad Sánchez": ["Nagua", "Cabrera", "El Factor", "Río San Juan"],
  "Monseñor Nouel": ["Bonao", "Maimón", "Piedra Blanca"],
  "Monte Cristi": ["Monte Cristi", "Castañuela", "Guayubín", "Las Matas de Santa Cruz", "Pepillo Salcedo", "Villa Vásquez"],
  "Monte Plata": ["Monte Plata", "Bayaguana", "Peralvillo", "Sabana Grande de Boyá", "Yamasá"],
  "Pedernales": ["Pedernales", "Oviedo"],
  "Peravia": ["Baní", "Nizao", "Matanzas"],
  "Puerto Plata": ["Puerto Plata", "Altamira", "Guananico", "Imbert", "Los Hidalgos", "Luperón", "Sosúa", "Villa Isabela", "Villa Montellano"],
  "Samaná": ["Samaná", "Las Terrenas", "Sánchez"],
  "San Cristóbal": ["San Cristóbal", "Bajos de Haina", "Cambita Garabitos", "Los Cacaos", "Sabana Grande de Palenque", "San Gregorio de Nigua", "Villa Altagracia", "Yaguate"],
  "San José de Ocoa": ["San José de Ocoa", "Sabana Larga", "Rancho Arriba"],
  "San Juan": ["San Juan de la Maguana", "Bohechío", "El Cercado", "Juan de Herrera", "Las Matas de Farfán", "Vallejuelo"],
  "San Pedro de Macorís": ["San Pedro de Macorís", "Consuelo", "Guayacanes", "Quisqueya", "Ramón Santana"],
  "Sánchez Ramírez": ["Cotuí", "Cevicos", "Fantino", "La Mata"],
  "Santiago": ["Santiago", "Bisonó", "Jánico", "Licey al Medio", "Puñal", "Sabana Iglesia", "San José de las Matas", "Tamboril", "Villa Bisonó", "Villa González"],
  "Santiago Rodríguez": ["Santiago Rodríguez", "Monción", "San Ignacio de Sabaneta"],
  "Santo Domingo": ["Santo Domingo Este", "Santo Domingo Norte", "Santo Domingo Oeste", "Boca Chica", "Los Alcarrizos", "Pedro Brand", "San Antonio de Guerra"],
  "Valverde": ["Mao", "Esperanza", "Laguna Salada"]
};


const FormularioComunitario = () => {
  const [formData, setFormData] = useState({
    nombreEquipo: "",
    manager: "",
    telefono: "",
    email: "",
    comunidad: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setModalShow(false);
    if (!modalError) {
      navigate("/"); // Redireccionar a la página principal si no hubo error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Si cambia la provincia, resetear el municipio
    if (name === "provincia") {
      setFormData({ ...formData, provincia: value, municipio: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("https://torneoapi1.azurewebsites.net/api/inscripciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setModalMessage("✅ Inscripción enviada correctamente. ¡Gracias por registrarte!");
        setModalError(false);
        setFormData({
          nombreEquipo: "",
          manager: "",
          telefono: "",
          email: "",
          comunidad: "",
        });
          
      } else {
        setModalMessage("❌ Hubo un problema al enviar la inscripción. Inténtalo de nuevo más tarde.");
        setModalError(true);
      }
    } catch (error) {
      setModalMessage("❌ No pudimos conectar con el servidor. Verifica tu conexión e intenta nuevamente.");
      setModalError(true);
    }
  
    setModalShow(true);
    setLoading(false);
  };
  

  return (
    <div className="card shadow p-4 ">
    <h2 className="text-center"> Torneo Deportivo  "Desafio de Gigantes"</h2>
    <span className='text-center torneo-reglas-subtitulo'>Formulario de Inscripcion Comunitario </span>
    <form className='form-inscripcion-container' onSubmit={handleSubmit}>
    <h4 className='torneo-form-seccionTitulos'> Elige la Disciplina </h4>

    <div className="m-3 col-12 torneo-diciplinas">
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

      <div className="m-3 col-md-12">
          <select className="form-select" name="provincia" value={formData.provincia} onChange={handleChange} required>
            <option value="">Selecciona una provincia</option>
            {provinciasRD.map((prov, index) => (
              <option key={index} value={prov}>{prov}</option>
            ))}
          </select>
        </div>
        <div className="m-3 col-md-12">
          <select className="form-select" name="municipio" value={formData.municipio} onChange={handleChange} required disabled={!formData.provincia}>
            <option value="">Selecciona un municipio</option>
            {municipiosRD[formData.provincia]?.map((mun, index) => (
              <option key={index} value={mun}>{mun}</option>
            ))}
          </select>
        </div>
     
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-50" disabled={loading}>
            {loading ? <span className="spinner-border spinner-border-sm"></span> : "Enviar"}
          </button>
        </div>
    </form>
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Body className={modalError ? "text-danger text-center" : "text-success text-center"}>
          {modalMessage}
          <Button variant="dark" onClick={handleClose}>Cerrar</Button>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default FormularioComunitario;
