import React, { useState } from "react";

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
  
const FormularioEscolar = () => {
  const [formData, setFormData] = useState({
    nombreEquipo: "",
    manager: "",
    telefono: "",
    email: "",
    CentroEducativo: "",
    DistritoEducativo: "",
    provincia: "",
    municipio: "",
    disciplina: ""

  });
  const [loading, setLoading] = useState(false);

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
      const response = await fetch("https://torneoapi1.azurewebsites.net/api/inscripcion-escolar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inscripción guardada con éxito");
      } else {
        alert("Error al enviar la inscripción");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error en la conexión con el servidor");
    }
    
    setLoading(false);
  };

  return (
    <div className="card shadow p-4">
      <h2 className="text-center">Torneo Deportivo "Desafío de Gigantes"</h2>
      <span className="text-center">Formulario de Inscripción Escolar</span>
      <form onSubmit={handleSubmit}>
        <h4>Datos del Manager</h4>
        <div className="mb-3">
          <input type="text" placeholder="Nombre Completo" className="form-control" name="manager" value={formData.manager} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="tel" placeholder="Teléfono" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" placeholder="Correo Electrónico" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <h4>Datos Escolares</h4>
        <div className="mb-3">
          <input type="text" placeholder="Centro Educativo" className="form-control" name="CentroEducativo" value={formData.CentroEducativo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Distrito Educativo" className="form-control" name="DistritoEducativo" value={formData.DistritoEducativo} onChange={handleChange} required />
        </div>

        <h4>Datos del Equipo</h4>
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
            <option value="Sóftbol">Sóftbol</option>
            </select>
        </div>



        <div className="mb-3">
          <input type="text" placeholder="Nombre del Equipo" className="form-control" name="nombreEquipo" value={formData.nombreEquipo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <select className="form-select" name="provincia" value={formData.provincia} onChange={handleChange} required>
            <option value="">Selecciona una provincia</option>
            {provinciasRD.map((prov, index) => (
              <option key={index} value={prov}>{prov}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
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
    </div>
  );
};

export default FormularioEscolar;
