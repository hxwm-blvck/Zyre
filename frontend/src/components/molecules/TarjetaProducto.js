import React, {useContext} from 'react';
import { CarritoContext } from '../../context/CarritoC';

const TarjetaProducto = ({ product, onAdd }) => {

  const context = useContext(CarritoContext);

  if (!context) {
    console.error("Error");
    return null; 
  }
  const { agregarAlCarrito } = context;
  const manejoErrorI = (e) => {
    e.target.src = "https://via.placeholder.com/300";
  };

  const handleAgregar = () => {
    agregarAlCarrito(product);
    alert(`¡${product.nombre} agregado al carro`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={product.imagen} 
        className="card-img-top" 
        alt={product.nombre} 
        style={{ height: '200px', objectFit: 'cover' }}
        onError={manejoErrorI}
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