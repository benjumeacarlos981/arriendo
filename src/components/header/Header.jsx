import React from 'react';
import './header.scss';

function Header({ data }) {

  return (
    <div>
      <header>
        <div className="left">
        <h1>{data.titulo1}</h1>
        <h2>{data.titulo2}</h2>
        </div>
        <div className="right">
          <h1>{data.valor}</h1>
          <h4>{data.telefono}</h4>
          <h6>{data.direccion}</h6>
        </div>
      </header>
    </div>


  );
}

export default Header;
