const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', express.static('public'));
app.use('/song/:id', express.static('public'));

app.get('/api/songs/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

app.listen(3003, () => console.log(`
  Now I'm listening at port 3003
`));
