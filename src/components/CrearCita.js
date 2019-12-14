import React, { Component } from 'react';
import uuid from 'uuid';

class CrearCita extends Component {
  state = {
    cita: {
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    },
    error: false
  }

  handleSubmit = e => {
    e.preventDefault();
    // Extraer valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    // Validar que todos los campos estén llenos
    if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
      this.setState({
        error: true
      });
      //detener ejecucion
      return;
    }
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    // Agregar cita al state de App
    this.props.crearNuevaCita(nuevaCita)
  }

  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    })
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="card card-form mt-5 p-4">
          <h2 className="text-center text-secondary">Rellenar formulario para crear nueva cita</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Nombre Mascota</label>
              <input
                type="text"
                name="mascota"
                className="form-control"
                placeholder="Nombre de la Mascota"
                value={this.state.cita.mascota}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nombre Dueño</label>
              <input
                type="text"
                name="propietario"
                className="form-control"
                placeholder="Nombre del Propietario"
                value={this.state.cita.propietario}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="form-group col-6">
                <label>Fecha</label>
                <input
                  type="date"
                  name="fecha"
                  className="form-control"
                  value={this.state.cita.fecha}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <label>Hora</label>
                <input
                  type="time"
                  name="hora"
                  className="form-control"
                  value={this.state.cita.hora}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Síntomas</label>
              <textarea
                className="form-control"
                name="sintomas"
                rows='4'
                placeholder="Descripción de síntomas"
                value={this.state.cita.sintomas}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" className="py-2 mt-2 btn btn-success btn-block" value="Crear Cita" />
          </form>
        </div>
      </div>
    );
  }
}

export default CrearCita;