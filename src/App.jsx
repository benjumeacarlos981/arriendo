import React, { useEffect, useState } from 'react';
import Carousel from './components/carousel/ComponentCarousel';
import Descripcion from './components/descripcion/Descripcion';
// import Videos from './components/videos/Videos';
import Header from './components/header/Header';
import './styles/styles.css';



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/arriendo/data/datos.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="container">
        <Header data={data} />
        <Carousel data={data} />
        <Descripcion data={data} />
        {/* <Videos data={data} /> */}
      </div>
    </>
  )
}

export default App
