
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
      className="ImageCarouselModal"
    >
      <div>
        <Carousel selectedItem={selectedImage} onChange={setSelectedImage}>
          {images.map((image, index) => (

            <div id="imghjm" key={index}>
              <img src={image} alt={`Imagen ${index + 1}`} />
              {/* <button onClick={onRequestClose} style={{ marginTop: '1px' }}>Cerrar</button> */}
              <button
              onClick={onRequestClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              Cerrar
            </button>
            </div>
          ))}

        </Carousel>

      </div>
    </Modal>
  );
};

export default ImageCarouselModal;
