import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormGroup from '../../molecules/FormGroup';
import Button from '../../atoms/Button';
import { CarritoContext } from '../../../context/CarritoC';

function Checkout() {
  const navigate = useNavigate();

  const { vaciarCarrito } = useContext(CarritoContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '' 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      vaciarCarrito(); 
      navigate('/exito'); 
    }, 1000);
    };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
              <FormGroup
                label="Nombre completo"
                type="text"
                name="name"
                placeholder="Quien recibe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormGroup
                label="Correo electrónico"
                type="email"
                name="email"
                placeholder="boleta"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormGroup
                label="Dirección de Entrega"
                type="text"
                name="address"
                placeholder="Calle"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <FormGroup
                label="Comuna / Ciudad"
                type="text"
                name="city"
                placeholder=""
                value={formData.city}
                onChange={handleChange}
                required
              />
              
              <div className="mt-4">
                <Button text="Pagar" variant="success" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;