const React = require('react');
const axios = require('axios');
const InfoContainer = require('./InfoContainer.jsx');
const TitleContainer = require('./TitleContainer.jsx');
const PlayerContainer = require('./PlayerContainer.jsx');
const ArtContainer = require('./ArtContainer.jsx');

class WaveformPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: [],
      comments: [],
      isPlaying: false,
    };
  }

  componentDidMount() {
    const songId = Math.floor(Math.random() * 100) + 1;
    axios.get(`http://localhost:3003/song/${songId}`)
      .then(({ data }) => {
        this.setState({
          song: data.allData.songData,
          comments: data.allData.commentData,
        });
      });
  }

  render() {
    const { song, comments, isPlaying } = this.state;
    const style = {
      backgroundImage: `linear-gradient(135deg,grey,${song.backgroundColor})`,
    };
    return (
      <div className="waveform-player-wrapper" style={style}>
        <InfoContainer song={song} />
        <TitleContainer song={song} isPlaying={isPlaying} />
        <PlayerContainer comments={comments} isPlaying={isPlaying} song={song} />
        <ArtContainer song={song} />
      </div>
    );
  }
}

module.exports = WaveformPlayer;
