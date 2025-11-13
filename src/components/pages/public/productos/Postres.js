import React, { useState, useEffect } from 'react';
import Comida from '../../../templates/Comida.js'; 
import TarjetaProducto from '../../../molecules/TarjetaProducto.js';
import { obtenerProductos } from '../../../../data/database.js';

function Postres() {
  const [listaPostres, setListaPostres] = useState([]);

  useEffect(() => {
    const todos = obtenerProductos();
    const soloPostres = todos.filter(p => p.categoria === 'postres');
    setListaPostres(soloPostres);
  }, []);

  return (
    <Comida title="Postres">
      <div className="row">
        {listaPostres.length > 0 ? (
          listaPostres.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <TarjetaProducto product={item} />
            </div>
          ))
        ) : (
          <div className="alert alert-warning">
            No hay postres
          </div>
        )}
      </div>
    </Comida>
  );
}

export default Postres;