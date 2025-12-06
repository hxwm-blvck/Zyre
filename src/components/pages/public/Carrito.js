import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../../context/CarritoC';

const Carrito = () => {
  const { carrito, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu Carro</h2>

      {carrito.length === 0 ? (
        <div className="alert alert-info">
          No tienes productos. <Link to="/menu">Comprar</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <table className="table table-bordered bg-white align-middle">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th> 
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, index) => (
                  <tr key={index}>
                    <td>
                        <span className="fw-bold">{item.nombre}</span>
                    </td>
                    <td>${item.precio}</td>
                    <td>{item.cantidad}</td> 
                    <td>${item.precio * item.cantidad}</td>
                    <td>
                        
                        <button  className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(item.id)} title="Eliminar producto">
                          <p>Eliminar</p>

                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <button className="btn btn-outline-danger btn-sm" onClick={vaciarCarrito}>
              Vaciar tu carrito
            </button>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">Resumen</div>
              <div className="card-body">
                <h5 className="card-title text-center">Total a Pagar</h5>
                <h2 className="text-center">${totalCompra}</h2>
                <hr />
                <Link to="/checkout" className="btn btn-primary w-100 btn-lg">
                  Pagar
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