const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
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
  test('comments should not be immediately visible', () => {
    const wrapper = shallow(<Modules.Comment comment={comments[0]} />);
    const children = wrapper.find('.wp-comment-wrapper');
    expect(children.length).toBe(1);
  })

  test('avatar should show/hide comments on mouseEnter/mouseLeave', () => {
    const wrapper = shallow(<Modules.Comment comment={comments[0]} />);

    expect(wrapper.find('.wp-comment').children().length).toBe(0);

    wrapper.find('.wp-comment-avatar').simulate('mouseEnter');
    expect(wrapper.find('.wp-comment').children().length).toBe(2);

    wrapper.find('.wp-comment-avatar').simulate('mouseLeave');
    expect(wrapper.find('.wp-comment').children().length).toBe(0);
  });
});
