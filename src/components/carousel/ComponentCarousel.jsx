import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './componentCarousel.scss';

function ComponentCarousel({ data }) {
  const { carousel } = data; // Desestructurar data para obtener imagenes

  // Ahora, puedes usar `imagenes` directamente
  const [Configuracion, setConfiguracion] = useState(carousel);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="ComponentCarousel">
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      {Configuracion.diapositivas.map(detalle => {
        return (
          <Carousel.Item key={detalle.id}>
            <img className="d-block w-100" src={(`${data.img.linkImg}${detalle.imagen}`)} alt={detalle.alt}/>

            <Carousel.Caption>
              <h3>{detalle.descripcion}</h3>
            </Carousel.Caption>
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 textCarouselRight">
                    <h1>{Configuracion.tituloPrincipalH1}</h1>
                    <p>{Configuracion.tituloPrincipalP}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
</div>

  );
}

export default ComponentCarousel;
