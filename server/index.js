const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use('/', express.static('public'));
app.use('/song/:id', express.static('public'));

app.get('/api/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

app.listen(3003, () => console.log(`
  Listening at port 3003
`));
