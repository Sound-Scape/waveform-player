const React = require('react');
const styles = require('../../styles/playerContainer.css');

const Waveform = (props) => {
  const style = {
    // -webkit-mask-box-image: `url(${props.waveform})`;
    backgroundImage: `url(${props.waveform})`,
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
    zIndex: 0,
  };
  return (
    <div>
    <div className={styles["wp-waveform"]} style={style} />
    <div />
    </div>
  );
};

module.exports = Waveform;
