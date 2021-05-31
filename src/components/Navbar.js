import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom'



class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <Link className="Navbar__brand" to="/register">
          <p className="mb-0">Registrarse</p>
        </Link>
        <Link className="Navbar__brand" to="/login">
          <p className="mb-0">Iniciar sección</p>

        </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;