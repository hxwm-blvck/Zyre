import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/public/Inicio.js';
import Hamburguesas from './components/pages/public/Productos.js/Hamburguesas.js';
import Postres from './components/pages/public/Productos.js/Postres.js';
import Carrito from './components/pages/public/Carrito.js';
import ProductAdmin from './components/pages/admin/ProductAdmin.js'
import Checkout from './components/pages/public/Checkout';
import RegistrationPage from './components/pages/public/RegistrationPage.js';
import Exito from './components/pages/public/Exito';

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

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/registro" element={<RegistrationPage />} />
        <Route path="/exito" element={<Exito />} />
        
        {/* Ruta para "404 No encontrado" */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;