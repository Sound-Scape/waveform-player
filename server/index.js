const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
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
