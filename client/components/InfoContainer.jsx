const React = require('react');
const GenreHash = require('./infoContainerComponents/GenreHash.jsx');
const Date = require('./infoContainerComponents/Date.jsx');
const styles = require('../styles/infoContainer.css');

const InfoContainer = (props) => {
  const { date, genre } = props.song;
  return (
    <div className={styles["info-container"]}>
      <GenreHash genre={genre} />
      <Date date={date} />
    </div>
  );
};

module.exports = InfoContainer;
