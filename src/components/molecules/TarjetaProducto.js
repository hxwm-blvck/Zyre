import React, {useContext} from 'react';
import { CarritoContext } from '../../context/CarritoC';

const TarjetaProducto = ({ product, onAdd }) => {

  const context = useContext(CarritoContext);

  if (!context) {
    console.error("¡Error! TarjetaProducto está fuera del CarritoProvider.");
    return null; 
  }
  const { agregarAlCarrito } = context;
  const imgUrl = product.imagen || "https://via.placeholder.com/300";

  const handleAgregar = () => {
    agregarAlCarrito(product);
    alert(`¡${product.nombre} agregado al carrito! 🛒`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={imgUrl} 
        className="card-img-top" 
        alt={product.nombre} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text text-muted small">{product.descripcion}</p>
        <h6 className="mt-auto text-primary fw-bold">${product.precio}</h6>
        
        <button 
          className="btn btn-dark mt-3 w-100"
          onClick={handleAgregar}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default TarjetaProducto;