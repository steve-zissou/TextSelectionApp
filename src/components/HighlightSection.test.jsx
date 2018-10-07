import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightSection from './HighlightSection';

describe('HighlightSection component', () => {
  it('renders without errors', () => {
    const component = shallow(<HighlightSection />);
    expect(component.exists()).to.equal(true);
  });
});
