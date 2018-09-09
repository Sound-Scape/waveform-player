const Sequelize = require('sequelize');

const commentSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING,
  },
  user: {
    type: Sequelize.STRING,
  },
  userImage: {
    type: Sequelize.STRING,
  },
  timePosted: {
    type: Sequelize.FLOAT,
  },
  songId: {
    type: Sequelize.INTEGER,
  },
};

const model = (sequelize) => {
  const Comment = sequelize.define('comment', commentSchema, { timestamps: false });
  return Comment;
};

module.exports = model;
