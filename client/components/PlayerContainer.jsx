const React = require('react');
const Waveform = require('./PlayerContainerComponents/Waveform.jsx');
const CommentPlaceholder = require('./PlayerContainerComponents/CommentPlaceholder.jsx');
const CommentPopover = require('./PlayerContainerComponents/CommentPopover.jsx');

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="player-container">
        <Waveform />
        <CommentPlaceholder />
        <CommentPopover />
      </div>
    );
  }
}

module.exports = PlayerContainer;
