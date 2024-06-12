import React from 'react';
import './descripcion.scss';

function Descripcion({ data }) {

  return (
    <div className="description">
      <h2>{data.descripcion}</h2>
      <p>Se arrienda hermoso apartamento1</p>
      <ul>
        {data.caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
    </div>
  );
}

export default Descripcion;
