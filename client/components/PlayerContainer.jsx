const React = require('react');
const Waveform = require('./playerContainerComponents/Waveform.jsx');
const Comment = require('./playerContainerComponents/Comment.jsx');

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { waveform } = this.props.song;
    const comments = this.props.comments;
    return (
      <div className="player-container">
        <Waveform waveform={waveform} />
        <div className="wp-comment-placeholder">
          {comments.map(comment => <Comment comment={comment} />)}
        </div>
      </div>
    );
  }
}

module.exports = PlayerContainer;
