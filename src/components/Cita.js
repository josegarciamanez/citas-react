import React from 'react';

const Cita = ({ cita, borrarCita }) => {
  return (
    <div className="col-4 card-cita text-left p-3 m-3">
      <p><span>Nombre Mascota: </span>
        {cita.mascota}
      </p>
      <p><span>Nombre Propietario: </span>
        {cita.propietario}
      </p>
      <p><span>Fecha: </span>
        {cita.fecha}
      </p>
      <p><span>Hora: </span>
        {cita.hora}
      </p>
      <p><span>Síntomas: </span>
        {cita.sintomas}
      </p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => borrarCita(cita.id)}
      >
        Borrar &times;
      </button>
    </div>
  );
}

export default Cita;
