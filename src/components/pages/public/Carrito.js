import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cargar productos del carrito guardado
    const carritoGuardado = JSON.parse(localStorage.getItem('mi_carrito')) || [];
    setItems(carritoGuardado);
  }, []);

  // Función para vaciar
  const vaciarCarrito = () => {
    localStorage.removeItem('mi_carrito');
    setItems([]);
    window.location.reload();
  };

  // Calcular Total
  const total = items.reduce((suma, item) => suma + Number(item.precio), 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu Carrito 🛒</h2>

      {items.length === 0 ? (
        <div className="alert alert-info">
          El carrito está vacío. <Link to="/hamburguesas">¡Ve a comprar!</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <table className="table table-bordered bg-white">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>${item.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-outline-danger btn-sm" onClick={vaciarCarrito}>
              Vaciar Carrito 🗑️
            </button>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-success text-white">Total a Pagar</div>
              <div className="card-body">
                <h3 className="text-center">${total}</h3>
                <hr />
                {/* Botón que lleva al Checkout que te pasé antes */}
                <Link to="/checkout" className="btn btn-primary w-100">
                  Ir a Pagar 💳
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;