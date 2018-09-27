const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../styles/modal.css');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modal = document.getElementById('modal');
    const { title, coverArt } = this.props.song;
    const { toggleModal } = this.props;
    return ReactDOM.createPortal((
      <div className={styles["wp-modal-tint"]} onClick={toggleModal}>
        <div className={styles["wp-modal"]}>
          <div className={styles["wp-modal-header"]}>
            {title}
          </div>
          <img src={coverArt} alt="Album Art" height="500" width="500" className={styles["img-modal"]} align="middle" />
        </div>
      </div>),
      modal);
  }
}

module.exports = Modal;
