import React from 'react';
import { Link } from 'react-router-dom';
// dar detalle del pedido?
const Exito = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-sm border-success">
        <h1 className="text-success display-4">Pago realizado</h1>
        <p className="lead mt-3">Pedido realizado con exito.</p>
        
        
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
          <Link to="/menu" className="btn btn-outline-dark ms-2">Seguir Comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default Exito;