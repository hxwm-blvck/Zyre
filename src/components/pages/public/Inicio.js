import React from 'react';

function Inicio() {
  return(
    <>
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
        <footer className='bg-black text-white py-4 mt-5'>
                <div className='container text-center'>
                    <p className="mb-1">Zyre. Todos los derechos reservados.</p>
                    <p className="mb-3">zyresupport@bussines.com</p>
            
                     <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white ">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white text">Instagram</a>
                        </li>
                        <li>
                            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white">X</a>
                        </li>
                     </ul>
                </div>
            </footer>
            </>
    );
}

export default Inicio;