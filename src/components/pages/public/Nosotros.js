import React from 'react';
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <div className='container my-5'>
      
      <div className="row align-items-center mb-5">
        
        <div className="col-md-6 mb-4 mb-md-0">
            <img 
                src="/images/nosotros2.png" 
                alt="Equipo Zyre" 
                className="img-fluid rounded shadow" 
                style={{ objectFit: 'cover', height: '400px', width: '100%' }}
            />
        </div>

        <div className="col-md-6">
            <h2 className="display-5 fw-bold mb-3">Nosotros</h2>
            <p className="lead">
                Zyre se creo como un pequeño proyecto de comida rapida entre amigos.
            </p>
            <p>
                Lo que nos motiva es hacer que cada producto sea una experiencia sin igual.
            </p>
            <Link to="/menu" className="btn btn-primary btn-lg mt-3">
                Ver Menu
            </Link>
        </div>
      </div>

    </div>
  );
}

export default Nosotros;