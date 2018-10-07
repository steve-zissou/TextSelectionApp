import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightSpan from './HighlightSpan';

describe('HighlightSpan component', () => {
  it('renders without errors', () => {
    const component = shallow(<HighlightSpan />);
    expect(component.exists()).to.equal(true);
  });
});
