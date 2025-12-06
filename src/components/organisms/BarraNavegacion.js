import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoC';

const BarraNavegacion = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario_zyre');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const { cantidadTotal } = useContext(CarritoContext);

  const handleLogout = () => {
    localStorage.removeItem('usuario_zyre');
    setUsuario(null);
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
      <div className="container">
        
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/images/logo.jpg" 
            alt="Logo Zyre" 
            height="50" 
            className="d-inline-block align-text-top me-2" 
          />
          <span className="fw-bold text-primary">Zyre</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/productos">Admin</NavLink>
            </li>
            
            <li className="nav-item ms-3">
              <Link className="btn btn-warning position-relative" to="/carrito">
                Carrito
                {cantidadTotal > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cantidadTotal}
                </span>
                )}
              </Link>
            </li>
             
            {usuario ? (
                <li className="nav-item ms-3 dropdown">
                    <a className="nav-link dropdown-toggle fw-bold text-primary" href="#" role="button" data-bs-toggle="dropdown">
                          {usuario.name}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item text-danger" onClick={handleLogout}>Cerrar Sesion</button></li>
                    </ul>
                </li>
            ) : (
                <li className="nav-item ms-3">
                    <NavLink className="btn btn-primary" to="/registro">
                        Registrarse / Login
                    </NavLink>
                </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;