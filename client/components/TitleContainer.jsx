const React = require('react');
const Artist = require('./titleContainerComponents/Artist.jsx');
const Playbutton = require('./titleContainerComponents/Playbutton.jsx');
const Title = require('./titleContainerComponents/Title.jsx');

/*
  The width here is predefined in title-container. However,
  the size should obviously wrap around the length of the text.
  The same goes for artist.
*/

const TitleContainer = () => (
  <div className="title-container">
    <Playbutton />
    <Title />
    <Artist />
  </div>
);

module.exports = TitleContainer;
