const React = require('react');
const Waveform = require('./playerContainerComponents/Waveform.jsx');
const Comment = require('./playerContainerComponents/Comment.jsx');
const styles = require('../styles/playerContainer.css');

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { waveform } = this.props.song;
    const comments = this.props.comments;
    return (
      <div className={styles["player-container"]}>
        <Waveform waveform={waveform} />
        <div className={styles["wp-comment-placeholder"]}>
          {comments.map((comment, key) => <Comment comment={comment} key={key} />)}
        </div>
      </div>
    );
  }
}

module.exports = PlayerContainer;
