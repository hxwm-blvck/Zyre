import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUsuario } from '../../../data/database'; //funcion deldatabase.js
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const usuarioValido =  await loginUsuario(email, password);
    
    if (usuarioValido){
      localStorage.setItem('usuario_zyre', JSON.stringify(usuarioValido));
      alert("Login exitoso")
      navigate('/');
    window.location.reload();
    } else{
      alert("Correo o contraseña incorrecta");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4 border-0">
            <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2>
            
            <form onSubmit={handleLogin}>

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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