const React = require('react');
const styles = require('../../styles/playerContainer.css');

function generateRandomWaveformArray(size) {
  const factors = [30, 40, 50, 55, 60, 71];
  let factorIndex = 0;
  let array = [];

  for (let i = 0; i < size; i += 1) {
    if ((i % 13) === 0) {
      factorIndex = Math.floor(Math.random() * factors.length);
    }
    array.push(Math.floor((Math.random() * 29)) + factors[factorIndex]);
  }
  return array;
}

function  renderWaveform(array, colorUp, colorDown) {
  const canvasUp = document.getElementById('canvas-up');
  const canvasDown = document.getElementById('canvas-down');
  for (let i = 0; i < array.length; i += 1) {
    const height = array[i] * 0.66;
    let ctx = canvasUp.getContext("2d");
    ctx.beginPath();
    ctx.rect(i * 3, 100 - height, 2, height);
    ctx.fillStyle = colorUp;
    ctx.fill();
    ctx.closePath();
  }
  for (let i = 0; i < array.length; i += 1) {
    const height = array[i] * 0.30;
    let ctx = canvasDown.getContext("2d");
    ctx.beginPath();
    ctx.rect(i * 3, 0, 2, height);
    ctx.fillStyle = colorDown;
    ctx.fill();
    ctx.closePath();
  }
}

class Waveform extends React.Component {
  constructor(props) {
    super(props);
    this.array = generateRandomWaveformArray(260);
    this.highlightWaveform = this.highlightWaveform.bind(this);
    this.resetWaveform = this.resetWaveform.bind(this);
  }

  componentDidMount() {
    this.resetWaveform();
  }

  highlightWaveform() {
    renderWaveform(this.array, 'white', '#d1cdcb');
  }

  resetWaveform() {
    renderWaveform(this.array, '#d8d7d7', '#b7b7b7');
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.waveform})`,
      backgroundSize: '100% 100%',
      backgroundColor: 'transparent',
      zIndex: 0,
    };

    return (
      <div>
        <canvas
          id="canvas-up"
          className={`${styles['canvas-up']} cursor`}
          width="660" height="100"
          onMouseEnter={this.highlightWaveform}
          onMouseLeave={this.resetWaveform}
          />
        <canvas 
          id="canvas-down" 
          className={`${styles['canvas-down']} cursor`}
          width="660" 
          height="100" 
          onMouseEnter={this.highlightWaveform} 
          onMouseLeave={this.highlightWaveform}
          />
      </div>
    );    
  }
}

module.exports = Waveform;
