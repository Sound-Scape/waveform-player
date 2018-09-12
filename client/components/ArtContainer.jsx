const React = require('react');

const ArtContainer = (props) => {
  const style = {
    backgroundImage: `url(${props.song.coverArt})`,
    backgroundSize: '100% 100%',
  };
  return (
    <div className="fixed-container">
      <div className="art-container" style={style} />
    </div>
  );
};

module.exports = ArtContainer;
