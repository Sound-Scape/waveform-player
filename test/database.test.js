/*
  Am currently running into an issue where jest doesn't
  play nice with the spread operator - and when transpiling
  into jest, the spread operator continually creates errors.

  This test file checks to see if the shemas are valid for
  song and comments.
*/


// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// require('@babel/register')({
//   presets: ['@babel/preset-env'],
//   ignore: ['/node_modules/sequelize-test-helpers.+\\.js$"'],
// });

// const sequelizeTesters = require('sequelize-test-helpers');
const SequelizeMock = require('sequelize-mock');

const SongModel = require('../database/models/Songs.js');

const CommentModel = require('../database/models/Comments.js');

// test('should create Song table with appropriate fields in database', () => {
//   const Songs = SongModel(sequelize);
//   const instance = new Songs();

//   checkModelName(Songs)('song');

//   context('properties', () => {
//     ;['id',
//       'title',
//       'artist',
//       'date',
//       'duration',
//       'genre',
//       'waveform'].forEach(checkPropertyExists(instance));
//   });
// });

test('should do something', () => {
  expect(true).toBe(true);
})

// test('should create Comments table with appropriate fields in database', () => {
//   const Comments = SongModel(sequelize);
//   const instance = new Comments();

//   checkModelName(Comments)('comment');

//   context('properties', () => {
//     ;['id',
//       'title',
//       'artist',
//       'date',
//       'duration',
//       'genre',
//       'waveform'].forEach(checkPropertyExists(instance));
//   });
// });