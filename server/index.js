const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static('public'));
app.use('/songs/:id', express.static('public'));

//Remember to turn this one back???
app.get('/api/waveformplayer/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

app.listen(3003, () => console.log(`
  Now listening at port 3003
`));
