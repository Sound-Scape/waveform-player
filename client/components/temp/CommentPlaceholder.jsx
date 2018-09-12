const React = require('react');

class CommentPlaceholder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // comments: this.props.comments --> to be implemented
    }
  }

  render() {
    return (
      <div className="wp-comment-placeholder">
        <hr className="wp-comment-line" />
      </div>
    )
  }
}

module.exports = CommentPlaceholder;
