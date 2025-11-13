import React from 'react';
<img src="/images/Zyre.png" className="..." alt="Logo" />

function Inicio() {
  return(
        <div className='container mt-5'>
            <h2 className="mb-4 text-center">
                Bienvenido a Zyre!
            </h2>
            <p>Somos una startup de comida rapida a domicilio. Fundada por </p>
            <img src="/images/Zyre.png" alt="Logo 1" className="img-fluid w-100 mb-5" style={{objectFit: 'cover', maxHeight: '500px',
                maxWidth: '1920px'}}/>
        </div>
    );
}

export default Inicio;