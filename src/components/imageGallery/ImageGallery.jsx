import React, { useState, useEffect } from 'react';
import CollageImg from '../collageImg/CollageImg';
import './ImageGallery.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para accesibilidad

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  return (
    <>
      <button onClick={openModal} className="open-gallery-button">
        Abrir Galería de Imágenes
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Galería de Imágenes"
        className="gallery-modal"
        overlayClassName="gallery-overlay"
      >
        <button className="close-gallery-button" onClick={closeModal}>X</button>
        <div className="gallery-content">
          <CollageImg />
        </div>
      </Modal>
    </>
  );
};

export default ImageGallery;
