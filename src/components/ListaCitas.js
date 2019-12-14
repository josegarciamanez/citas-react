import React from 'react';
import Cita from './Cita';

const ListaCitas = ({ citas }) => {
  return (
    <div className="container-fluid mt-3">
      <div className="card mx-auto p-3 text-center">
        <h3 className="text-secondary">
          Lista de Citas
        </h3>
        <div className="lista-citas row">
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCitas;