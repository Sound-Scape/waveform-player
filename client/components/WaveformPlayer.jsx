const React = require('react');
const InfoContainer = require('./InfoContainer.jsx');
const TitleContainer = require('./TitleContainer.jsx');
const PlayerContainer = require('./PlayerContainer.jsx');
const ArtContainer = require('./ArtContainer.jsx');

class WaveformPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    return (
      <div className="waveform-player-wrapper">
        <InfoContainer />
        <TitleContainer />
        <PlayerContainer />
        <ArtContainer />
      </div>
    );
  }
}

module.exports = WaveformPlayer;
