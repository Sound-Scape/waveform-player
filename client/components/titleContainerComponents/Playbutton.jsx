const React = require('react');

const Playbutton = (props) => {
  const { isPlaying, playPause } = props;
  return (
    <div className="button-container">
      <div className="wp-playbutton cursor">
        {!isPlaying && <div className="wp-play" />}
        {isPlaying &&
          (
          <div>
            <div className="wp-pause1" />
            <div className="wp-pause2" />
          </div>
          )
        }
      </div>
    </div>
  );
};

module.exports = Playbutton;
