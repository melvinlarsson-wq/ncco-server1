const express = require('express');
const app = express();

// NCCO
const ncco = [
  { action: 'talk', text: 'Hej! Testar att koppla upp samtalet nu.' },
  {
    action: 'connect',
    endpoint: [{
      type: 'websocket',
      uri: 'wss://elevenlabs-agent-ws-connector.onrender.com/socket',
      'content-type': 'audio/l16;rate=16000;channels=1',
      headers: {
        'x-elevenlabs-agent-id': 'agent_8801k2ypbd8ae41acdw590tc5mgy1',
        'x-elevenlabs-api-key': 'sk_3548867a8c4429d6cdb7d6ab5026b4baae99f5f8d0b97adf'
      }
    }]
  }
];

// Routes
app.get('/ncco', (_req, res) => res.json(ncco));
app.post('/events', (req, res) => { console.log('Vonage event:', req.body); res.sendStatus(200); });
app.get('/', (_req, res) => res.send('OK'));
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`NCCO server running on port ${port}`));
