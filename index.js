const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// --- NCCO med först TTS, sen websocket ---
const ncco = [
  {
    action: 'talk',
    text: 'Hej! Testar att koppla upp samtalet nu.'
  },
  {
    action: 'connect',
    endpoint: [
      {
        type: 'websocket',
        uri: 'wss://elevenlabs-agent-ws-connector.onrender.com/ws',
        'content-type': 'audio/l16;rate=16000'
      }
    ]
  }
];

app.get('/healthz', (req, res) => res.send('ok'));
app.get('/ncco', (req, res) => res.json(ncco));

app.listen(PORT, () => console.log(`NCCO server running on ${PORT}`));
