import React from 'react';
import Modal from 'react-modal';
import './Medidas.scss';

function Medidas({ data, isOpen, onRequestClose }) {
  return (
    <div className="medidas-modal">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Medidas del Apartamento"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-header">
          <h2>{data.medidas.titulo}</h2>
          <button onClick={onRequestClose} className="close-button">&times;</button>
        </div>
        <div className="list-container">
          <ul>
            {data.medidas.mts.map(item => (
              <li key={item.id}>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Medidas;
