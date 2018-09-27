const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const app = express();

app.use(cors());
app.use(morgan('dev'));

// serve without an explicit endpoint
app.use('/', express.static('public'));

app.use('/songs/:id', express.static('public'));

// legacy non-REST route
app.get('/api/waveformplayer/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

// REST API
app.get('/api/songs/', (req, res) => {
  res.status(200).send(`received GET to /api/songs/`);
});

app.get('/api/songs/:id', (req, res) => {
  res.status(200).send(`received GET to /api/songs/${req.params.id}`);
});

app.put('/api/songs/:id', (req, res) => {
  res.status(200).send(`received PUT to /api/songs/${req.params.id}`);
});

app.delete('/api/songs/:id', (req, res) => {
  res.status(200).send(`received DELETE to /api/songs/${req.params.id}`);
});

app.post('/api/songs/:id', (req, res) => {
  res.status(200).send(`received POST to /api/songs/${req.params.id}`);
});

app.get('/api/comments/', (req, res) => {
  res.status(200).send(`received GET to /api/comments/`);
});

app.get('/api/comments/:id', (req, res) => {
  res.status(200).send(`received GET to /api/comments/${req.params.id}`);
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

`
/api/songs/
/api/songs/:songId
/api/comments/
/api/comments/:commentId

Extend the existing API to support all CRUD operations:
Create / POST - create a new item
Read / GET - read an item
Update / PUT - update an item
Delete / DELETE - delete an item
`

app.listen(3003, () => console.log(`
  avincenthill component-server listening at port 3003...
`));
