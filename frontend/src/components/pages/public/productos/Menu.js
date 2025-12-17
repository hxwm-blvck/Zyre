import React from 'react';
import Hamburguesas from './Hamburguesas';
import Postres from './Postres';
import HamburguesasP from './HamburguesasP';

function Menu() {
  return (
    <div className="container my-5">
      
      <section id="section-hamburguesas" className="mb-5">
        <h2 className="text-center display-4 fw-bold ">Hamburguesas de Carne</h2>
        <Hamburguesas />
      </section>

      <hr className="my-5 border-3 border-secondary opacity-25" />

        <section id="section-hamburguesas-pollo" className="mb-5">
            <h2 className="text-center display-4 fw-bold ">Hamburguesas de Pollo</h2>
            <HamburguesasP />
         </section>

      <hr className="my-5 border-3 border-secondary opacity-25" />

      <section id="section-postres" className="mb-5">
           <h2 className="text-center display-4 fw-bold ">Postres</h2>
        <Postres />
      </section>

    </div>
  );
}

export default Menu;