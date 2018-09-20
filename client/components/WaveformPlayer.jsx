const React = require('react');
const axios = require('axios');
const InfoContainer = require('./InfoContainer.jsx');
const TitleContainer = require('./TitleContainer.jsx');
const PlayerContainer = require('./PlayerContainer.jsx');
const ArtContainer = require('./ArtContainer.jsx');
const Modal = require('./Modal.jsx');
const styles = require('../styles/WaveformPlayer.css');
const queryString = require('query-string');

const parsed = queryString.parse(location.search);

class WaveformPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: [],
      comments: [],
      isPlaying: false,
      showModal: false,

    };

    this.playPause = this.playPause.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  componentDidMount() {
    const parsed = queryString.parse(location.search);
    Number(parsed.id)
    if (Number(parsed.id) > 100 || parsed.id === undefined) {
      parsed.id = '1';
    }
    axios.get(`http://localhost:3003/api/${Number(parsed.id)}`)
      .then(({ data }) => {
        this.setState({
          song: data.allData.songData,
          comments: data.allData.commentData,
        });
      });
  }

  toggleModal(e) {
    if (e.currentTarget === e.target) {
      this.setState({
        showModal: !this.state.showModal,
      });
    }
  }

  playPause(e) {
    if (e.currentTarget === e.target) {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });
    }
  }

  render() {
    const {
      song,
      comments,
      isPlaying,
      showModal,
    } = this.state;

    const style = {
      backgroundImage: `linear-gradient(135deg,grey,${song.backgroundColor})`,
    };

    return (
      <div className={showModal ? styles['wp-greyout'] : null}>
        <div className={styles['waveform-player-wrapper']} style={style} onClick={this.playPause}>
          <InfoContainer song={song} />
          <TitleContainer song={song} isPlaying={isPlaying} playPause={this.playPause} />
          <PlayerContainer comments={comments} isPlaying={isPlaying} song={song} />
          <ArtContainer song={song} toggleModal={this.toggleModal} />
          {showModal && <Modal song={song} toggleModal={this.toggleModal} />}
        </div>
      </div>
    );
  }
}

module.exports = WaveformPlayer;
