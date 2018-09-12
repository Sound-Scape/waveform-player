const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <ArtContainer /> ', () => {
  test('should render a div with art-container class', () => {
    const wrapper = shallow(<Modules.ArtContainer song={song} />);
    expect(wrapper.find('div.art-container')).toBeTruthy();
  });
});