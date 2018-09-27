const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());

// serve without an explicit endpoint
app.use('/', express.static('public'));

app.use('/songs/:id', express.static('public'));

// legacy non-REST route
app.get('/api/waveformplayer/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

// REST API
// **************************************
// songs
app.get('/api/songs/', (req, res) => {
  db.getSongs(null, (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/api/songs/:id', (req, res) => {
  db.getSong(null, (err, data) => {
    res.status(200).send(data);
  }, req.params.id);
});

app.put('/api/songs/:id', (req, res) => {
  db.updateSong(null, (err) => {
    res.status(202).send(`song with id=${req.params.id} updated`);
  }, req.params.id, req.body);
});

app.delete('/api/songs/:id', (req, res) => {
  db.deleteSong(null, (err) => {
    res.status(202).send(`song with id=${req.params.id} deleted`);
  }, req.params.id);
});

app.post('/api/songs/:id', (req, res) => {
  db.createSong(null, (err) => {
    if (err) {
      res.status(409).send(`song with id=${req.params.id} already exists`);
    } else {
      res.status(201).send(`song with id=${req.params.id} created`);
    }
  }, req.body);
});

// **************************************
// comments
app.get('/api/comments/', (req, res) => {
  db.getComments(null, (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/api/comments/:id', (req, res) => {
  db.getComment(null, (err, data) => {
    res.status(200).send(data);
  }, req.params.id);
});


app.put('/api/comments/:id', (req, res) => {
  res.status(200).send(`received PUT to /api/comments/${req.params.id}`);
});

app.delete('/api/comments/:id', (req, res) => {
  res.status(200).send(`received DELETE to /api/comments/${req.params.id}`);
});

app.post('/api/comments/:id', (req, res) => {
  res.status(200).send(`received POST to /api/comments/${req.params.id}`);
});

const componentServerPort = 1337;
app.listen(componentServerPort, () => console.log(`
  avincenthill component-server listening at port ${componentServerPort}...
`));
