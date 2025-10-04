const express = require('express');
const app = express();

// NCCO-definitionen
const ncco = [
  { action: 'talk', text: 'Hej! Testar att koppla upp samtalet nu.' },
  {
    action: 'connect',
    endpoint: [{
      type: 'websocket',
      uri: 'wss://elevenlabs-agent-ws-connector.onrender.com/socket'
,
      'content-type': 'audio/l16;rate=16000'
    }]
  }
];

// Route som Vonage anropar som Answer URL
app.get('/ncco', (req, res) => {
  res.json(ncco);
});

// Event-callback (kan vara bra för loggar)
app.post('/events', (req, res) => {
  console.log('Vonage event:', req.body);
  res.sendStatus(200);
});

// Hälsokoll på root (så du slipper “Cannot GET /”)
app.get('/', (req, res) => {
  res.send('OK');
});

// Starta servern
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`NCCO server running on port ${port}`);
});
