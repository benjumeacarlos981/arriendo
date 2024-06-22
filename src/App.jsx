import React, { useEffect, useState } from 'react';
import Carousel from './components/carousel/ComponentCarousel';
import Descripcion from './components/descripcion/Descripcion';
import Videos from './components/videos/Videos';
import Header from './components/header/Header';
import CollageImg from './components/collageImg/CollageImg';
import './styles/styles.css';

import ImageCarouselModal from '/src/components/ImageCarouselModal/ImageCarouselModal';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para la accesibilidad del modal

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/arriendo/data/datos.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <Header data={data} />
        <Carousel data={data} />
        <Descripcion data={data} />
        <Videos data={data} />
        <CollageImg />
        <div>
          <button onClick={openModal} className="AppModalImg">Mostrar imagenes</button>
          <ImageCarouselModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </>
  );
}

export default App;
