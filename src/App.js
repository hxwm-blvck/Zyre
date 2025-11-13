import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/public/Inicio.js';
import Menu from './components/pages/public/productos/Menu.js';
import Carrito from './components/pages/public/Carrito.js';
import ProductAdmin from './components/pages/admin/ProductAdmin.js'
import Checkout from './components/pages/public/Checkout';
import RegistrationPage from './components/pages/public/RegistrationPage.js';
import Exito from './components/pages/public/Exito';

import BarraNavegacion from './components/organisms/BarraNavegacion.js'; 
import Nosotros from './components/pages/public/Nosotros.js';

function App() {
  return (
    <BrowserRouter>
        <BarraNavegacion /> 
      
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin/productos" element={<ProductAdmin />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/registro" element={<RegistrationPage />} />
        <Route path="/exito" element={<Exito />} />
        
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;