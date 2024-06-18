import React, { useEffect } from 'react';
import './videos.scss';

function Videos({ data }) {
  useEffect(() => {
    // Esto se asegura de que el script de Vimeo se cargue cuando el componente se monte
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpieza del script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="videos x">
      {data.videos.map((videoSrc, index) => (
        <div className="video-individual" key={index} style={{ padding: '100% 0 0 0', position: 'relative' }}>
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            title={`Video-${index}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Videos;





