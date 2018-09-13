const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <ArtContainer /> ', () => {
  const wrapper = shallow(<Modules.ArtContainer song={song} />);

  test('should render a div with art-container class', () => {
    expect(wrapper.find('div.art-container')).toBeTruthy();
  });
  test('should apply cover art as a background image', () => {
    const { backgroundImage } = wrapper.find('div.art-container').prop('style');
    const imgIndex = backgroundImage.indexOf(song.coverArt);
    expect(imgIndex).toBeGreaterThan(-1);
  });
});
