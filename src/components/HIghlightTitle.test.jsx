import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightTitle from './HighlightTitle';

describe('HighlightTitle component', () => {
  it('renders without errors', () => {
    const component = shallow(<HighlightTitle />);
    expect(component.exists()).to.equal(true);
  });
});
