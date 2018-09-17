const React = require('react');
const styles = require('../../styles/infoContainer.css');


const GenreHash = (props) => (
  <div className={`${styles['wp-genre-hash']} cursor`}>
    <div>{`# ${props.genre}`}</div>
  </div>
);

module.exports = GenreHash;
