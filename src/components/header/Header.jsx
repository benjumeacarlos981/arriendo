import React from 'react';
import './header.scss';

function Header({ data }) {

  return (
    <div>
      <header>
        <h1>{data.titulo1}</h1>
        <h2>{data.titulo2}</h2>
      </header>
    </div>


  );
}

export default Header;
