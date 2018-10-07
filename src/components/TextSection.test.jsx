import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import TextSection from './TextSection';

describe('TextSection component', () => {
  it('renders without errors', () => {
    const component = shallow(<TextSection />);
    expect(component.exists()).to.equal(true);
  });
});
