import React from 'react';

const TarjetaProducto = ({ product, onAdd }) => {
  // Si no hay imagen, ponemos una gris por defecto
  const imgUrl = product.imagen || "https://via.placeholder.com/300";

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
          onClick={() => alert(`Agregaste ${product.nombre} al carrito (Simulado)`)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default TarjetaProducto;