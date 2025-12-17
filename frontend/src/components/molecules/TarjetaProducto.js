import React from 'react';
import { realizarCompra } from '../../data/database'; 

const TarjetaProducto = ({ product }) => {
  

  const usuario = JSON.parse(localStorage.getItem('usuario_zyre'));

  const manejoErrorI = (e) => {
    e.target.src = "https://via.placeholder.com/300";
  };

  const handleComprar = async () => {
 
    if (!usuario) {
      alert("Debes iniciar sesion");
      return;
    }

 
    const confirmacion = window.confirm(`¿Confirmar compra de ${product.nombre} por $${product.precio}?`);
    
    if (confirmacion) {
   
      const nuevaCompra = {
        usuarioEmail: usuario.email,
        detalleCompra: product.nombre, 
        total: product.precio
      };

  
      const exito = await realizarCompra(nuevaCompra);

      if (exito) {
        alert("Compra exitosa");
      } else {
        alert("Hubo un error.");
      }
    }
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
          className="btn btn-warning mt-3 w-100 fw-bold"
          onClick={handleComprar}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default TarjetaProducto;