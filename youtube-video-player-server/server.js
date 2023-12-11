// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/getVideoUrl/:videoId', async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const apiKey = 'AIzaSyDubWWyw_WJF6IqkQZepxohZjbs1cJP9SA';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    
    if (response.data.items && response.data.items.length > 0) {
      const url = response.data.items[0].player.embedHtml;
      res.json({ url });
    } else {
      throw new Error('Video not found');
    }
  } catch (error) {
    console.error('Error fetching video URL:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
