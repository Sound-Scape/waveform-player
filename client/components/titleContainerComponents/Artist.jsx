const React = require('react');

const Artist = (props) => (
  <div className="wp-artist cursor">
    <div> {props.artist} </div>
  </div>
);

module.exports = Artist;
