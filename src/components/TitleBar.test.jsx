import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import TitleBar from './TitleBar';

describe('TitleBar component', () => {
  it('renders without errors', () => {
    const component = shallow(<TitleBar />);
    expect(component.exists()).to.equal(true);
  });
});
