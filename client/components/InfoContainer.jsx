const React = require('react');
const GenreHash = require('./infoContainerComponents/GenreHash.jsx');
const Date = require('./infoContainerComponents/Date.jsx');

/*
  The height of the info container changes according to whether or not
  a genre is listed for the song. TODO -> implement variable heights
  for songs with/without genres.
*/

const InfoContainer = (props) => {
  const { date, genre } = props.song;
  return (
    <div className="info-container">
      <GenreHash genre={genre} />
      <Date date={date} />
    </div>
  );
};

module.exports = InfoContainer;
