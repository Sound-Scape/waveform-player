const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<WaveformPlayer />', () => {
  test('should pass down correct props to children components', async () => {
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

  test('should show modal when showModal is set to true', () => {
    const wrapper = shallow(<Modules.WaveformPlayer />);
    const children = wrapper.find('.waveform-player-wrapper').children().length;
    wrapper.setState({ showModal: true});
    const childrenWithModal = wrapper.find('.waveform-player-wrapper').children().length;
    expect(childrenWithModal).toBe(children + 1);
  });

  test('should change state to playing if clicked', () => {
    const wrapper = shallow(<Modules.WaveformPlayer />);
    wrapper.find('.waveform-player-wrapper').simulate('click', { currentTarget: 'x', target: 'x' });
    expect(wrapper.state().isPlaying).toBe(true);
  });
  
  test('should change state when toggleModal is invoked', () => {
    const wrapper = shallow(<Modules.WaveformPlayer />);
    wrapper.instance().toggleModal({ currentTarget: 'x', target: 'x' });
    expect(wrapper.state().showModal).toBe(true);
  });
});