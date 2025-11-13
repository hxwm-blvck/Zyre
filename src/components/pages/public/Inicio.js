import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para el botón

function Inicio() {
  return(
    <>
    <img 
            src="/images/Zyre.png" 
            alt="Banner Zyre" 
            className="img-fluid w-100 shadow-lg"
            style={{objectFit: 'cover', maxHeight: '650px'}}
        />
    <div className='container my-5'>
        
        <div className="text-center mb-3">
            <h1 className="display-3 fw-bold mb-2">
                Bienvenido a Zyre
            </h1>
            <p className="lead text-muted mb-4">
                Sabor de tradición y delivery rápido.
            </p>

            <div>
                <Link to="/menu" className="btn btn-danger btn-lg px-5 py-3 fw-bold shadow">
                    🍔 ¡QUIERO PEDIR AHORA!
                </Link>
            </div>
        </div>

        <div className="row mt-5 g-4">
            
            <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                    <div className="display-4 mb-3">💰</div>
                    <h4 className="card-title">ZyreCash</h4>
                    <p className="card-text text-muted">
                        Gana <strong>1 ZyreCash</strong> por cada $1.000 pesos gastados.
                    </p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                    <div className="display-4 mb-3">🚚</div>
                    <h4 className="card-title">Envíos con Descuento</h4>
                    <p className="card-text text-muted">
                        Obtén un <strong>5% de descuento</strong> automático en el envío a tu domicilio.
                    </p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                    <div className="display-4 mb-3">🎟️</div>
                    <h4 className="card-title">Sorteos Exclusivos</h4>
                    <p className="card-text text-muted">
                        Participa en sorteos mensuales solo por ser cliente frecuente (ver TyC).
                    </p>
                </div>
            </div>

        </div>
    </div>
    </>
  );
}

export default Inicio;