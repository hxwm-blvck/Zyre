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
            <h2 className="display-5 fw-bold mb-3">Nuestra Historia</h2>
            <h4 className="text-muted mb-4">Del Sur de Chile a tu mesa.</h4>
            <p className="lead">
                Fundada en 1975 en la hermosa ciudad de <strong>Valdivia</strong>, Zyre nació con un sueño simple: crear la hamburguesa perfecta.
            </p>
            <p>
                Lo que comenzó como un pequeño carrito familiar, hoy se ha transformado en una 
                startup que combina la tradición de nuestras recetas secretas con la tecnología 
                para llevar el sabor a tu puerta en tiempo récord.
            </p>
            <Link to="/menu" className="btn btn-primary btn-lg mt-3">
                Ver Menú
            </Link>
        </div>
      </div>

      {/* --- SECCIÓN 2: VALORES (Tres columnas) --- */}
      <div className="row text-center mt-5 pt-4 border-top">
        <div className="col-md-4 mb-4">
            <div className="h1 mb-3">🥩</div> {/* Puedes cambiar el emoji por un icono si tienes */}
            <h3>Calidad Premium</h3>
            <p className="text-muted">Usamos carne 100% de vacuno y verduras frescas seleccionadas cada mañana.</p>
        </div>
        <div className="col-md-4 mb-4">
            <div className="h1 mb-3">🚀</div>
            <h3>Entrega Rápida</h3>
            <p className="text-muted">Nuestro sistema optimizado asegura que tu comida llegue caliente y a tiempo.</p>
        </div>
        <div className="col-md-4 mb-4">
            <div className="h1 mb-3">❤️</div>
            <h3>Tradición</h3>
            <p className="text-muted">Mantenemos la receta original de la abuela desde hace 50 años.</p>
        </div>
      </div>

    </div>
  );
}

export default Nosotros;