import React from 'react';
import './videos.scss';

function Videos({ data }) {

  return (
      <div className="videos">
        {data.videos.map((video, index) => (
          <video key={index} controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
  );
}

export default Videos;
