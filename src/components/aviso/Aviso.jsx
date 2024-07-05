import React, { useState, useEffect } from 'react';
import './Aviso.scss';

const Aviso = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // El aviso desaparece después de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="aviso-overlay">
      <div className="aviso-content">
        <p>El apartamento ya fue asignado a un arrendatario el dia 04/07/24</p>
      </div>
    </div>
  );
};

export default Aviso;
