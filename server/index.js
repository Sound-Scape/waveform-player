const express = require('express');

const app = express();

const db = require('../database/index.js');

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('This is the server response');
});

app.get('/song/:id', (req, res) => {

  db.getSongData(req.params.id, res.send.bind(res));
});

app.listen(3003, () => console.log(`
  Listening at port 3003
`));
