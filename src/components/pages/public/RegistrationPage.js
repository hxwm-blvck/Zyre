import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../organisms/RegistrationForm'; 

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleRegistro = (datosUsuario) => {
    localStorage.setItem('usuario_zyre', JSON.stringify(datosUsuario));
    alert(`${datosUsuario.name} Cuenta creada.`);
    window.location.href = "/";
  };


  return (
    <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        <h2 className="text-center mb-4 text-primary">Crea tu cuenta</h2>
                        <RegistrationForm onRegister={handleRegistro} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegistrationPage;