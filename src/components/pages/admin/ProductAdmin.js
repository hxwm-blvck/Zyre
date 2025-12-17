import React, { useState, useEffect } from 'react';
import { obtenerProductos, crearProducto, eliminarProducto } from '../../../data/database';

const ProductAdmin = () => {
  const [productos, setProductos] = useState([]);
  
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    categoria: 'hamburguesas',
    descripcion: '',
    imagen: ''
  });

  const cargarDatos = async () => {
    try {
      const data = await obtenerProductos();
      setProductos(data || []);
    } catch (error) {
      console.error("Error cargando productos:", error);
      setProductos([]);
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const nuevo = {
      nombre: form.nombre,
      precio: Number(form.precio),
      categoria: form.categoria,
      descripcion: form.descripcion,
      imagen: form.imagen || "https://via.placeholder.com/300" 
    };

    await crearProducto(nuevo); // Guardo en el backend
    await cargarDatos();        // recargo la lista
    alert("Producto creado");
    
    setForm({ nombre: '', precio: '', categoria: 'hamburguesas', descripcion: '', imagen: '' }); // limpio el formulario
  };

  const handleDelete = async (id) => {
    if (window.confirm("Eliminar producto")) {
      await eliminarProducto(id);
      await cargarDatos();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Panel de admin</h2>
      
      <div className="row">
        
        <div className="col-md-4">
          <div className="card p-3 mb-4 shadow-sm">
            <h4 className="mb-3">Agregar Producto</h4>
            <form onSubmit={handleSubmit}>
              
              <div className="mb-2">
                <label className="form-label">Nombre:</label>
                <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
              </div>
              
              <div className="mb-2">
                <label className="form-label">Precio:</label>
                <input type="number" name="precio" className="form-control" value={form.precio} onChange={handleChange} required />
              </div>
              
              <div className="mb-2">
                <label className="form-label">Categoría:</label>
                <select name="categoria" className="form-control" value={form.categoria} onChange={handleChange}>
                  <option value="hamburguesas">Hamburguesas Vacuno</option>
                  <option value="hamburguesasP">Hamburguesas Pollo</option>
                  <option value="postres">Postres</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">URL Imagen:</label>
                <input 
                    type="text" 
                    name="imagen" 
                    className="form-control" 
                    placeholder="url de la imagen" 
                    value={form.imagen} 
                    onChange={handleChange} 
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Descripción:</label>
                <textarea name="descripcion" className="form-control" value={form.descripcion} onChange={handleChange} rows="2"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Guardar Producto</button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-3 shadow-sm">
            <h4 className="text-center">Productos actuales</h4>
            {productos.length === 0 ? (
                <div className="alert alert-info">No hay productos</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped align-middle">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos?.map((prod) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;