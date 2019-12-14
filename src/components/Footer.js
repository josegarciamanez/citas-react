import React, { Component } from 'react';

class Footer extends Component {

  render() {
    const fecha = new Date();
    const year = fecha.getFullYear();

    return (
      <div className="footer bg-dark text-white p-2">
        <p className="m-auto text-center">@josegarciamanez &copy; {year}</p>
      </div>
    );
  }
}

export default Footer;