const React = require('react');
const styles = require('../styles/artContainer.css');

const ArtContainer = (props) => {
  const { toggleModal } = props;
  const style = {
    backgroundImage: `url(${props.song.coverArt})`,
    backgroundSize: '100% 100%',
  };
  return (
      <div className={`${styles['art-container']} cursor`} style={style} onClick={toggleModal}/>
  );
};

module.exports = ArtContainer;
