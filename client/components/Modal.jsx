const React = require('react');
const ReactDOM = require('react-dom');

class Modal extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      isShowing: props.isShowing,
    }
  }

  render() {
    const modal = document.getElementById('modal');
    const { title, coverArt } = this.props.song;
    const isShowing = this.state;
    if (isShowing) {
      return ReactDOM.createPortal((
        <div className="wp-modal-tint">
          <div className="wp-modal">
          <div className="wp-modal-header">
            {title}
          </div>
            <img src={coverArt} alt="Album Art" height="500" width="500" className="img-modal" align="middle"/>
          </div>
        </div>),
      modal);     
    }
  }
}

module.exports = Modal;
