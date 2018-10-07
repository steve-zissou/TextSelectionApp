import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import TextTitle from './TextTitle';

describe('TextTitle component', () => {
  it('renders without errors', () => {
    const component = shallow(<TextTitle />);
    expect(component.exists()).to.equal(true);
  });
});
