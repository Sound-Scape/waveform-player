const Sequelize = require('sequelize');

const SongModel = require('./models/Songs.js');

const CommentModel = require('./models/Comments.js');

const DATABASE = 'soundcloud';

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
  const queryResult = [];

  songModel.findAll({
    where: { id },
  })
    .then((result => {
      queryResult.push(result);
      return commentModel.findAll({
        where: {
          songId: id,
        }
      })
    }))
    .then((result => {
      queryResult.push(result);
      console.log({ data: queryResult });
      callback(JSON.stringify({ data: queryResult }));
    }))
};

module.exports = { getSongData };