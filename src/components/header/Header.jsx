import React from 'react';
import './header.scss';

function Header({ data }) {

  return (
    <div>
      <header>
        <h1>{data.titulo}</h1>
      </header>
    </div>


  );
}

export default Header;
