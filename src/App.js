import React, { Component } from 'react';
import Header from "./components/Header";
import CrearCita from './components/CrearCita';
import Footer from "./components/Footer";
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    title: 'Citas Médicas Mascotas',
    citas: []
  }
  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];
    this.setState({
      citas
    });
  }
  render() {
    return (
      <div className="container">
        <Header
          title={this.state.title.toUpperCase()}
        />
        <CrearCita
          crearNuevaCita={this.crearNuevaCita}
        />
        <ListaCitas
          citas={this.state.citas}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
