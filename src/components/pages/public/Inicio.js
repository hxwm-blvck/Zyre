import React from 'react';

function Inicio() {
  return(
        <div className='container mt-5'>
            <h2 className="mb-4 text-center">
                Bienvenido a Zyre
            </h2>
            <img src="/images/Zyre.png" alt="Logo 1" className="img-fluid w-100 mb-5" style={{objectFit: 'cover', maxHeight: '500px',
                maxWidth: '1920px'}}/>

            <ul class="list-group justify-content-start my-4">
                <li class="list-group-item">- 1 ZyreCash por cada 1000 Pesos gastados.</li>
                <li class="list-group-item">- 5% de descuento en el envio a tu domicilio.</li>
                <li class="list-group-item">- Posibilidad de participar en sorteos (TyC).</li>
            </ul>
        </div>
    );
}

export default Inicio;