const React = require('react');
const axios = require('axios');
const InfoContainer = require('./InfoContainer.jsx');
const TitleContainer = require('./TitleContainer.jsx');
const PlayerContainer = require('./PlayerContainer.jsx');
const ArtContainer = require('./ArtContainer.jsx');
const Modal = require('./Modal.jsx');
const styles = require('../styles/WaveformPlayer.css');

// const proxyUrl = process.env.URL || '18.224.8.56';

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
    console.log('WaveformPlayer mounted');
    // console.log('HELLO', process.env.URL, process.env.SEQ_DB); // TBD process vars undefined
    const url = window.location.href.split('/');
    const id = url[url.length - 2] || 1;
    // const proxyEndpoint = proxyUrl + '/api/waveformplayer/' + id; // TBD what is this
    const endpoint = `/api/waveformplayer/${id}`;
    // const endpoint = `/api/waveformplayer/2`;
    axios.get(endpoint)
      .then(({ data }) => {
        console.log(`avincenthill client GET request to ${endpoint} on component server returned `, data);
        this.setState({
          song: data.allData.songData,
          comments: data.allData.commentData,
        });
      })
      .catch((error) => {
        console.error('axios.get error: ', error);
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
