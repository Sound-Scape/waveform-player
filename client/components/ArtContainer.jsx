const React = require('react');

const ArtContainer = (props) => {
  const { toggleModal } = props;
  const style = {
    backgroundImage: `url(${props.song.coverArt})`,
    backgroundSize: '100% 100%',
  };
  return (
      <div className="art-container" style={style} onClick={toggleModal}/>
  );
};

module.exports = ArtContainer;
