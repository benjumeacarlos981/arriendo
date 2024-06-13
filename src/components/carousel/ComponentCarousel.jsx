import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ComponentCarousel({ data }) {
  const { carousel } = data; // Desestructurar data para obtener imagenes
  const [index, setIndex] = useState(0);

   // Ahora, puedes usar `imagenes` directamente
   const [Configuracion, setConfiguracion] = useState(carousel);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Configuracion.diapositivas.map(detalle => {

        return (
        <Carousel.Item key={detalle.id}>
          <img className="d-block w-100" src={detalle.imagen} alt={detalle.alt}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        )


      })}

    </Carousel>
  );
}

export default ComponentCarousel;