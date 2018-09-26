const React = require('react');
const styles = require('../styles/artContainer.css');

// const ArtContainer = ({ toggleModal }) => {
//   const style = {
//     backgroundImage: `url(${props.song.coverArt})`,
//     backgroundSize: '100% 100%',
//   };
//   return (
//       <div className={`${styles['art-container']} cursor`} style={style} onClick={toggleModal}/>
//   );
// };

class ArtContainer extends React.Component {
  handleClick(e) {
    e.stopPropagation();
    this.props.toggleModal(e);
  }

  render() {
    const { props } = this;
    const style = {
      // backgroundImage: `url(${this.props.song.coverArt})`,
      backgroundSize: '100% 100%',
    };
    if (props.song.coverArt) {
      style.backgroundImage = `url(${props.song.coverArt})`;
    }
    return (
      <div className={`${styles['art-container']} cursor`} style={style} onClick={this.handleClick.bind(this)} />
    );
  }
}

module.exports = ArtContainer;
