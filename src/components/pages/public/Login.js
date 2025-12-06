import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const datosUsuario = { name: nombre, email: email };
    
    localStorage.setItem('usuario_zyre', JSON.stringify(datosUsuario));
    
    alert(`Bienvenido ${datosUsuario.name}`);
    
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4 border-0">
            <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2>
            
            <form onSubmit={handleLogin}>

                <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="ejemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="******" 
                  required 
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Ingresar
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;