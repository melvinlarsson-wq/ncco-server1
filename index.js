const ncco = [
  { action: 'talk', text: 'Hej! Testar att koppla upp samtalet nu.' },
  {
    action: 'connect',
    endpoint: [{
      type: 'websocket',
      uri: 'wss://elevenlabs-agent-ws-connector.onrender.com/ws',
      'content-type': 'audio/l16;rate=16000'
    }]
  }
];
