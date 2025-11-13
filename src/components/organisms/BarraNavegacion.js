import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          Zyre
        </Link>

        {/* BOTÓN DE MENÚ PARA CELULARES (Hamburguesa) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hamburguesas">Hamburguesas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postres">Postres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
            
            {/* BOTÓN DEL CARRITO (Con estilo de botón) */}
            <li className="nav-item ms-2">
              <Link className="btn btn-success" to="/carrito">
                🛒 Carrito ($0)
              </Link>
            </li>
             
             {/* BOTONES DE SESIÓN */}
            <li className="nav-item ms-2">
              <Link className="btn btn-outline-primary" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;