import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './collageImg.scss';

Modal.setAppElement('#root'); // Para accesibilidad

function CollageImg() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const baseURL = 'https://benjumeacarlos981.github.io/arriendo/images/';
    const imageCount = 49; // Total number of images
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `${baseURL}${i + 1}.jpg`);
    setImages(imageUrls);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="collage-container">
      {images.map((image, index) => (
        <div key={index} className="image-item" onClick={() => openModal(image)}>
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
      {selectedImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Imagen Ampliada"
          className="modal"
          overlayClassName="overlay"
        >
          <button className="close-button" onClick={closeModal}>X</button>
          <img src={selectedImage} alt="Imagen Ampliada" className="modal-image" />
        </Modal>
      )}
    </div>
  );
}

export default CollageImg;
