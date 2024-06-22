import React, { useEffect, useState, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import './ImageCarouselModal.scss';

const ImageCarouselModal = ({ isOpen, onRequestClose }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const baseURL = 'https://benjumeacarlos981.github.io/arriendo/images/';
    const imageCount = 23; // Total number of images
    const imageUrls = Array.from({ length: imageCount }, (_, i) => `${baseURL}${i + 1}.jpeg`);
    setImages(imageUrls);
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    setSelectedImage(index);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Carousel Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '800px'
        }
      }}
    >
      <div>
        <Carousel selectedItem={selectedImage} onChange={setSelectedImage}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              style={{
                width: '50px',
                height: '50px',
                margin: '0 5px',
                cursor: 'pointer',
                border: selectedImage === index ? '2px solid #00c298' : '2px solid transparent'
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        <button onClick={onRequestClose} style={{ marginTop: '20px' }}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default ImageCarouselModal;
