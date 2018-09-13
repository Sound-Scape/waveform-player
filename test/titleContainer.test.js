const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <TitleContainer /> ', () => {
  test('should render the playbutton,title, artist components', () => {
    const wrapper = shallow(<Modules.TitleContainer song={song} />);
    expect(wrapper.find('div.title-container').children()).toHaveLength(3);
  });
});