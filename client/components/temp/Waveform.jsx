const React = require('react');

const Waveform = (props) => {
  const style = {
    // -webkit-mask-box-image: `url(${props.waveform})`;
    backgroundImage: `url(${props.waveform})`,
    backgroundSize: '100% 100%',
  };
  return (
    <div className="wp-waveform" style={style} />
  );
};

module.exports = Waveform;
