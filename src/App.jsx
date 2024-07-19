import React, { useEffect, useState } from 'react';
import Carousel from './components/carousel/ComponentCarousel';
import Descripcion from './components/descripcion/Descripcion';
import Videos from './components/videos/Videos';
import Header from './components/header/Header';
import Aviso from './components/aviso/Aviso';
import Medias from './components/medidas/Medidas';
import CollageImg from './components/collageImg/CollageImg';
import './styles/styles.css';

import ImageCarouselModal from './components/ImageCarouselModal/ImageCarouselModal';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para la accesibilidad del modal

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/arriendo/data/datos.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isMedidasModalOpen, setIsMedidasModalOpen] = useState(false);

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const openMedidasModal = () => {
    setIsMedidasModalOpen(true);
  };

  const closeMedidasModal = () => {
    setIsMedidasModalOpen(false);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Aviso />
      <div className="container">
        <Header data={data} />
        <Carousel data={data} />
        <Descripcion data={data} />
        <div>
          <button onClick={openMedidasModal} className="AppModalImg">Consultar Dimensiones</button>
          <Medias isOpen={isMedidasModalOpen} onRequestClose={closeMedidasModal} data={data} />
        </div>

        <Videos data={data} />
        <CollageImg />
        <br />
        <div>
          <button onClick={openImageModal} className="AppModalImg">Mostrar imágenes</button>
          <ImageCarouselModal isOpen={isImageModalOpen} onRequestClose={closeImageModal} />
        </div>

      </div>
    </>
  );
}

export default App;
