import React, { useState, useEffect } from 'react';
import Comida from '../../templates/Comida.js'; 
import TarjetaProducto from '../../molecules/TarjetaProducto.js'; // Asegúrate que la ruta esté bien
import { obtenerProductos } from '../../../data/database.js';

function Hamburguesas() {
  const [listaHamburguesas, setListaHamburguesas] = useState([]);

  useEffect(() => {
    // 1. Cargar todos los productos
    const todos = obtenerProductos();
    
    // 2. Filtrar solo las hamburguesas
    const soloHamburguesas = todos.filter(p => p.categoria === 'hamburguesas');
    
    // 3. Guardar en el estado
    setListaHamburguesas(soloHamburguesas);
  }, []);

  return (
    <Comida title="Menú de Hamburguesas">
      <div className="row">
        {listaHamburguesas.length > 0 ? (
          listaHamburguesas.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <TarjetaProducto product={item} />
            </div>
          ))
        ) : (
          <p className="text-center">Cargando productos...</p>
        )}
      </div>
    </Comida>
  );
}

export default Hamburguesas;