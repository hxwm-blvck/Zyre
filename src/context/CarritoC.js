import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito_zyre');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito_zyre', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
   
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      
      const carritoActualizado = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(carritoActualizado);
    } else {
      
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };


  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter(item => item.id !== id);
    setCarrito(carritoActualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

 
  const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);


  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ 
        carrito, 
        agregarAlCarrito, 
        eliminarDelCarrito, 
        vaciarCarrito, 
        totalCompra,
        cantidadTotal
    }}>
      {children}
    </CarritoContext.Provider>
  );
};