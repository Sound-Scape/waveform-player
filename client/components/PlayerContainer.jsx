const React = require('react');
const Waveform = require('./playerContainerComponents/Waveform.jsx');
const CommentPlaceholder = require('./playerContainerComponents/CommentPlaceholder.jsx');
const CommentPopover = require('./playerContainerComponents/CommentPopover.jsx');

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { waveform } = this.props.song;

    return (
      <div className="player-container">
        <Waveform waveform={waveform}/>
        <CommentPlaceholder />
        <CommentPopover />
      </div>
    );
  }
}

module.exports = PlayerContainer;
