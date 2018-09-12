const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { song, comments } = require('./mockData.js');
const Modules = require('../client/components');

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe(' <PlayerContainer /> ', () => {
  test('some test', () => {
    expect(true).toBe(true);
  });
});