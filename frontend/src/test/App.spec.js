// src/test/App.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Asegúrate que la ruta a App sea correcta

// Como usas Router, hay que simularlo en la prueba, si no fallará
test('Debe renderizar el título de la tienda Zyre', () => {
  render(<App />);
  
  // Buscamos el texto "Zyre" que pusimos en el NavBar
  // La 'i' significa que ignora mayúsculas/minúsculas
  const linkElement = screen.getByText(/Zyre/i);
  
  expect(linkElement).toBeInTheDocument();
});