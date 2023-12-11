
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';
const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <div>
         <h1>YouTube Video Player</h1>
      <YouTube videoId={videoId} onReady={onReady} />
      {player && (
        <div>
          <p>Custom Controls or Additional Features Here</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
