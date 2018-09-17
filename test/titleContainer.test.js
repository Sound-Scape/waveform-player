const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow, mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <TitleContainer /> ', () => {
  test('should render the playbutton,title, artist components', () => {
    const wrapper = shallow(<Modules.TitleContainer song={song} />);
    expect(wrapper.find('div.title-container').children()).toHaveLength(3);
  });

  test('should change playbutton graphic if playing', () => {
    const wrapper1 = mount(<Modules.Playbutton isPlaying={false} playPause={() => null} />);
    const wrapper2 = mount(<Modules.Playbutton isPlaying={true} playPause={() => null} />);


    expect(wrapper1.containsMatchingElement(<div className="wp-play" />)).toBe(true);
    expect(wrapper1.containsMatchingElement(<div className="wp-pause1"/>)).toBe(false);

    expect(wrapper2.containsMatchingElement(<div className="wp-play" />)).toBe(false);
    expect(wrapper2.containsMatchingElement(<div className="wp-pause2"/>)).toBe(true);
  });


});