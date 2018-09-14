const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <PlayerContainer /> ', () => {
  test('should pass to Waveform an image', () => {
    const wrapper = shallow(<Modules.PlayerContainer song={song} comments={comments} />);
    const { waveform } = (wrapper.find(Modules.Waveform).props());
    expect(waveform.slice(-4)).toBe('.png');
  });
});
