const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<WaveformPlayer />', () => {
  test('Should pass down correct props to children components', async () => {
    const wrapper = shallow(<Modules.WaveformPlayer />);
    await wrapper.setState({ song, comments });

    const titleContainer = wrapper.find(Modules.TitleContainer);
    const artContainer = wrapper.find(Modules.ArtContainer);
    const infoContainer = wrapper.find(Modules.InfoContainer);
    const playerContainer = wrapper.find(Modules.PlayerContainer);

    expect(titleContainer.props().song).toBe(song);
    expect(artContainer.props().song).toBe(song);
    expect(infoContainer.props().song).toBe(song);
    expect(playerContainer.props().comments).toBe(comments);
  });
});