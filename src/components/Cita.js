import React from 'react';

const Cita = ({ cita }) => {
  return (
    <div className="col-4 card-cita">
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
    </div>
  );
}

export default Cita;
