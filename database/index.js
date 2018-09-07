let Sequelize = require('sequelize');
let faker = require('faker');

const sequelize = new Sequelize('soundcloud', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const commentSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING
  },
  user: {
    type: Sequelize.STRING
  },
  userImage: {
    type: Sequelize.STRING
  },
  timePosted: {
    type: Sequelize.FLOAT
  },
  songId: {
    type: Sequelize.INTEGER
  },
};

const songSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  },
  duration: {
    type: Sequelize.FLOAT
  },
  genre: {
    type: Sequelize.STRING
  },
  waveform: {
    type: Sequelize.STRING
  }
};

const Song = sequelize.define('song', songSchema, { timestamps: false });
const Comment = sequelize.define('comment', commentSchema, { timestamps: false });


let instantiateData = function(songModel, commentModel) {
  songModel.sync({force: true})
    .then(() => {
      for (let i = 0; i < 100; i++) {
        songModel.create({
          title: faker.random.word(),
          artist: faker.name.findName(),
          date: faker.date.recent(),
          duration: Math.floor(Math.random() * 6 * 100) / 100,
          genre: faker.lorem.word(),
          waveform: 'placeholder for waveform images'
        });
      }
    })
    .then(() => {
      return commentModel.sync({force: true});
    })
    .then(() => {
      for (let i = 0; i < 600; i++) {
        commentModel.create({
          text: faker.random.words(),
          user: faker.name.firstName(),
          userImage: 'placeholder for user images',
          timePosted: Math.floor(Math.random() * 6 * 100) / 100,
          songId: Math.floor(Math.random() * 100)
        });
      }
    })
    .then(() => {
      console.log('Data instantiated!!');
    });
};

instantiateData(Song, Comment);

module.exports = {
  instantiateData,
  songSchema,
  commentSchema
};