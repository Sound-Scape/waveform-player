const Sequelize = require('sequelize');

const songSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  coverArt: {
    type: Sequelize.STRING,
  },
  artist: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  },
  duration: {
    type: Sequelize.FLOAT,
  },
  genre: {
    type: Sequelize.STRING,
  },
  waveform: {
    type: Sequelize.STRING,
  },
  backgroundColor: {
    type: Sequelize.STRING,
  },
};

const model = (sequelize) => {
  const Song = sequelize.define('song', songSchema, { timestamps: false });
  return Song;
};

module.exports = model;
