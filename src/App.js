import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa tus páginas actuales (Ajusta las rutas si cambiaste carpetas)
import Inicio from './components/pages/public/Inicio.js';
import Hamburguesas from './components/pages/public/Hamburguesas.js';
import Postres from './components/pages/public/Postres.js';
import Carrito from './components/pages/public/Carrito.js';
import ProductAdmin from './components/pages/admin/ProductAdmin.js'

// Importa componentes globales (si ya creaste el NavBar separado)
import BarraNavegacion from './components/organisms/BarraNavegacion.js'; 

function App() {
  return (
    <BrowserRouter>
        <BarraNavegacion /> 
      
      <Routes>
        {/* Ruta Principal (Home) */}
        <Route path="/" element={<Inicio />} />

        {/* Rutas de Categorías */}
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/postres" element={<Postres />} />

        {/* Rutas futuras requeridas por la evaluación [cite: 66] */}
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin/productos" element={<ProductAdmin />} />
        
        {/* Ruta para "404 No encontrado" */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;