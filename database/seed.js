const Sequelize = require('sequelize');

const faker = require('faker');

const SongModel = require('./models/Songs.js');

const CommentModel = require('./models/Comments.js');

const imageIds = require('./imageIds.js');

const waveformUrls = [
  'http://w1.sndcdn.com/fxguEjG4ax6B_m.png',
  'https://w1.sndcdn.com/cWHNerOLlkUq_m.png'];

const DATABASE = process.env.SEQ_DB || 'waveformplayer';

const USER = process.env.SEQ_USER || 'root';

const PASSWORD = process.env.SEQ_PW || '';

const DB_HOST = process.env.DB_HOST || 'localhost';

// console.log(DATABASE, USER, PASSWORD, DB_URL);

// let dbInit = new Sequelize(DATABASE, USER, PASSWORD, {
//   host: DB_HOST,
//   dialect: 'mysql',
//   logging: false,
// });

function instantiateData(songModel, commentModel, connection) {
  songModel.sync({ force: true })
    .then(() => {
      // const songPromises = [];
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
        // return Promise.all(songPromises);
      }
    })
    .then(() => commentModel.sync({ force: true }))
    .then(() => {
      // const commentPromises = [];
      for (let i = 0; i < 600; i += 1) {
        commentModel.create({
          text: faker.random.words(),
          user: faker.name.firstName(),
          userImage: faker.image.avatar(),
          timePosted: Math.floor(Math.random() * 600 * 100) / 100,
          songId: Math.floor(Math.random() * 100),
        });
        // return Promise.all(commentPromises);
      }
    })
    .then(() => {
      console.log(`Database ${DATABASE} seeded`);
      setTimeout(() => {
        connection.close();
      }, 6000);
    });
}


let errNumber = 0;

function seed() {
  let dbInit = new Sequelize('', USER, PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
  });

  dbInit.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`)
    .then(() => {
      console.log(`Database ${DATABASE} created`);
      const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
        host: DB_HOST,
        dialect: 'mysql',
        logging: false,
      });
      dbInit.close();
      instantiateData(SongModel(sequelize), CommentModel(sequelize), sequelize);
    })
    .catch((e) => {
      errNumber = errNumber + 1;
      if (errNumber === 15) {
        console.log('Maximum number of attempts reached!');
      } else {
        setTimeout(seed, 1000);
      }
    });
}

seed();

// module.exports = {
//   instantiateData,
// };
