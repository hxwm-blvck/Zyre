import React from 'react';
import { Link } from 'react-router-dom';

const Exito = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-sm border-success">
        <h1 className="text-success display-4">¡Pago Exitoso!</h1>
        <p className="lead mt-3">La orden ha sido un exito.</p>
        <p className="text-muted">Comprobante enviado a tu correo.</p>
        
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
          <Link to="/hamburguesas" className="btn btn-outline-dark ms-2">Seguir Comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default Exito;