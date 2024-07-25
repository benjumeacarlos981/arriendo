import React from 'react';
import './descripcion.scss';

function Descripcion({ data }) {
  return (
    <div className="description">
      <h2>{data.descripcion}</h2>
      <h4>Descripcion 1152</h4>

      <div className="list-container">
        <ul>
          {data.caracteristicas.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Descripcion;

