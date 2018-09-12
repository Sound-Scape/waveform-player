const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');

const ArtContainer = require('../client/components/ArtContainer.jsx');
const InfoContainer = require('../client/components/InfoContainer.jsx');
const PlayerContainer = require('../client/components/PlayerContainer.jsx');
const TitleContainer = require('../client/components/TitleContainer.jsx');
const WaveformPlayer = require('../client/components/WaveformPlayer.jsx');
const mockData = require('./mockData.js');

const song = mockData.allData.songData;
const comments = mockData.allData.comments;
const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });


describe('<WaveformPlayer />', () => {
  test('Should pass down correct props to children components', async () => {
    const wrapper = shallow(<WaveformPlayer />);
    await wrapper.setState({ song, comments });

    const titleContainer = wrapper.find(TitleContainer);
    const artContainer = wrapper.find(ArtContainer);
    const infoContainer = wrapper.find(InfoContainer);
    const playerContainer = wrapper.find(PlayerContainer);

    expect(titleContainer.props().song).toBe(song);
    expect(artContainer.props().song).toBe(song);
    expect(infoContainer.props().song).toBe(song);
    expect(playerContainer.props().comments).toBe(comments);
  });
});

describe(' <InfoContainer /> ', () => {
  test('some test', () => {
    expect(true).toBe(true);
  });
});

describe(' <PlayerContainer /> ', () => {
  test('some test', () => {
    expect(true).toBe(true);
  });
});

describe(' <TitleContainer /> ', () => {
  test('some test', () => {
    expect(true).toBe(true);
  });
});

describe(' <ArtContainer /> ', () => {
  test('some test', () => {
    const wrapper = shallow(<ArtContainer song={{coverArt: 'fakeurl'}} />);
    console.log('2', wrapper);
    expect(true).toBe(true);
  });
});