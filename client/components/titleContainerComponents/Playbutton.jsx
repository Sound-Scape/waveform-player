const React = require('react');

const Playbutton = (props) => {
  const { isPlaying, playPause } = props;
  return (
    <div className="button-container">
      <div className="wp-playbutton cursor" onClick={playPause}>
        {!isPlaying && <div className="wp-play" onClick={playPause} />}
        {isPlaying &&
          (
          <div>
            <div className="wp-pause1" onClick={playPause} />
            <div className="wp-pause2" onClick={playPause} />
          </div>
          )
        }
      </div>
    </div>
  );
};

module.exports = Playbutton;
