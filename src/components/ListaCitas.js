import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, borrarCita }) => (
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
            borrarCita={borrarCita}
          />
        ))}
      </div>
    </div>
  </div>
);

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;