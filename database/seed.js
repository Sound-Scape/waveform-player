const Sequelize = require('sequelize');

const faker = require('faker');

const SongModel = require('./models/Songs.js');

const CommentModel = require('./models/Comments.js');

const imageIds = require('./imageIds.js');

const waveformUrls = [
  'http://w1.sndcdn.com/fxguEjG4ax6B_m.png',
  'https://w1.sndcdn.com/cWHNerOLlkUq_m.png'];

const DATABASE = 'soundcloud';

const USER = 'root';

const PASSWORD = null;

const dbInit = new Sequelize('', USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

function instantiateData(songModel, commentModel) {
  songModel.sync({ force: true })
    .then(() => {
      for (let i = 0; i < 100; i += 1) {
        const imageUrl = `https://source.unsplash.com/${
          imageIds[Math.floor(Math.random() * imageIds.length)]
        }/690x900`;
        songModel.create({
          title: faker.random.word(),
          artist: faker.name.findName(),
          coverArt: imageUrl,
          date: faker.date.recent(),
          duration: Math.floor(Math.random() * 6 * 100) / 100,
          genre: faker.random.word(),
          waveform: waveformUrls[Math.floor(Math.random() * 2)],
          backgroundColor: faker.internet.color(),
        });
      }
    })
    .then(() => commentModel.sync({ force: true }))
    .then(() => {
      for (let i = 0; i < 600; i += 1) {
        commentModel.create({
          text: faker.random.words(),
          user: faker.name.firstName(),
          userImage: faker.image.avatar(),
          timePosted: Math.floor(Math.random() * 6 * 100) / 100,
          songId: Math.floor(Math.random() * 100),
        });
      }
    })
    .then(() => {
      console.log(`Data seeded in ${DATABASE}`);
    });
}

dbInit.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`)
  .then(() => {
    console.log(`Database ${DATABASE} created`);

    const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: false,
    });

    instantiateData(SongModel(sequelize), CommentModel(sequelize));
  });

module.exports = {
  instantiateData,
};
