import React, { useState } from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import { registrarUsuario } from '../../data/database';
import { useNavigate } from 'react-router-dom'; // hook

function RegistrationForm() {
  const navigate = useNavigate(); // iniciamos el hook
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (formData.password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    
    const usuarioBackend = {
        nombre: formData.name, 
        email: formData.email,
        password: formData.password,
        rol: "cliente" //rol defecto
    };

    // Llamada al Backend
    const respuesta = await registrarUsuario(usuarioBackend);
    
    if (respuesta) {
      alert("¡Registrado");
      navigate('/login'); 
    } else {
      alert("Error al registrarte");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
      <FormGroup
        label="Nombre completo"
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormGroup
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormGroup
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Mínimo 8 caracteres"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <FormGroup
        label="Confirmar contraseña"
        type="password"
        name="confirmPassword"
        placeholder="Repite tu contraseña"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button text="Registrarse" variant="primary" type="submit" />
    </form>
  );
}

export default RegistrationForm;