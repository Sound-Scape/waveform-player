const React = require('react');
const styles = require('../../styles/titleContainer.css');

const Artist = (props) => (
  <div className={`${styles['wp-artist']} cursor`} >
    <div> {props.artist} </div>
  </div>
);

module.exports = Artist;
