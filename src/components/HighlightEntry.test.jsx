import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightEntry from './HighlightEntry';

describe('HighlightEntry component', () => {
  it('renders without errors', () => {
    const component = shallow(<HighlightEntry />);
    expect(component.exists()).to.equal(true);
  });
});
