const React = require('react');
const ReactDom = require('react-dom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');
const sinon = require('sinon');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <Modal /> ', () => {

  const modal = global.document.createElement('div');
  modal.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(modal);

  test('should render proper image', () => {
    const wrapper = shallow(<Modules.Modal song={song} toggleModal={() => null} />);
    const modalImage = wrapper.find('.img-modal').props().src;
    expect(modalImage).toBe(song.coverArt);
  });

  test('should call toggleModal onClick', () => {
    const spy = sinon.spy();

    const wrapper = shallow(<Modules.Modal song={song} toggleModal={spy} />);
    wrapper.find('.wp-modal-tint').simulate('click');
    expect(spy.called).toBe(true);
  });
  
});