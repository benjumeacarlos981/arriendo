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
          <h1>$ 1.700.000</h1>
          <h4>Cel 3182438948</h4>
        </div>
      </header>
    </div>


  );
}

export default Header;
