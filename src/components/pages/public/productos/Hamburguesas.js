import React, { useState, useEffect } from 'react';
import Comida from '../../../templates/Comida.js'; 
import TarjetaProducto from '../../../molecules/TarjetaProducto.js';
import { obtenerProductos } from '../../../../data/database.js';

function Hamburguesas() {
  const [listaHamburguesas, setListaHamburguesas] = useState([]);

  useEffect(() => {
    const todos = obtenerProductos(); 
    const soloHamburguesas = todos.filter(p => p.categoria === 'hamburguesas');
    setListaHamburguesas(soloHamburguesas);
  }, []);

  return (
    <Comida title="Menu de Hamburguesas de Vacuno">
      <div className="row">
        {listaHamburguesas.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <TarjetaProducto product={item} />
          </div>
        ))}
      </div>
    </Comida>
);
}

export default Hamburguesas;