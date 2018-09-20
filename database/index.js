const Sequelize = require('sequelize');

const SongModel = require('./models/Songs.js');

const CommentModel = require('./models/Comments.js');

const DATABASE = 'waveformplayer';

const USER = 'root';

const PASSWORD = '';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});
const getSongData = function (id, callback) {
  const songModel = SongModel(sequelize);
  const commentModel = CommentModel(sequelize);
  const queryResult = {};
  songModel.findAll({
    where: { id },
  })
    .then((result => {
      queryResult.songData = result[0];
      return commentModel.findAll({
        where: {
          songId: id,
        }
      })
    }))
    .then((result => {
      queryResult.commentData = result;
      callback(JSON.stringify({ allData: queryResult }));
    }))
};

module.exports = { getSongData };