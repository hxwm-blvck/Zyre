import React, { useState, useEffect } from 'react';
import { obtenerProductos, crearProducto, eliminarProducto } from '../../../data/database';

const ProductAdmin = () => {
  const [productos, setProductos] = useState([]);
  
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    categoria: 'hamburguesas',
    descripcion: ''
  });

  const cargarDatos = () => {
    const data = obtenerProductos();
    setProductos(data);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
  
    const nuevo = {
      nombre: form.nombre,
      precio: Number(form.precio),
      categoria: form.categoria,
      descripcion: form.descripcion,
      imagen: "https://via.placeholder.com/300" 
    };

    crearProducto(nuevo);
    cargarDatos(); 
    alert("Producto creado con éxito");
    
    setForm({ nombre: '', precio: '', categoria: 'hamburguesas', descripcion: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      eliminarProducto(id);
      cargarDatos();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Panel de admin</h2>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-4">
            <h4>Agregar Producto</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label>Nombre:</label>
                <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label>Precio:</label>
                <input type="number" name="precio" className="form-control" value={form.precio} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label>Categoría:</label>
                <select name="categoria" className="form-control" value={form.categoria} onChange={handleChange}>
                  <option value="hamburguesas">Hamburguesas</option>
                  <option value="postres">Postres</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Descripción:</label>
                <textarea name="descripcion" className="form-control" value={form.descripcion} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Guardar Producto</button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-3">
            <h4>Inventario</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.nombre}</td>
                    <td>${prod.precio}</td>
                    <td>{prod.categoria}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(prod.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;