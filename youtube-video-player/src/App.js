// App.js
import React, { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import axios from 'axios';
import './App.css';

const App = () => {
  const [videoIds, setVideoIds] = useState(['m91SBnRxlYQ', 'jNQXAC9IVRw', '7FjL6i04_uY', 'XqZsoesa55w', '8U_Zv8zPeW4']);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const fetchVideoId = async () => {
    const currentVideoId = videoIds[currentVideoIndex];

    try {
      const response = await fetch(`http://localhost:5000/api/getVideoUrl/${currentVideoId}`);
      const data = await response.json();

      console.log('Server Response:', data);
      // Update the current video ID in the array
      setVideoIds((prevVideoIds) => {
        const newVideoIds = [...prevVideoIds];
        newVideoIds[currentVideoIndex] = data.url;
        return newVideoIds;
      });
    } catch (error) {
      console.error('Error fetching video URL:', error.message);
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <div>
      <VideoPlayer videoId={videoIds[currentVideoIndex]} />
      {/* <button onClick={fetchVideoId}>Fetch Video</button> */}
      <button onClick={nextVideo}>Fetch Video</button>
    </div>
  );
};

export default App;
