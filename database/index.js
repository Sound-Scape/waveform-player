const Sequelize = require('sequelize');

const SongModel = require('./models/Songs.js');

const CommentModel = require('./models/Comments.js');

const DATABASE = process.env.SEQ_DB || 'waveformplayer';

const USER = process.env.SEQ_USER || 'root';

const PASSWORD = process.env.SEQ_PW || '';

const DB_HOST = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
});
const getSongData = function (id, callback) {
  // console.log(DB_HOST)
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