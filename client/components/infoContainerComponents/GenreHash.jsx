const React = require('react');

const GenreHash = (props) => (
  <div className="wp-genre-hash">
    <div>{`# ${props.genre}`}</div>
  </div>
);

module.exports = GenreHash;
