import React, { useState, useEffect } from 'react';

import { API_URL } from '../../../data/database'; 

const VentasAdmin = () => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVentas = async () => {
      try {
        const response = await fetch(`${API_URL}/compras`);
        if (response.ok) {
          const data = await response.json();
          setVentas(data);
        } else {
          console.error("Error al obtener ventas del backend");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarVentas();
  }, []);


  const totalIngresos = ventas.reduce((suma, venta) => suma + venta.total, 0);

  if (loading) {
    return <div className="text-center mt-5"><h5>Cargando reporte</h5></div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-primary mb-4">Panel de Admin</h2>

      {/* TARJETA DE RESUMEN DE DINERO */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <div className="card text-center border-success shadow-sm">
            <div className="card-header bg-success text-white fw-bold">
              Ingresos Totales
            </div>
            <div className="card-body">
              <h3 className="card-title text-success display-6">
                ${totalIngresos.toLocaleString('es-CL')}
              </h3>
              <p className="card-text text-muted">Total.</p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLA DE DETALLE */}
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          Historial de Transacciones
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Fecha</th>
                  <th>Cliente (Email)</th>
                  <th>Detalle Producto</th>
                  <th className="text-end">Monto</th>
                </tr>
              </thead>
              <tbody>
                {ventas.length > 0 ? (
                  ventas.map((venta) => (
                    <tr key={venta.id}>
                      <td>#{venta.id}</td>
                      <td>
                        {venta.fecha ? new Date(venta.fecha).toLocaleString() : 'Reciente'}
                      </td>
                      <td>{venta.usuarioEmail}</td>
                      <td>{venta.detalleCompra}</td>
                      <td className="text-end fw-bold text-success">
                        ${venta.total}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-4">
                      No hay ventas registradas
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasAdmin;