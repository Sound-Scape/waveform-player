const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const Moment = require('moment');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <InfoContainer /> ', () => {
  test('should render proper number of subcomponents', () => {
    const wrapper = shallow(<Modules.InfoContainer song={song} />);
    expect(wrapper.find('div.info-container').children()).toHaveLength(2);
  });

  test('should render proper date and text', () => {
    const wrapper = shallow(<Modules.InfoContainer song={song} />);
    expect(wrapper.find(Modules.Date).props().date).toBe(song.date);
    expect(wrapper.find(Modules.GenreHash).props().genre).toBe(song.genre);
  });
  test('date should display in proper "fromNow" format', () => {
    const wrapper = shallow(<Modules.Date date={song.date} />);
    const formattedDate = Moment(song.date).fromNow();
    expect(wrapper.text()).toBe(formattedDate);
  });
  test('should prepend hashtag before name of genre', () => {
    const wrapper = shallow(<Modules.GenreHash genre={song.genre} />);
    const hashIndex = wrapper.text().indexOf('#');
    expect(hashIndex).toBeGreaterThan(-1);
  })
});