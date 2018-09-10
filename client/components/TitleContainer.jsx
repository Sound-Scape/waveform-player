const React = require('react');
const Artist = require('./titleContainerComponents/Artist.jsx');
const Playbutton = require('./titleContainerComponents/Playbutton.jsx');
const Title = require('./titleContainerComponents/Title.jsx');


const TitleContainer = () => (
  <div className="title-container">
    <Playbutton />
    <Title />
    <Artist />
  </div>
);

module.exports = TitleContainer;
