import React, { Component } from 'react';
import Header from "./components/Header";
import CrearCita from './components/CrearCita';

class App extends Component {
  state = {
    title: 'Citas Médicas'
  }
  render() {
    return (
      <div className="container">
        <Header
          title={this.state.title.toUpperCase()}
        />
        <CrearCita />
      </div>
    );
  }
}

export default App;
