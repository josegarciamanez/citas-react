import React, { Component } from 'react';
import Header from "./components/Header";
import CrearCita from './components/CrearCita';
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;
